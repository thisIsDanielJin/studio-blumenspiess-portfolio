"use client";

import React, { useEffect, useState } from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import { Projekt } from "@/app/types";
import mockprojects from "@/app/mockdata/mockprojects.json";
import Image from "next/image";
import styles from "./ProjectDetail.module.scss";
import Link from "next/link";

export default function ProjectDetail({
    params,
}: {
    params: Promise<{ projectName: string }>;
}) {
    const [project, setProject] = useState<Projekt | null>(null);
    const [loading, setLoading] = useState(true);

    // Unwrap params using React.use()
    const projectName = React.use(params).projectName;

    useEffect(() => {
        // Find the project with the matching name
        const foundProject = mockprojects.projekte.find(
            (p) => p.name === decodeURIComponent(projectName)
        );

        if (foundProject) {
            setProject(foundProject);
        }
        setLoading(false);
    }, [projectName]);

    if (loading) {
        return (
            <PageTemplate className={styles.projectDetailPage}>
                <div className={styles.loading}>Loading...</div>
            </PageTemplate>
        );
    }

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
                <div className={styles.header}>
                    <h1 className={styles.title}>{project.name}</h1>
                    <Link href="/projects" className={styles.backLink}>
                        Back to Projects
                    </Link>
                </div>

                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={project.titelBild}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className={styles.projectImage}
                        />
                    </div>

                    <div className={styles.details}>
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Location</h2>
                            <p>{project.ort}</p>
                        </div>

                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Team</h2>
                            <ul className={styles.teamList}>
                                {project.personen.map((person, index) => (
                                    <li key={index}>{person}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>About</h2>
                            <p>{project.beschreibung1}</p>
                            <p>{project.beschreibung2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}
