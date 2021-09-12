import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkFrontmatter from "remark-frontmatter";
import remarkHtml from "remark-html";
import YAML from "yaml";

const postsDir = path.join(process.cwd(), "/content/posts");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir, { encoding: "utf-8" });
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(".md", ""));
}

export async function getPostData(id) {
  const postFile = fs.readFileSync(path.join(postsDir, `/${id}.md`), {
    encoding: "utf-8",
  });

  let meta = {};

  const content = await remark()
    .use(remarkFrontmatter)
    .use(() => (tree) => {
      const yamlNode = tree.children[0];
      if (yamlNode.type === "yaml" && yamlNode.value) {
        meta = YAML.parse(yamlNode.value);
      }
    })
    .use(remarkHtml)
    .process(postFile)
    .then((file) => file.toString("utf-8"));

  return {
    ...meta,
    content,
  };
}

export async function getAllPosts() {
  const postIds = getAllPostIds();
  const posts = [];
  for (let id of postIds) {
    const postData = await getPostData(id);
    const post = {
      id,
      title: postData.title || "",
      date: postData.date || "",
      content: postData.content ? postData.content.split("\n")[0] : "",
    };
    posts.push(post);
  }
  return posts;
}
