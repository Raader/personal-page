import { getAllPostIds } from "../lib/posts";

function generateSiteMap(posts) {
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
     ${posts
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

export default function SiteMap() {}

export async function getServerSideProps({ res }) {
  const posts = await getAllPostIds();
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
