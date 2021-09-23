import { readAllContentIds, readAllContents, readContent } from "./content";

export function getAllPostIds() {
  return readAllContentIds("/articles");
}

export async function getPostData(id) {
  return readContent(id, "/articles");
}

function postDateSorter(post1, post2) {
  const post1Date = new Date(post1.date).getTime();
  const post2Date = new Date(post2.date).getTime();

  if (post1Date < post2Date) return 1;
  else if (post2Date < post1Date) return -1;
  else return 0;
}

export async function getAllPostData() {
  const posts = (await readAllContents("/articles")).map((post) => ({
    ...post,
  }));
  posts.sort(postDateSorter);
  return posts;
}

export async function getAllPostPreviews() {
  const posts = (await readAllContents("/articles")).map((post) => ({
    ...post,
    content: post.content.split("\n")[0],
  }));
  posts.sort(postDateSorter);
  return posts;
}
