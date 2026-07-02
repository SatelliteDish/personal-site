import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AccentStripe from "@/components/AccentStripe";
import StatusLine from "@/components/StatusLine";
import PreviewCard from "@/components/PreviewCard";
import { getAllPostsMeta } from "@/lib/posts";
import { experience } from "@/lib/resume";
import styles from "./page.module.css";

export default function Home() {
  const posts = getAllPostsMeta().slice(0, 2);
  const currentRole = experience[0];

  return (
    <>
      <Nav />

      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heading}>Michael Vitale</h1>
          <p className={styles.tagline}>
            Full-stack engineer building web, mobile, and the cloud
            infrastructure underneath.
          </p>
          <StatusLine>currently building NFC hardware + cloud infra</StatusLine>
        </div>
      </section>

      <AccentStripe />

      <main className="container">
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>From the blog</h2>
            <Link href="/blog" className={styles.sectionLink}>
              View all posts →
            </Link>
          </div>
          <div className={styles.cardGrid}>
            {posts.map((post) => (
              <PreviewCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                eyebrow="Blog"
                eyebrowColor="teal"
                title={post.title}
                description={post.excerpt}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Currently</h2>
            <Link href="/resume" className={styles.sectionLink}>
              View full resume →
            </Link>
          </div>
          <div className={styles.cardGrid}>
            <PreviewCard
              href="/resume"
              eyebrow="Resume"
              eyebrowColor="pink"
              title={`${currentRole.title}`}
              description={`${currentRole.company}, ${currentRole.location}`}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
