/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  transpilePackages: ['three'],
};

module.exports = nextConfig;
