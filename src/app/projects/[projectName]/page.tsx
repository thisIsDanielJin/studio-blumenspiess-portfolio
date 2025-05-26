"use client";

import React, { useRef, useState } from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import { useProjects } from "@/app/context/ProjectsContext";
import Image from "next/image";
import styles from "./ProjectDetail.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getStrapiMedia } from "@/app/utils/getStrapiMedia";
import { useHorizontalScroll } from "@/app/hooks/useHorizontalScroll";
import { Textcard } from "@/app/components/Textcard/Textcard";

export default function ProjectDetail() {
    const projects = useProjects();
    const params = useParams();
    const imagesContainerRef = useRef<HTMLDivElement>(null);
    const [isChatCardOpen, setIsChatCardOpen] = useState(false);
    useHorizontalScroll(imagesContainerRef);
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

    const chatIcon = (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    );

    console.log(project);

    return (
        <PageTemplate className={styles.projectDetailPage}>
            <div className={styles.container}>
                <div
                    className={styles.imagesContainer}
                    ref={imagesContainerRef}
                >
                    <Image
                        src={getStrapiMedia(project.Titelbild.url)}
                        alt={project.Name}
                        width={200}
                        height={200}
                    />
                    {project.Weitere_Bilder.map((image) => (
                        <Image
                            key={image.id}
                            src={getStrapiMedia(image.url)}
                            alt={project.Name}
                            width={200}
                            height={200}
                        />
                    ))}
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.firstBox}>
                        <div className={styles.firstBoxUpperRow}>
                            <div className={styles.firstBoxDecoration}>
                                ✧ ✦ ✧ ✦ ✧
                            </div>
                            <div style={{ position: "relative" }}>
                                <button
                                    className={styles.firstBoxChat}
                                    onClick={() =>
                                        setIsChatCardOpen(!isChatCardOpen)
                                    }
                                    aria-label="Open chat"
                                    tabIndex={0}
                                >
                                    {chatIcon}
                                </button>
                                {isChatCardOpen && (
                                    <Textcard
                                        content={`Project:\n\n${project.Beschreibung_2}`}
                                        isOpen={true}
                                        onClose={() => setIsChatCardOpen(false)}
                                        buttonContent={chatIcon}
                                    />
                                )}
                            </div>
                        </div>
                        <div className={styles.firstBoxLowerRow}>
                            <div className={styles.firstBoxLowerRowProject}>
                                {project.Name}
                            </div>
                            <div className={styles.firstBoxLowerRowPlace}>
                                {project.Ort}
                            </div>
                            <div className={styles.firstBoxLowerRowName}>
                                {project.Untertitel}
                            </div>
                            <div className={styles.firstBoxLowerRowPersons}>
                                {project.Personinnen.map((person) => (
                                    <div key={person.id}>{person.Person}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondBox}>
                        {project.Beschreibung_1}
                    </div>
                    <div className={styles.thirdBox}>
                        {project.Beschreibung_2}
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}
