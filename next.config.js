/** @type {import('next').NextConfig} */
// Pages build reproducibility (critique Issue 1): basePath is driven by the
// SAME env var that SiteImage uses to prefix raw <img> URLs
// (NEXT_PUBLIC_BASE_PATH). One command — `npm run build:pages` — sets it, so
// nav links and images cannot drift apart (one forgotten step used to 404
// either all images or all links). Main build: env unset => no basePath.
const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(pagesBasePath ? { basePath: pagesBasePath } : {}),
  // trailingSlash makes each route an index.html folder, so clean URLs work
  // on any static file host, not only hosts that rewrite .html URLs.
  trailingSlash: true
};
module.exports = nextConfig;
