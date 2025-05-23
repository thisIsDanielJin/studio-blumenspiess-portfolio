"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.scss";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import { ProjectsCard } from "@/app/components/Projectscard/Projectscard";
import { useHorizontalScroll } from "@/app/hooks/useHorizontalScroll";
import axios from "axios";
import { Projekt } from "../types";

const ProjectsPage = () => {
    //const projekte: Projekt[] = mockprojects.projekte;
    const [projekte, setProjekte] = useState<Projekt[]>([]);

    const scrollRef = useRef<HTMLDivElement>(null);

    // Apply the horizontal scroll hook to the grid container
    useHorizontalScroll(scrollRef);

    useEffect(() => {
        axios
            .get<{ data: Projekt[] }>(
                "https://studio-blumenspiess-cms-production.up.railway.app/api/projects?populate=*"
            )
            .then((response) => {
                setProjekte(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, []);
    console.log(projekte);

    return (
        <>
            <PageTemplate className={styles.projectsPage}>
                <div className={styles.content}>
                    <div className={styles.projectsGrid} ref={scrollRef}>
                        {projekte.map((projekt) => (
                            <ProjectsCard key={projekt.id} project={projekt} />
                        ))}
                    </div>
                </div>
            </PageTemplate>
        </>
    );
};

export default ProjectsPage;
