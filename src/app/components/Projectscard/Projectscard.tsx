import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projectscard.module.scss";
import { Projekt } from "@/app/types";
import { getStrapiMedia } from "@/app/utils/getStrapiMedia";

interface ProjectsCardProps {
    project: Projekt;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
    return (
        <Link href={`/projects/${project.Name}`} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.Name}</h3>
            <div className={styles.imageContainer}>
                <Image
                    src={getStrapiMedia(project.Titelbild.formats.large.url)}
                    alt={project.Name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.projectImage}
                />
            </div>
        </Link>
    );
};
