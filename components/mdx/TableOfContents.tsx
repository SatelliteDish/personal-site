import type { TocItem } from "remark-flexible-toc";
import styles from "./TableOfContents.module.css";

interface TableOfContentsProps {
  items: TocItem[];
}

/**
 * A styled, collapsible table of contents, built from the post's real
 * heading tree (via remark-flexible-toc) rather than anything
 * hand-written per post. The hrefs match the ids rehype-slug puts on
 * the actual rendered headings -- both use github-slugger internally,
 * so they stay in sync automatically.
 *
 * Built on <details>/<summary> rather than a client component with
 * open/close state: it's the same "drawer" interaction, but native,
 * keyboard- and screen-reader-accessible for free, and needs no
 * JavaScript to work -- important on a static export where every bit
 * of client JS is something you're choosing to ship.
 */
export default function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  const minDepth = Math.min(...items.map((item) => item.depth));

  return (
    <details className={styles.drawer} open>
      <summary className={styles.summary}>
        <svg
          className={styles.chevron}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
        <span>Contents</span>
      </summary>
      <nav aria-label="Table of contents">
        <ul className={styles.list}>
          {items.map((item) => (
            <li
              key={item.href}
              className={styles.item}
              style={{ marginLeft: `${(item.depth - minDepth) * 14}px` }}
            >
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
