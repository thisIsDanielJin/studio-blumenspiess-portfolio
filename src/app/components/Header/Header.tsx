"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();

    // Check if current path is projects or a sub-path of projects
    const isProjectsPath =
        pathname === "/projects" || pathname.startsWith("/projects/");

    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                <Link
                    href="/about"
                    className={`${styles.link} ${pathname === "/about" ? styles.activeLink : ""}`}
                >
                    ABOUT
                </Link>

                <Link
                    href="/projects"
                    className={`${styles.projectslink} ${isProjectsPath ? styles.activeLink : ""}`}
                >
                    <p className={styles.projectslinktext}>PROJEKTE</p>
                </Link>

                <Link
                    href="/contact"
                    className={`${styles.link} ${pathname === "/contact" ? styles.activeLink : ""}`}
                >
                    KONTAKT
                </Link>

                <Link href="/de" className={styles.link}>
                    DE/EN
                </Link>
            </nav>
        </header>
    );
};
