/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // trailingSlash makes each route an index.html folder, so clean URLs work
  // on any static file host, not only hosts that rewrite .html URLs.
  trailingSlash: true
};
module.exports = nextConfig;
