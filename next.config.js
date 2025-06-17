/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/website-psl-1",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
