import React, { ReactNode } from "react";
import styles from "./PageTemplate.module.scss";

interface PageTemplateProps {
    children: ReactNode;
    className?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
    children,
    className = "",
}) => {
    return (
        <div className={`${styles.pageContainer} ${className}`}>{children}</div>
    );
};
