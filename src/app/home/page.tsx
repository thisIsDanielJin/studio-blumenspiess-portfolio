import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import styles from "./Home.module.scss";
import Image from "next/image";

const HomePage = () => {
    return (
        <>
            <PageTemplate className={styles.homePage}>
                <div className={styles.mainContent}>
                    <div className={styles.verticalTextLeft}></div>

                    <div className={styles.contentArea}>
                        <Image
                            src="/img/Cut_Schwarz_rotated.svg"
                            alt="cutout"
                            fill
                            style={{
                                zIndex: 2,
                                objectFit: "contain",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                        <Image
                            src="/img/tempblume.jpg"
                            alt="cutout"
                            fill
                            style={{
                                zIndex: 1,
                                objectFit: "contain",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>

                    <div className={styles.verticalTextRight}></div>
                </div>
            </PageTemplate>
        </>
    );
};

export default HomePage;
