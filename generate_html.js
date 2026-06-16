import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import server from "./dist/server/server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.join(__dirname, "local_html");

// Create directory recursively
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Copy directory recursively
function copyDir(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function run() {
  console.log("Generating local HTML files from production build...");
  ensureDir(OUT_DIR);

  const routes = [
    { path: "/", file: "index.html" },
    { path: "/clientes", file: "clientes.html", dirFile: "clientes/index.html" },
    { path: "/faq", file: "faq.html", dirFile: "faq/index.html" },
    { path: "/gestores", file: "gestores.html", dirFile: "gestores/index.html" },
    { path: "/parceiros", file: "parceiros.html", dirFile: "parceiros/index.html" },
    { path: "/sobre", file: "sobre.html", dirFile: "sobre/index.html" },
  ];

  for (const r of routes) {
    console.log(`Fetching page: ${r.path}...`);
    // Create a mock request object. Cloudflare Worker expects standard Request object.
    const request = new Request(`http://localhost/website2${r.path === "/" ? "/" : r.path}`);

    try {
      const response = await server.fetch(request);
      if (response.status !== 200) {
        console.error(`Error fetching ${r.path}: Status ${response.status}`);
        continue;
      }

      let html = await response.text();
      
      // Fix paths for GitHub Pages sub-directory
      html = html.replace(/"\/assets\//g, '"/website2/assets/');
      html = html.replace(/"\/img\//g, '"/website2/img/');

      // Save as filename.html
      const mainPath = path.join(OUT_DIR, r.file);
      fs.writeFileSync(mainPath, html, "utf8");
      console.log(`Saved: ${mainPath}`);

      // Save as path/index.html for static routing server
      if (r.dirFile) {
        const dirPath = path.join(OUT_DIR, path.dirname(r.dirFile));
        ensureDir(dirPath);
        const indexPath = path.join(OUT_DIR, r.dirFile);
        fs.writeFileSync(indexPath, html, "utf8");
        console.log(`Saved: ${indexPath}`);
      }
    } catch (e) {
      console.error(`Failed to generate page ${r.path}:`, e);
    }
  }

  // Copy assets and public/img contents
  console.log("Copying static assets...");

  const clientAssetsDir = path.join(__dirname, "dist", "client", "assets");
  if (fs.existsSync(clientAssetsDir)) {
    copyDir(clientAssetsDir, path.join(OUT_DIR, "assets"));
    console.log("Copied dist/client/assets -> local_html/assets");
  }

  const clientImgDir = path.join(__dirname, "dist", "client", "img");
  if (fs.existsSync(clientImgDir)) {
    copyDir(clientImgDir, path.join(OUT_DIR, "img"));
    console.log("Copied dist/client/img -> local_html/img");
  }

  const publicImgDir = path.join(__dirname, "public", "img");
  if (fs.existsSync(publicImgDir)) {
    copyDir(publicImgDir, path.join(OUT_DIR, "img"));
    console.log("Copied public/img -> local_html/img");
  }

  console.log(
    '\nGeneration complete! All static HTML and assets are in the "local_html" directory.',
  );
  console.log("You can test it by running:");
  console.log("  npx serve local_html");
}

run().catch(console.error);
