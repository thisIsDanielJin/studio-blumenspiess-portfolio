"use client";

import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import { useParams } from "next/navigation";
import { useProjects } from "@/app/context/ProjectsContext";
import { getStrapiMedia } from "@/app/utils/getStrapiMedia";
import Image from "next/image";
import styles from "./ProjectMeta.module.scss";

export default function ProjectMeta() {

    const params = useParams();
    const projects = useProjects();

    const projectName = params?.projectName
        ? decodeURIComponent(params.projectName as string)
        : "";

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
                <div className={styles.notFound}>Project not found</div>
            </PageTemplate>
        );
    }

    return (
        <PageTemplate className={styles.projectMetaPage}>
            <div className={styles.container}>
                <div className={styles.threeColumnLayout}>
                    <div className={styles.leftColumn}>
                        <h3>Project Details</h3>
                        <p>Client: {projectName}</p>
                        <p>Year: 2024</p>
                        <p>Category: Design</p>
                    </div>
                    
                    <div className={styles.centerColumn}>
                        <Image
                            src={getStrapiMedia(project.Titelbild.url)}
                            alt={project.Name}
                            width={600}
                            height={600}
                            className={styles.mainImage}
                        />
                    </div>
                    
                    <div className={styles.rightColumn}>
                        <h3>Information</h3>
                        <p>Additional project information and metadata goes here.</p>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}