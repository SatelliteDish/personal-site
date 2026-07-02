import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AccentStripe from "@/components/AccentStripe";
import { getAllPostsMeta } from "@/lib/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog — Michael Vitale",
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <Nav />

      <main className="container">
        <header className={styles.header}>
          <h1 className={styles.heading}>Blog</h1>
          <p className={styles.sub}>
            Notes on the systems I build and the things I run into while
            building them.
          </p>
        </header>

        <AccentStripe />

        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.item}>
              <Link href={`/blog/${post.slug}`} className={styles.link}>
                <div className={styles.itemHead}>
                  <h2 className={styles.title}>{post.title}</h2>
                  <time className={styles.date} dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </div>
                <p className={styles.excerpt}>{post.excerpt}</p>
                {post.tags.length > 0 && (
                  <div className={styles.tags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}
