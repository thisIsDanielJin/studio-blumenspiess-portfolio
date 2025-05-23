import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import styles from "./Home.module.scss";
import Image from "next/image";
import Link from "next/link";

/**
 * HomePage Component
 * Displays the main landing page with a masked image effect using an SVG cutout
 * @returns The rendered home page component
 */
const HomePage = () => {
    return (
        <>
            <PageTemplate className={styles.homePage}>
                <div className={styles.mainContent}>
                    <div className={styles.verticalTextLeft}></div>

                    <div className={styles.contentArea}>
                        <Link
                            href="/home-cutout"
                            className={styles.maskedImageContainer}
                        >
                            <Image
                                src="/img/tempblume.jpg"
                                alt="masked flower image"
                                fill
                                className={styles.maskedImage}
                            />
                        </Link>
                    </div>

                    <div className={styles.verticalTextRight}></div>
                </div>
            </PageTemplate>
        </>
    );
};

export default HomePage;
