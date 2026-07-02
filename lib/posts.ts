import fs from "fs";
import path from "path";
import { getFrontmatter } from "next-mdx-remote-client/utils";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export interface PostMeta extends Omit<PostFrontmatter, "tags"> {
  slug: string;
  tags: string[];
}

function readSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function readRawPost(slug: string): string {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  return fs.readFileSync(fullPath, "utf8");
}

function toMeta(slug: string, raw: string): PostMeta {
  // getFrontmatter only parses the frontmatter block (via vfile-matter) --
  // it doesn't run the MDX compiler, so this is cheap to call once per
  // post even on an index page listing many of them.
  const { frontmatter } = getFrontmatter<Partial<PostFrontmatter>>(raw);

  return {
    slug,
    title: frontmatter.title ?? slug,
    date: frontmatter.date ?? "",
    excerpt: frontmatter.excerpt ?? "",
    tags: frontmatter.tags ?? [],
  };
}

/** Metadata for every post, newest first. No MDX compilation happens here. */
export function getAllPostsMeta(): PostMeta[] {
  const posts = readSlugs().map((slug) => toMeta(slug, readRawPost(slug)));
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Every slug, for generateStaticParams in the [slug] route. */
export function getAllPostSlugs(): string[] {
  return readSlugs();
}

/** Frontmatter for a single post -- cheap, no MDX compile. */
export function getPostFrontmatter(slug: string): PostMeta {
  return toMeta(slug, readRawPost(slug));
}

/**
 * Raw MDX source (frontmatter block included) for a single post. The
 * [slug] page compiles this itself via <MDXRemote>, so the actual
 * MDX -> React compile only ever runs once per post, at build time,
 * for the one page that needs the full body.
 */
export function getPostSource(slug: string): string {
  return readRawPost(slug);
}
