import type { Metadata } from "next";
import { Post } from "@/lib/posts";
import { getPostImagePath } from "@/lib/images";

export function generatePostMetadata(post: Post): Metadata {
  const image = post.frontmatter.featuredImage
    ? getPostImagePath(post.slug, post.frontmatter.featuredImage)
    : undefined;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.spoiler,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.spoiler,
      images: image ? [{ url: image }] : [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.spoiler,
      images: image ? [image] : [],
    },
  };
}
