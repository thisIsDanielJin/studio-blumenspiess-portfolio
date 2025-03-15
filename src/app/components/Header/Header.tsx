import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                <Link href="/" className={styles.link}>
                    ABOUT
                </Link>

                <Link href="/projects" className={styles.projectslink}>
                    <p className={styles.projectslinktext}>PROJEKTE</p>
                </Link>

                <Link href="/" className={styles.link}>
                    KONTAKT
                </Link>

                <Link href="/" className={styles.link}>
                    DE/EN
                </Link>
            </nav>
        </header>
    );
};
