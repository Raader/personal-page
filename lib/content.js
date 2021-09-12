import fs from "fs";
import path from "path";
import { parseMetadataFromMarkdown, processMarkdownToHTML } from "./md";

const contentRoot = path.join(process.cwd(), "/content");

export function readAllContentIds(relativePath) {
  const fileNames = fs.readdirSync(path.join(contentRoot, relativePath), {
    encoding: "utf-8",
  });
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(".md", ""));
}

export async function readContent(id, relativePath) {
  const contentFile = fs.readFileSync(
    path.join(contentRoot, relativePath, `/${id}.md`),
    {
      encoding: "utf-8",
    }
  );
  const metaData = await parseMetadataFromMarkdown(contentFile);
  const content = await processMarkdownToHTML(contentFile);
  return {
    id,
    content,
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
