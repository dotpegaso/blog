import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import Preview from "@/components/Preview";
import { getAllPosts } from "@/lib/posts";

type Props = {
  params: Promise<{
    locale: "en" | "pt";
  }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "pt") {
    notFound();
  }

  const posts = getAllPosts(locale).sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });

  return (
    <Layout locale={locale}>
      <>
        {posts.map((post) => (
          <Preview
            key={post.slug}
            locale={locale}
            slug={post.slug}
            title={post.frontmatter.title}
            spoiler={post.frontmatter.spoiler}
          />
        ))}
      </>
    </Layout>
  );
}
