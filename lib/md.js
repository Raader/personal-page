import { remark } from "remark";
import remarkFrontmatter from "remark-frontmatter";
import remarkHtml from "remark-html";
import YAML from "yaml";

export async function parseMetadataFromMarkdown(file) {
  let meta = {};

  await remark()
    .use(remarkFrontmatter)
    .use(() => (tree) => {
      const yamlNode = tree.children[0];
      if (yamlNode.type === "yaml" && yamlNode.value) {
        meta = YAML.parse(yamlNode.value);
      }
    })
    .process(file);

  return meta;
}

export async function processMarkdownToHTML(file) {
  return remark()
    .use(remarkFrontmatter)
    .use(remarkHtml)
    .process(file)
    .then((file) => file.toString("utf-8"));
}
