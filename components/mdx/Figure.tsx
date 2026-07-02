import styles from "./mdx.module.css";

interface FigureProps {
  src?: string;
  alt?: string;
  title?: string;
}

/**
 * Renders markdown images — `![a fox mid-stride in fresh snow](/photos/fox.jpg "Sooke, BC")`
 * — as a styled <figure>, with the optional markdown "title" text (the
 * part in quotes) shown as a caption underneath.
 *
 * This uses a plain <img>, not next/image. next.config.ts sets
 * images.unoptimized: true because that's required for `output:
 * "export"` (there's no server left at request time to resize images
 * on the fly) — so next/image's main benefit doesn't apply here, and
 * it also wants explicit width/height (or a `fill` parent with a
 * fixed aspect ratio) that plain markdown image syntax doesn't give
 * you. A plain, lazy-loaded <img> gets you the same end result with
 * less to configure. Drop image files in /public and reference them
 * with a leading slash, e.g. /photos/fox.jpg.
 */
export default function Figure({ src, alt, title }: FigureProps) {
  if (!src) return null;

  return (
    <figure className={styles.figure}>
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className={styles.figureImg}
      />
      {title && <figcaption className={styles.figcaption}>{title}</figcaption>}
    </figure>
  );
}
