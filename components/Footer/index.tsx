import Image from "next/image";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.socialWrapper}>
        <a
          href="https://instagram.com/dotpegaso"
          target="_blank"
          rel="noreferrer"
          className={styles.anchor}
        >
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={40}
            height={40}
          />
        </a>

        <Image
          src="/avatar.svg"
          alt="Andre Benatti"
          width={100}
          height={100}
          className={styles.avatar}
        />

        <a
          href="https://linkedin.com/in/dotpegaso"
          target="_blank"
          rel="noreferrer"
          className={styles.anchor}
        >
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
      </div>

      <p className={styles.message}>
        I like to build stuff, this blog is one of them.
      </p>
    </footer>
  );
}
