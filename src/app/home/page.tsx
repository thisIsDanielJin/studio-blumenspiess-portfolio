import React from "react";
import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import styles from "./Home.module.scss";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    return (
        <>
            <PageTemplate className={styles.homePage}>
                <div className={styles.mainContent}>
                    <div className={styles.verticalTextLeft}></div>

                    <div className={styles.contentArea}>
                        <Link href="/home-cutout">
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
                        </Link>

                        <Link href="/home-meta">
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
                        </Link>
                    </div>

                    <div className={styles.verticalTextRight}></div>
                </div>
            </PageTemplate>
        </>
    );
};

export default HomePage;
