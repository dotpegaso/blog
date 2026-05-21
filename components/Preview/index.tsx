import Link from "next/link";
import styles from "./Preview.module.css";

type Props = {
  locale: "en" | "pt";
  title: string;
  spoiler: string;
  slug: string;
};

export default function Preview({ locale, title, spoiler, slug }: Props) {
  return (
    <article className={styles.container}>
      <Link href={`/${locale}/${slug}`} className={styles.link}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.spoiler}>{spoiler}</p>
      </Link>
    </article>
  );
}
