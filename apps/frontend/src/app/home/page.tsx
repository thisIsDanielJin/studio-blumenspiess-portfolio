import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import styles from "./Home.module.scss";
import Image from "next/image";

const HomePage = () => {
    return (
        <PageTemplate className={styles.homePage}>
            <div className={styles.mainContent}>
                <div className={styles.verticalTextLeft}></div>

                <div className={styles.contentArea}>
                    <Image
                        src="/img/PlaceholderAboutpage.png"
                        alt="Home Image"
                        className={styles.homeImage}
                        width={1000}
                        height={1000}
                    />
                </div>

                <div className={styles.verticalTextRight}></div>
            </div>
        </PageTemplate>
    );
};

export default HomePage;
