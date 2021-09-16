const { writeFileSync, readdirSync } = require("fs");
const path = require("path");

function generateSiteMap() {
  const postIds = readdirSync(path.join(process.cwd(), "content", "articles"), {
    encoding: "utf-8",
  })
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(".md", ""));

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.raader.me</loc>
     </url>
     <url>
      <loc>https://www.raader.me/projects</loc>
     </url>
     <url>
      <loc>https://www.raader.me/articles</loc>
     </url>
     <url>
      <loc>https://www.raader.me/about</loc>
     </url>
     <url>
      <loc>https://www.raader.me/contact</loc>
     </url>
     ${postIds
       .map((id) => {
         return `
          <url>
            <loc>${`https://www.raader.me/articles/${id}`}</loc>
          </url>
        `;
       })
       .join("")}
   </urlset>
 `;
}

function buildSiteMap() {
  const sitemap = generateSiteMap();

  writeFileSync("public/sitemap.xml", sitemap);
}

buildSiteMap();
