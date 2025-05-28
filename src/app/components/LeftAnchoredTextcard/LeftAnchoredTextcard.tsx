import React from "react";
import styles from "./LeftAnchoredTextcard.module.scss";
import CloseIcon from "@mui/icons-material/Close";

/**
 * Props for the LeftAnchoredTextcard component.
 */
export interface LeftAnchoredTextcardProps {
    /** Main text content for the card */
    content: string;
    /** Whether the card is open */
    isOpen: boolean;
    /** Handler to close the card */
    onClose: () => void;
    /** The button content (icon/label) to render in the card's bottom-left */
    buttonContent: React.ReactNode;
}

/**
 * LeftAnchoredTextcard displays a card with content, a close button, and the original button content in the bottom-left.
 * The card is styled to match the button's border radius and color, and is anchored to the left side of its container.
 */
export const LeftAnchoredTextcard: React.FC<LeftAnchoredTextcardProps> = ({
    content,
    isOpen,
    onClose,
    buttonContent,
}) => {
    if (!isOpen) return null;

    // Keyboard handler for accessibility
    const handleButtonContentKeyDown = (
        e: React.KeyboardEvent<HTMLDivElement>
    ) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClose();
        }
    };

    return (
        <div className={styles.card} role="dialog" aria-modal="true">
            <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close card"
                tabIndex={0}
            >
                <CloseIcon />
            </button>
            <div className={styles.content}>{content}</div>
            <div
                className={styles.buttonContent}
                role="button"
                tabIndex={0}
                aria-label="Close card"
                onClick={onClose}
                onKeyDown={handleButtonContentKeyDown}
            >
                {buttonContent}
            </div>
        </div>
    );
};
