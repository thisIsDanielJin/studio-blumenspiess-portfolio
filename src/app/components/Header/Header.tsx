"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { useTextScale } from "@/app/hooks/useTextScale";

export const Header = () => {
    const pathname = usePathname();
    const { containerRef, textRef } = useTextScale();

    // Check if current path is projects or a sub-path of projects
    const isProjectsPath =
        pathname === "/projects" || pathname.startsWith("/projects/");

    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                <Link
                    href="/home"
                    className={`${styles.link} ${pathname === "/home" ? styles.activeLink : ""}`}
                >
                    HOME
                </Link>

                <Link
                    href="/projects"
                    className={`${styles.projectslink} ${isProjectsPath ? styles.activeLink : ""}`}
                    ref={containerRef}
                >
                    <p className={styles.projectslinktext} ref={textRef}>
                        PROJEKTE
                    </p>
                </Link>

                <Link
                    href="/about"
                    className={`${styles.link} ${pathname === "/about" ? styles.activeLink : ""}`}
                >
                    ABOUT
                </Link>

                <Link href="/home" className={styles.link}>
                    DE/EN
                </Link>
            </nav>
        </header>
    );
};
