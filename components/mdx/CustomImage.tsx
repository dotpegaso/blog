"use client";
import Image from "next/image";
import { usePost } from "@/components/providers/PostContext";

type Props = {
  src?: string;
  alt?: string;
};

export default function CustomImage({ src = "", alt = "" }: Props) {
  const { slug } = usePost();
  const resolvedSrc = src.startsWith("./")
    ? `/posts/${slug}/${src.replace("./", "")}`
    : src;

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={1200}
      height={700}
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
}
