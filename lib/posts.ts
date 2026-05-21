import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFrontmatterSchema, PostFrontmatter } from "@/lib/schema";
import { getReadingTime } from "./reading-time";
import { Locale } from "./i18n";

const POSTS_PATH = path.join(process.cwd(), "content/posts");
const defaultLocale: Locale = "en";

export type Post = {
  slug: string;
  locale: Locale;
  content: string;
  frontmatter: PostFrontmatter;
  readingTime: number;
};

export function getPostSlugs() {
  return fs.readdirSync(POSTS_PATH).filter((file) => {
    const fullPath = path.join(POSTS_PATH, file);

    return fs.statSync(fullPath).isDirectory();
  });
}

export function getPostBySlug(slug: string, locale: Locale = defaultLocale) {
  const postPath = path.join(POSTS_PATH, slug);
  const filePath = path.join(postPath, `${locale}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    locale,
    content,
    readingTime: getReadingTime(content),
    frontmatter: postFrontmatterSchema.parse(data),
  };
}

export function getAllPosts(locale: Locale = defaultLocale) {
  const slugs = getPostSlugs();

  return slugs.map((slug) => getPostBySlug(slug, locale));
}
