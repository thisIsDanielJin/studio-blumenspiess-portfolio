"use client";

import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import { useProjects } from "@/app/context/ProjectsContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./ProjectMeta.module.scss";

export default function ProjectMeta() {
    const projects = useProjects();
    const params = useParams();
    
    const projectNameWithMeta = params?.projectName
        ? decodeURIComponent(params.projectName as string)
        : "";
    
    // Remove "_Meta" suffix to get the actual project name
    const projectName = projectNameWithMeta.replace(/_Meta$/, "");

    if (!projects) {
        return (
            <PageTemplate className={styles.projectMetaPage}>
                <div className={styles.loading}>Loading...</div>
            </PageTemplate>
        );
    }

    const project = projects.find((p) => p.Name === projectName);

    if (!project) {
        return (
            <PageTemplate className={styles.projectMetaPage}>
                <div className={styles.notFound}>
                    <h1>Project not found</h1>
                    <Link href="/projects" className={styles.backLink}>
                        Back to Projects
                    </Link>
                </div>
            </PageTemplate>
        );
    }

    return (
        <PageTemplate className={styles.projectMetaPage}>
            <div className={styles.container}>
                <h1 className={styles.title}>{project.Name} - Meta</h1>
                <div className={styles.content}>Test</div>
            </div>
        </PageTemplate>
    );
}
