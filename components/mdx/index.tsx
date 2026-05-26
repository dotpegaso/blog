import type { MDXComponents } from "mdx/types";
import CustomImage from "./CustomImage";
import styles from "./MDX.module.css";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <a {...props} target="_blank" className={styles.anchor} />,
    p: (props) => <p {...props} className={styles.paragraph} />,
    code: (props) => <code {...props} className={styles.shortCode} />,
    strong: (props) => <strong {...props} className={styles.strong} />,
    blockquote: (props) => (
      <blockquote {...props} className={styles.blockquote} />
    ),
    em: (props) => <em {...props} className={styles.emphasis} />,
    ol: (props) => <ol {...props} className={styles.orderedList} />,
    ul: (props) => <ul {...props} className={styles.unorderedList} />,
    li: (props) => <li {...props} className={styles.listItem} />,
    h2: (props) => <h2 {...props} className={styles.header2} />,
    h3: (props) => <h3 {...props} className={styles.header3} />,
    pre: (props) => <pre {...props} className={styles.pre} />,
    img: (props) => (
      <span className={styles.image}>
        <CustomImage {...props} />
      </span>
    ),
    ...components,
  };
}
