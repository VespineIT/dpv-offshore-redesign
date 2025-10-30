// This is a placeholder script for generating a sitemap.
// You would typically run this as a post-build step.
// For a simple static site, this can be basic, but for a dynamic
// site (e.g., with a blog), you'd fetch all post slugs.

const fs = require("fs");
const path = require("path");

const pages = [
  "", // Home
  "/about",
  "/services",
  "/blog",
  "/contact",
  // Add blog post slugs here dynamically if needed
  // e.g., ...getBlogSlugs().map(slug => `/blog/${slug}`)
];

const baseUrl = "https://www.dpvoffshore.com"; // Your production URL

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>
  `;
    })
    .join("")}
</urlset>
`;

const publicPath = path.resolve(__dirname, "..", "public");

try {
  fs.writeFileSync(path.join(publicPath, "sitemap.xml"), sitemap);
  console.log("sitemap.xml generated successfully!");
} catch (err) {
  console.error("Error generating sitemap:", err);
}