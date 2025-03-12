import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                <Link href="/" className={styles.link}>
                    About
                </Link>

                <Link href="/projects" className={styles.link}>
                    Projects
                </Link>

                <Link href="/" className={styles.link}>
                    Kontakt
                </Link>
                <Link href="/about" className={styles.link}>
                    DE/EN
                </Link>
            </nav>
        </header>
    );
};
