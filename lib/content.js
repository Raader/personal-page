import fs from "fs";
import path from "path";
import { parseMetadataFromMarkdown, processMarkdownToHTML } from "./md";

const contentRoot = path.join(process.cwd(), "/content");

export function readAllContentIds(relativePath) {
  const directoryPath = path.join(contentRoot, relativePath);
  const fileNames = fs.readdirSync(directoryPath, {
    encoding: "utf-8",
  });
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(".md", ""));
}

export async function readContent(id, relativePath) {
  const filePath = path.join(contentRoot, relativePath, `/${id}.md`);
  const contentFile = fs.readFileSync(filePath, {
    encoding: "utf-8",
  });
  const metaData = await parseMetadataFromMarkdown(contentFile);
  const content = await processMarkdownToHTML(contentFile);
  return {
    id,
    content,
    preview: content.split("\n")[0],
    ...metaData,
  };
}

export async function readAllContents(relativePath) {
  const contentIds = readAllContentIds(relativePath);

  const contents = [];
  for (let id of contentIds) {
    contents.push(await readContent(id, relativePath));
  }

  return contents;
}
