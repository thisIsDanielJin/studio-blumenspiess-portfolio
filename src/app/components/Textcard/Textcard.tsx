import React from "react";
import styles from "./Textcard.module.scss";

interface TextcardProps {
    content: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Textcard: React.FC<TextcardProps> = ({
    content,
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.card}>
            <button className={styles.closeButton} onClick={onClose}>
                X
            </button>
            <div className={styles.content}>{content}</div>
        </div>
    );
};
