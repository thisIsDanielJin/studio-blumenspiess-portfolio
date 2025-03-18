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
                <div className={styles.imagesContainer}>
                    <Image
                        src={project.titelBild}
                        alt={project.name}
                        width={200}
                        height={200}
                    />
                    <Image
                        src={project.titelBild}
                        alt={project.name}
                        width={200}
                        height={200}
                    />
                    <Image
                        src={project.titelBild}
                        alt={project.name}
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
