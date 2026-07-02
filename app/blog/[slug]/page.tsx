import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import remarkFlexibleToc, { type TocItem } from "remark-flexible-toc";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AccentStripe from "@/components/AccentStripe";
import { mdxComponents } from "@/components/mdx/mdxComponents";
import TableOfContents from "@/components/mdx/TableOfContents";
import {
  getAllPostSlugs,
  getPostFrontmatter,
  getPostSource,
  type PostFrontmatter,
} from "@/lib/posts";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static export needs every dynamic route resolved at build time.
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

// No routes beyond the ones generateStaticParams returns — required
// for `output: "export"`, since there's no server left at request time
// to render anything on demand.
export const dynamicParams = false;

interface Scope extends Record<string, unknown> {
  toc: TocItem[];
}

// evaluate<TFrontmatter>() requires TFrontmatter to extend
// Record<string, unknown>; intersecting locally here keeps that
// constraint happy without adding an index signature to the shared
// PostFrontmatter type (which breaks Omit-based derivation in lib/posts.ts).
type MdxFrontmatter = PostFrontmatter & Record<string, unknown>;

// remark-flexible-toc walks the same heading tree rehype-slug does, and
// both use github-slugger internally for ids -- so a TOC entry's href
// always lines up with the id on the real rendered heading, with no
// separate bookkeeping needed.
const mdxOptions: EvaluateOptions<Scope> = {
  parseFrontmatter: true,
  vfileDataIntoScope: "toc",
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkFlexibleToc],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
        },
      ],
    ],
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { title } = getPostFrontmatter(slug);
    return { title: `${title} — Michael Vitale` };
  } catch {
    return { title: "Post not found — Michael Vitale" };
  }
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let source: string;
  try {
    source = getPostSource(slug);
  } catch {
    notFound();
  }

  const { content, frontmatter, scope, error } = await evaluate<
    MdxFrontmatter,
    Scope
  >({
    source,
    options: mdxOptions,
    components: mdxComponents,
  });

  if (error) {
    // A real MDX syntax error in a post -- surface something readable
    // instead of a blank page, since this is a build-time export and
    // there's no server around afterwards to fix it live.
    throw error;
  }

  const { title, date, tags = [] } = frontmatter;

  return (
    <>
      <Nav />

      <main className="container">
        <div className={styles.backRow}>
          <Link href="/blog" className={styles.back}>
            ← Back to blog
          </Link>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.meta}>
            <time dateTime={date}>{formatDate(date)}</time>
            {tags.length > 0 && (
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <AccentStripe />

        <TableOfContents items={scope.toc} />

        <article className={styles.article}>
          <Suspense fallback={<p className={styles.loading}>Loading post…</p>}>
            {content}
          </Suspense>
        </article>
      </main>

      <Footer />
    </>
  );
}
