/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['photo-resize-zmp3.zmdcdn.me'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
