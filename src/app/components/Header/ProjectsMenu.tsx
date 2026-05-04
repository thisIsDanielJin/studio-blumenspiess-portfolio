"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import styles from "./ProjectsMenu.module.scss";

interface ProjectsMenuProps {
  onClose: () => void;
  currentProjectId?: string;
}

export const ProjectsMenu = ({ onClose, currentProjectId }: ProjectsMenuProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoveredProject = projects.find((p) => p.id === hoveredId);

  return (
    <div className={styles.menu}>
      <div className={styles.list}>
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className={`${styles.item} ${project.id === currentProjectId ? styles.active : ""}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={onClose}
          >
            {project.id}
          </Link>
        ))}
      </div>

      {hoveredProject && (
        <div className={styles.preview}>
          <Image
            src={hoveredProject.previewImage}
            alt={hoveredProject.title}
            width={400}
            height={300}
            unoptimized
          />
        </div>
      )}
    </div>
  );
};
