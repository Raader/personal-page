import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDir = path.join(process.cwd(), "/content/posts");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir, { encoding: "utf-8" });
  return fileNames.map((name) => name.replace(".md", ""));
}

export async function getPostData(id) {
  const postFile = fs.readFileSync(path.join(postsDir, `/${id}.md`), {
    encoding: "utf-8",
  });

  const content = await remark()
    .use(remarkHtml)
    .process(postFile)
    .then((file) => file.toString("utf-8"));

  return {
    title: id,
    content,
  };
}
