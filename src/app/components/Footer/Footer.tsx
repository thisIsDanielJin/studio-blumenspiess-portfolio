"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";
import { Textcard } from "../Textcard/Textcard";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";

type CardContent = {
    box1: string;
    plus: string;
    language: string;
};

export const Footer = () => {
    const [activeCard, setActiveCard] = useState<keyof CardContent | null>(
        null
    );

    const cardContents: CardContent = {
        box1: "This is the content for Box 1. You can put any text here.",
        plus: "This is additional information that appears when clicking the +++ button.",
        language: "Select your preferred language: English | Deutsch",
    };

    const handleCardToggle = (cardType: keyof CardContent) => {
        setActiveCard((current) => (current === cardType ? null : cardType));
    };

    const instagramLink = "https://www.instagram.com/studio.blumenspiess/";
    const mailLink = "mailto:helio.spiess@studio-blumenspiess.de";
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <nav className={styles.leftContainer}>
                        <Link href={instagramLink} className={styles.link}>
                            INSTAGRAM
                        </Link>
                        <Link href={mailLink} className={styles.link}>
                            MAIL
                        </Link>
                    </nav>
                    <nav
                        className={styles.rightContainer}
                        style={{ position: "relative" }}
                    >
                        <button
                            className={styles.link}
                            onClick={() => handleCardToggle("language")}
                        >
                            <LanguageIcon />
                        </button>
                        <button
                            className={styles.link}
                            onClick={() => handleCardToggle("box1")}
                        >
                            BOX1
                        </button>
                        <button
                            className={styles.link}
                            onClick={() => handleCardToggle("plus")}
                        >
                            <b>+++</b>
                        </button>
                        {activeCard && (
                            <Textcard
                                content={cardContents[activeCard]}
                                isOpen={activeCard !== null}
                                onClose={() => setActiveCard(null)}
                            />
                        )}
                    </nav>
                </div>
            </footer>
        </>
    );
};
