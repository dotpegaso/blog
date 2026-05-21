import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { useMDXComponents } from "@/components/mdx";

const options = {
  theme: "dracula",
};

export async function parseMDX(content: string) {
  const result = await compileMDX({
    source: content,
    components: useMDXComponents({}),
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, options]],
      },
    },
  });

  return result;
}
