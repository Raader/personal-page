const fs = require("fs");
const path = require("path");

const directoryPath = path.join(process.cwd(), "/content/articles");
const articleNames = fs
  .readdirSync(directoryPath, {
    encoding: "utf-8",
  })
  .filter((name) => name.endsWith(".md"))
  .map((name) => name.replace(".md", ""));

const file = JSON.stringify(articleNames);

try {
  fs.readdirSync("public/cache");
} catch (e) {
  fs.mkdirSync("public/cache");
}

fs.writeFile("public/cache/articles.json", file, (err) => {
  if (err) return console.log(err);
  console.log("Articles saved");
});
