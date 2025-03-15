import React from "react";
import styles from "./Projects.module.scss";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import { Projekt } from "@/app/types";
import mockprojects from "@/app/mockdata/mockprojects.json";
import { ProjectsCard } from "@/app/components/Projectscard/Projectscard";

export const ProjectsPage = () => {
    const projekte: Projekt[] = mockprojects.projekte;

    return (
        <PageTemplate className={styles.projectsPage}>
            <div className={styles.content}>
                <div className={styles.projectsGrid}>
                    {projekte.map((projekt) => (
                        <ProjectsCard key={projekt.name} project={projekt} />
                    ))}
                </div>
            </div>
        </PageTemplate>
    );
};
