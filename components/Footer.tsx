import { contact } from "@/lib/resume";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>© {year} Michael Vitale</p>
        <div className={styles.links}>
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={`https://${contact.github}`} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`https://${contact.linkedIn}`} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`https://${contact.website}`} target="_blank" rel="noreferrer">
            {contact.website}
          </a>
        </div>
      </div>
    </footer>
  );
}
