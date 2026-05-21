import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = [...getAllPosts("en"), ...getAllPosts("pt")];
  const pages = [
    {
      url: `${siteConfig.url}/en`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/pt`,
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `${siteConfig.url}/${post.locale}/${post.slug}`,
      lastModified: new Date(),
    })),
  ];

  return pages;
}
