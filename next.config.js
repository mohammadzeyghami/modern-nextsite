/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
};

module.exports = {
  images: {
    unoptimized: true,
  },
};
