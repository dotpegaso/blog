import styles from "./PostContent.module.css";

type Props = {
  title: string;
  author: string;
  writtenBy: string;
  readingTime: string;
  children: React.ReactNode;
};

export default function PostContent({
  title,
  author,
  writtenBy,
  readingTime,
  children,
}: Props) {
  return (
    <article className={styles.container}>
      <div className={styles.meta}>
        {writtenBy} {author} · {readingTime}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.body}>{children}</div>
    </article>
  );
}
