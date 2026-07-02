import type { ReactNode } from "react";
import styles from "./StatusLine.module.css";

export default function StatusLine({ children }: { children: ReactNode }) {
  return (
    <p className={styles.status}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </p>
  );
}
