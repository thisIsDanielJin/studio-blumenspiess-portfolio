import { ReactNode } from "react";
import styles from "./Highlight.module.scss";

export const Highlight = ({ children }: { children: ReactNode }) => {
  return <mark className={styles.highlight}>{children}</mark>;
};
