import { getAllPosts } from "@/lib/posts";

import { siteConfig } from "@/lib/site";

export async function GET() {
  const posts = [...getAllPosts("en"), ...getAllPosts("pt")];

  const items = posts
    .map(
      (post) => `
        <item>
          <title>${post.frontmatter.title}</title>

          <description>
            ${post.frontmatter.spoiler}
          </description>

          <link>
            ${siteConfig.url}/${post.locale}/${post.slug}
          </link>

          <guid>
            ${siteConfig.url}/${post.locale}/${post.slug}
          </guid>
        </item>
      `,
    )
    .join("");

  const rss = `
    <rss version="2.0">
      <channel>
        <title>
          ${siteConfig.name}
        </title>

        <description>
          ${siteConfig.description}
        </description>

        <link>
          ${siteConfig.url}
        </link>

        ${items}
      </channel>
    </rss>
  `;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
