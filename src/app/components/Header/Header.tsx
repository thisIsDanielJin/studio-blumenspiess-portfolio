"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ProjectsMenu } from "./ProjectsMenu";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname();
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/studio-blumenspiess") return pathname === path;
    if (path === "/about") return pathname.startsWith("/about");
    if (path === "/relations") return pathname === "/relations";
    return false;
  };

  const isProjectsActive = pathname.startsWith("/projects");

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link
            href="/studio-blumenspiess"
            className={`${styles.navItem} ${isActive("/studio-blumenspiess") ? styles.active : ""}`}
          >
            STUDIO.BLUMENSPIESS
          </Link>

          <Link
            href="/about"
            className={`${styles.navItem} ${isActive("/about") ? styles.active : ""}`}
          >
            ABOUT
          </Link>

          <Link
            href="/relations"
            className={`${styles.navItem} ${isActive("/relations") ? styles.active : ""}`}
          >
            +++
          </Link>

          <button
            className={`${styles.navItem} ${isProjectsActive ? styles.active : ""}`}
            onClick={() => setProjectsMenuOpen(!projectsMenuOpen)}
          >
            PROJECTS
          </button>
        </nav>
      </header>

      {projectsMenuOpen && (
        <ProjectsMenu
          onClose={() => setProjectsMenuOpen(false)}
          currentProjectId={pathname.startsWith("/projects/") ? pathname.split("/")[2] : undefined}
        />
      )}
    </>
  );
};
