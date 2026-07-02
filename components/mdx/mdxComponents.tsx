import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "next-mdx-remote-client/rsc";
import Figure from "./Figure";
import styles from "./mdx.module.css";

export const mdxComponents: MDXComponents = {
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2 className={styles.h2} {...props} />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className={styles.h3} {...props} />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p className={styles.p} {...props} />
  ),
  a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
    <a className={styles.a} {...props} />
  ),
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className={styles.strong} {...props} />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className={styles.ul} {...props} />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className={styles.ol} {...props} />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={styles.li} {...props} />
  ),
  // remark tags fenced code with a language-xxx class, and rehype-pretty-code
  // adds its own attributes -- destructuring className out means neither
  // can silently overwrite the class we actually want applied.
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code className={styles.code} {...props} />
  ),
  pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre className={styles.pre} {...props} />
  ),
  // rehype-pretty-code renders this when a code block has a title="...".
  figcaption: ({ className, ...props }: ComponentPropsWithoutRef<"figcaption">) => (
    <figcaption className={styles.figcaption} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
  hr: () => <hr className={styles.hr} />,
  // Standard markdown image syntax ![alt](src "caption") is routed here.
  img: Figure,
  table: ({ className, ...props }: ComponentPropsWithoutRef<"table">) => (
    <div className={styles.tableWrap}>
      <table className={styles.table} {...props} />
    </div>
  ),
  th: ({ className, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th className={styles.th} {...props} />
  ),
  td: ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td className={styles.td} {...props} />
  ),
};
