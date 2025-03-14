import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.leftContainer}>
                    <Link href="/" className={styles.link}>
                        Instagram
                    </Link>

                    <Link href="/projects" className={styles.link}>
                        Mail
                    </Link>

                    <Link href="/" className={styles.link}>
                        World
                    </Link>
                </nav>
                <nav className={styles.rightContainer}>
                    <Link href="/" className={styles.link}>
                        BOX1
                    </Link>

                    <Link href="/" className={styles.link}>
                        <b>+++</b>
                    </Link>
                </nav>
            </div>
        </footer>
    );
};
