import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="container">
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>404</p>
          <h1 className={styles.heading}>Page not found</h1>
          <p className={styles.body}>
            Whatever you were looking for isn&apos;t here. It might have
            moved, or the link might be off.
          </p>
          <Link href="/" className={styles.link}>
            ← Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
