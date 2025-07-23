/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/portfolio-cruz/" : "",
  basePath: isProd ? "/portfolio-cruz" : "",
  output: "export",
  trailingSlash: true, // required for static export on GitHub Pages
  experimental: {},
};

module.exports = nextConfig;
