"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ProjectsMenu } from "./ProjectsMenu";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname();
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/studio-blumenspiess") return pathname === path;
    if (path === "/about") return pathname.startsWith("/about");
    if (path === "/relations") return pathname === "/relations";
    return false;
  };

  const isProjectsActive = pathname.startsWith("/projects");

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Desktop header */}
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

      {/* Mobile toggle button */}
      <button
        className={styles.mobileToggle}
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        +
      </button>

      {/* Mobile fullscreen menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileOverlay}>
          <button
            className={styles.mobileClose}
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>

          <nav className={styles.mobileNav}>
            <Link
              href="/studio-blumenspiess"
              className={`${styles.mobileNavItem} ${styles.mobileNavItemFirst}`}
              onClick={closeMobileMenu}
            >
              STUDIO.BLUMENSPIESS
            </Link>

            <Link
              href="/about"
              className={styles.mobileNavItem}
              onClick={closeMobileMenu}
            >
              ABOUT
            </Link>

            <Link
              href="/relations"
              className={styles.mobileNavItem}
              onClick={closeMobileMenu}
            >
              +++
            </Link>

            <span className={styles.mobileNavItem}>PROJECTS</span>

            <div className={styles.mobileProjectsList}>
              {["01", "02", "03", "04", "05", "06", "07", "08"].map((id) => (
                <Link
                  key={id}
                  href={`/projects/${id}`}
                  className={styles.mobileProjectLink}
                  onClick={closeMobileMenu}
                >
                  {id}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Desktop projects dropdown */}
      {projectsMenuOpen && (
        <ProjectsMenu
          onClose={() => setProjectsMenuOpen(false)}
          currentProjectId={pathname.startsWith("/projects/") ? pathname.split("/")[2] : undefined}
        />
      )}
    </>
  );
};
