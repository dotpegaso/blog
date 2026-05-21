import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dotpegaso",
  description: "Personal blog",
  metadataBase: new URL("https://dotpegaso.com.br"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
