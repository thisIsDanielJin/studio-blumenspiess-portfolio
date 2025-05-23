"use client";

import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import { useProjects } from "@/app/context/ProjectsContext";
import Image from "next/image";
import styles from "./ProjectDetail.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
    const projects = useProjects();
    const params = useParams();
    const projectName = params?.projectName
        ? decodeURIComponent(params.projectName as string)
        : "";

    if (!projects) {
        return (
            <PageTemplate className={styles.projectDetailPage}>
                <div className={styles.loading}>Loading...</div>
            </PageTemplate>
        );
    }

    const project = projects.find((p) => p.Name === projectName);

    if (!project) {
        return (
            <PageTemplate className={styles.projectDetailPage}>
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
        <PageTemplate className={styles.projectDetailPage}>
            <div className={styles.container}>
                <div className={styles.imagesContainer}>
                    <Image
                        src={project.Titelbild.url}
                        alt={project.Name}
                        width={200}
                        height={200}
                    />
                    <Image
                        src={project.Titelbild.url}
                        alt={project.Name}
                        width={200}
                        height={200}
                    />
                    <Image
                        src={project.Titelbild.url}
                        alt={project.Name}
                        width={200}
                        height={200}
                    />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.firstBox}>
                        <div className={styles.firstBoxUpperRow}>
                            <div className={styles.firstBoxDecoration}>
                                ✧ ✦ ✧ ✦ ✧
                            </div>
                            <div className={styles.firstBoxChat}>Chat</div>
                        </div>
                        <div className={styles.firstBoxLowerRow}>
                            <div className={styles.firstBoxLowerRowProject}>
                                Project
                            </div>
                            <div className={styles.firstBoxLowerRowPlace}>
                                Place
                            </div>
                            <div className={styles.firstBoxLowerRowName}>
                                Name
                            </div>
                            <div className={styles.firstBoxLowerRowPersons}>
                                Persons
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondBox}>Description 2</div>
                    <div className={styles.thirdBox}>Description 3</div>
                </div>
            </div>
        </PageTemplate>
    );
}
