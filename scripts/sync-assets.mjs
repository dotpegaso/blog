import fs from "fs-extra";

import path from "path";

const POSTS_DIR = "content/posts";

const PUBLIC_DIR = "public/posts";

async function syncAssets() {
  const posts = await fs.readdir(POSTS_DIR);

  for (const slug of posts) {
    const postDir = path.join(POSTS_DIR, slug);

    const stat = await fs.stat(postDir);

    if (!stat.isDirectory()) {
      continue;
    }

    const files = await fs.readdir(postDir);

    const assetFiles = files.filter((file) => !file.endsWith(".mdx"));

    if (assetFiles.length === 0) {
      continue;
    }

    const publicPostDir = path.join(PUBLIC_DIR, slug);

    await fs.ensureDir(publicPostDir);

    for (const file of assetFiles) {
      await fs.copyFile(
        path.join(postDir, file),
        path.join(publicPostDir, file),
      );
    }
  }

  console.log("✅ Post assets synced");
}

syncAssets();
