import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import styles from "./About.module.scss";

export const AboutPage = () => {
    return (
        <PageTemplate className={styles.aboutPage}>
            <div className={styles.mainContent}>
                <div className={styles.verticalTextLeft}></div>

                <div className={styles.contentArea}>
                    About content goes here
                </div>

                <div className={styles.verticalTextRight}></div>
            </div>
        </PageTemplate>
    );
};
