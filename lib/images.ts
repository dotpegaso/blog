export function getPostImagePath(slug: string, image: string) {
  return `/posts/${slug}/${image.replace("./", "")}`;
}
