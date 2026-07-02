import Link from "next/link";
import styles from "./PreviewCard.module.css";

interface PreviewCardProps {
  href: string;
  eyebrow: string;
  eyebrowColor: "teal" | "pink";
  title: string;
  description: string;
}

export default function PreviewCard({
  href,
  eyebrow,
  eyebrowColor,
  title,
  description,
}: PreviewCardProps) {
  return (
    <Link
      href={href}
      className={`${styles.card} ${
        eyebrowColor === "teal" ? styles.teal : styles.pink
      }`}
    >
      <p className={styles.eyebrow}>{eyebrow}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </Link>
  );
}
