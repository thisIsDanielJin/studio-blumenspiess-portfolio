"use client";

import React, { useRef } from "react";
import styles from "./Projects.module.scss";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import { Projekt } from "@/app/types";
import mockprojects from "@/app/mockdata/mockprojects.json";
import { ProjectsCard } from "@/app/components/Projectscard/Projectscard";
import { useHorizontalScroll } from "@/app/hooks/useHorizontalScroll";

const ProjectsPage = () => {
    const projekte: Projekt[] = mockprojects.projekte;
    const scrollRef = useRef<HTMLDivElement>(null);

    // Apply the horizontal scroll hook to the grid container
    useHorizontalScroll(scrollRef);

    return (
        <>
            <PageTemplate className={styles.projectsPage}>
                <div className={styles.content}>
                    <div className={styles.projectsGrid} ref={scrollRef}>
                        {projekte.map((projekt) => (
                            <ProjectsCard
                                key={projekt.name}
                                project={projekt}
                            />
                        ))}
                    </div>
                </div>
            </PageTemplate>
        </>
    );
};

export default ProjectsPage;
