"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Global from "@/components/icons/Global";
import Wings from "@/components/icons/Wings";
import styles from "./Header.module.css";

type Props = {
  locale: "en" | "pt";
};

export default function Header({ locale }: Props) {
  const pathname = usePathname();
  const nextLocale = locale === "en" ? "pt" : "en";
  const segments = pathname.split("/");
  segments[1] = nextLocale;
  const localizedPath = segments.join("/");

  return (
    <header className={styles.container}>
      <Link href={`/${locale}`} className={styles.link}>
        <Wings fill="var(--primary)" />
        dotpegaso
      </Link>

      <Link href={localizedPath} className={styles.link}>
        <Global fill="var(--primary)" />
        {nextLocale}
      </Link>
    </header>
  );
}
