/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site in out/. (cacheComponents / partialPrefetching are PPR features
  // and can't be used with a static export.)
  output: "export",
  // Static hosts serve /about-us/ as about-us/index.html (same URLs as the old WordPress site).
  trailingSlash: true,
  // The default image optimizer needs a server; serve the WebP files as-is.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
