/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-cruz/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-cruz" : "",
  output: "export",
  experimental: {},
};

module.exports = nextConfig;
