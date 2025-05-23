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

type CardType = keyof CardContent;

export const Footer = () => {
    const [activeCard, setActiveCard] = useState<CardType | null>(null);

    const cardContents: CardContent = {
        box1: "This is the content for Box 1. You can put any text here.",
        plus: "This is additional information that appears when clicking the +++ button.",
        language: "Select your preferred language: English | Deutsch",
    };

    const handleCardToggle = (cardType: CardType) => {
        setActiveCard((current) => (current === cardType ? null : cardType));
    };

    const instagramLink = "https://www.instagram.com/studio.blumenspiess/";
    const mailLink = "mailto:helio.spiess@studio-blumenspiess.de";

    const renderActionButton = (
        cardType: CardType,
        buttonContent: React.ReactNode,
        ariaLabel: string
    ) => (
        <div style={{ position: "relative", display: "inline-block" }}>
            <button
                className={styles.link}
                onClick={() => handleCardToggle(cardType)}
                aria-label={ariaLabel}
                tabIndex={0}
            >
                {buttonContent}
            </button>
            {activeCard === cardType && (
                <Textcard
                    content={cardContents[cardType]}
                    isOpen={true}
                    onClose={() => setActiveCard(null)}
                    buttonContent={buttonContent}
                />
            )}
        </div>
    );

    return (
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
                    {renderActionButton(
                        "language",
                        <LanguageIcon />,
                        "Select language"
                    )}
                    {renderActionButton("box1", <>BOX1</>, "Open Box 1")}
                    {renderActionButton(
                        "plus",
                        <b>+++</b>,
                        "Show more information"
                    )}
                </nav>
            </div>
        </footer>
    );
};
