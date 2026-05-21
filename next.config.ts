import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
