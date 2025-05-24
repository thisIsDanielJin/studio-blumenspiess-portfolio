import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import styles from "./Home.module.scss";
import Image from "next/image";

/**
 * HomePage Component
 * Displays the main landing page with a cutout SVG overlay on top of a background image
 * @returns The rendered home page component
 */
const HomePage = () => {
    return (
        <PageTemplate className={styles.homePage}>
            <div className={styles.mainContent}>
                <div className={styles.verticalTextLeft}></div>

                <div className={styles.contentArea}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/img/tempblume.jpg"
                            alt="background flower image"
                            fill
                            className={styles.backgroundImage}
                            priority
                        />
                        <div className={styles.cutoutContainer}>
                            <img
                                src="/img/Cut_Schwarz.svg"
                                alt="cutout overlay"
                                className={styles.cutoutSvg}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.verticalTextRight}></div>
            </div>
        </PageTemplate>
    );
};

export default HomePage;
