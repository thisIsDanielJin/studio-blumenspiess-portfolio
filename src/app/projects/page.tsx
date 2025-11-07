/**
 * ProjectsPage Component
 *
 * Displays a carousel of project cards using Keen Slider.
 * Shows up to 6 projects at a time (3x2 grid) with smooth sliding transitions.
 *
 * @component
 */

"use client";

import React, { useEffect, useState } from "react";
import styles from "./Projects.module.scss";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import { ProjectsCard } from "@/app/components/Projectscard/Projectscard";
import axios from "axios";
import { Projekt } from "../types";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FiFilter } from "react-icons/fi";

const PROJECTS_PER_SLIDE = 6;

// Wheel control function for horizontal scrolling
const WheelControls = (slider: KeenSliderInstance) => {
    let touchTimeout: NodeJS.Timeout;
    let wheelActive: boolean = false;
    let accumulatedDelta: number = 0;
    const DELTA_THRESHOLD = 50; // Threshold to trigger slide change

    function eventWheel(e: WheelEvent) {
        // Check if this is a trackpad gesture (smaller deltaY values, often has deltaX)
        const isTrackpad = Math.abs(e.deltaY) < 50 || e.deltaX !== 0;

        // For trackpad, use a more sophisticated approach
        if (isTrackpad) {
            // Only prevent default if we're using horizontal swipes
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();

                // Accumulate horizontal delta
                accumulatedDelta += e.deltaX;

                if (!wheelActive) {
                    wheelActive = true;
                }

                // Trigger slide change when accumulated delta exceeds threshold
                if (Math.abs(accumulatedDelta) > DELTA_THRESHOLD) {
                    if (accumulatedDelta > 0) {
                        slider.next();
                    } else {
                        slider.prev();
                    }
                    accumulatedDelta = 0;
                }

                clearTimeout(touchTimeout);
                touchTimeout = setTimeout(() => {
                    wheelActive = false;
                    accumulatedDelta = 0;
                }, 100);
            }
        } else {
            // Mouse wheel - use original behavior with vertical scrolling
            e.preventDefault();

            if (!wheelActive) {
                wheelActive = true;
            }

            // Use deltaY (vertical scroll) to move slides horizontally
            if (e.deltaY > 0) {
                slider.next();
            } else {
                slider.prev();
            }

            clearTimeout(touchTimeout);
            touchTimeout = setTimeout(() => {
                wheelActive = false;
            }, 50);
        }
    }

    slider.on("created", () => {
        slider.container.addEventListener("wheel", eventWheel, {
            passive: false,
        });
    });
};

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Projekt[]>([]);
    const [sliderRef] = useKeenSlider(
        {
            slides: {
                perView: 1,
                spacing: 0,
            },
            loop: false,
            mode: "snap",
            created(s) {
                console.log("Slider created with", s.slides.length, "slides");
            },
        },
        [WheelControls]
    );

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get<{ data: Projekt[] }>(
                    "https://studio-blumenspiess-cms-production.up.railway.app/api/projects?populate=*"
                );
                console.log("Fetched projects:", response.data.data.length);
                setProjects(response.data.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    // Create slides with up to 6 projects each
    const slides = React.useMemo(() => {
        const result: Projekt[][] = [];
        for (let i = 0; i < projects.length; i += PROJECTS_PER_SLIDE) {
            const slideProjects = projects.slice(i, i + PROJECTS_PER_SLIDE);
            result.push(slideProjects);
        }
        console.log("Created", result.length, "slides");
        return result;
    }, [projects]);

    if (projects.length === 0) {
        return (
            <PageTemplate className={styles.projectsPage}>
                <div className={styles.content}>
                    <div>Loading projects...</div>
                </div>
            </PageTemplate>
        );
    }

    return (
        <PageTemplate className={styles.projectsPage}>
            <div className={styles.content}>
                <div className={styles.filterContainer}>
                    <FiFilter className={styles.filterIcon} />
                </div>
                <div
                    ref={sliderRef}
                    className={`keen-slider ${styles.projectsGrid}`}
                >
                    {slides.map((slideProjects, slideIndex) => (
                        <div
                            key={`slide-${slideIndex}`}
                            className={`keen-slider__slide ${styles.slide}`}
                        >
                            <div className={styles.slideContent}>
                                {Array.from({ length: PROJECTS_PER_SLIDE }).map(
                                    (_, index) => {
                                        const project = slideProjects[index];
                                        if (!project) return null;

                                        return (
                                            <div
                                                key={`project-${project.id}`}
                                                className={styles.projectCard}
                                            >
                                                <ProjectsCard
                                                    project={project}
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageTemplate>
    );
};

export default ProjectsPage;
