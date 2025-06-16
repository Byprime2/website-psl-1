/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  basePath: "/website-psl-1",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
