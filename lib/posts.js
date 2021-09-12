import { readAllContentIds, readAllContents, readContent } from "./content";

export function getAllPostIds() {
  return readAllContentIds("/articles");
}

export async function getPostData(id) {
  return readContent(id, "/articles");
}

export async function getAllPosts() {
  const posts = (await readAllContents("/articles")).map((post) => ({
    ...post,
    content: post.content.split("\n")[0],
  }));
  return posts;
}
