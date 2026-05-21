import { z } from "zod";

export const postFrontmatterSchema = z.object({
  title: z.string(),
  spoiler: z.string(),
  author: z.string(),
  featuredImage: z.string().optional(),
});

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;
