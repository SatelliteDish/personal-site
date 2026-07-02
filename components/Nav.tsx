import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.mark}>
          Michael Vitale
        </Link>
        <nav className={styles.links} aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/resume">Resume</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
