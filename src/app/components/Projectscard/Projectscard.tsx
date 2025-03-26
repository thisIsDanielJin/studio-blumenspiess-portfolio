import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projectscard.module.scss";
import { Projekt } from "@/app/types";

interface ProjectsCardProps {
    project: Projekt;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
    return (
        <Link href={`/projects/${project.name}`} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.name}</h3>
            <div className={styles.imageContainer}>
                <Image
                    src={project.titelBild}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.projectImage}
                />
            </div>
        </Link>
    );
};
