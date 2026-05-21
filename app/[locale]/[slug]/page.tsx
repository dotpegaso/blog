import { notFound } from "next/navigation";

import Layout from "@/components/Layout";
import PostContent from "@/components/PostContent";
import { PostProvider } from "@/components/providers/PostContext";

import { getPostBySlug } from "@/lib/posts";
import { parseMDX } from "@/lib/mdx";
import { getAllPosts } from "@/lib/posts";
import { generatePostMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";

import type { Metadata } from "next";

type Props = {
  params: Promise<{
    locale: "en" | "pt";
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale, slug } = await params;

  const dictionary = getDictionary(locale);
  const post = getPostBySlug(slug, locale);

  return generatePostMetadata(post);
}

export function generateStaticParams() {
  const locales = ["en", "pt"] as const;

  return locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params;
  const dictionary = getDictionary(locale);

  if (locale !== "en" && locale !== "pt") {
    notFound();
  }

  try {
    const post = getPostBySlug(slug, locale);

    const { content } = await parseMDX(post.content);

    return (
      <Layout locale={locale}>
        <PostProvider slug={slug}>
          <PostContent
            title={post.frontmatter.title}
            author={post.frontmatter.author}
            writtenBy={dictionary.writtenBy}
            readingTime={`${post.readingTime} ${dictionary.minutesRead}`}
          >
            {content}
          </PostContent>
        </PostProvider>
      </Layout>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
