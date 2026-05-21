import Header from "@/components/Header";
import Footer from "@/components/Footer";

import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
  locale: "en" | "pt";
};

export default function Layout({ children, locale }: Props) {
  return (
    <div className={styles.container}>
      <Header locale={locale} />
      <main className={styles.children}>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
