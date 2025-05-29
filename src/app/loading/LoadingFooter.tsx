"use client";

import Link from "next/link";
import styles from "./LoadingFooter.module.scss";

export const LoadingFooter = () => {
    const instagramLink = "https://www.instagram.com/studio.blumenspiess/";
    const mailLink = "mailto:info@studio-blumenspiess.de";

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.leftContainer}>
                    <Link href={instagramLink} className={styles.link}>
                        INSTAGRAM
                    </Link>
                </nav>
                <nav
                    className={styles.rightContainer}
                    style={{ position: "relative" }}
                >
                    <Link href={mailLink} className={styles.link}>
                        MAIL
                    </Link>
                </nav>
            </div>
        </footer>
    );
};
