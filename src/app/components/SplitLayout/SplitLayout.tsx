import { ReactNode } from "react";
import styles from "./SplitLayout.module.scss";

interface SplitLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export const SplitLayout = ({ left, right }: SplitLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right} data-scroll-panel>{right}</div>
    </div>
  );
};
