import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import styles from "./About.module.scss";
import Image from "next/image";

export const AboutPage = () => {
    return (
        <PageTemplate className={styles.aboutPage}>
            <div className={styles.mainContent}>
                <div className={styles.verticalTextLeft}></div>

                <div className={styles.contentArea}>
                    <Image
                        src="/img/PlaceholderAboutpage.png"
                        alt="About Image"
                        className={styles.aboutImage}
                        width={1000}
                        height={1000}
                    />
                </div>

                <div className={styles.verticalTextRight}></div>
            </div>
        </PageTemplate>
    );
};
