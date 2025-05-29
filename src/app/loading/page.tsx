"use client";

import { useRouter } from "next/navigation";
import styles from "./Loading.module.scss";

/**
 * LoadingPage Component
 * Displays a loading screen with a button to enter the main application
 * @returns The rendered loading page component
 */
const LoadingPage = () => {
    const router = useRouter();

    const handleEnter = () => {
        router.push("/home");
    };

    return (
        <div className={styles.loadingPage}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>Loading...</div>
                <button
                    className={styles.enterButton}
                    onClick={handleEnter}
                    aria-label="Enter site"
                >
                    ENTER
                </button>
            </div>
        </div>
    );
};

export default LoadingPage;
