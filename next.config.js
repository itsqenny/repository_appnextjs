/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  generateEtags: false,
  images: {
    domains: ['cdn.poizon.com'],
  },
  experimental: {
    scrollRestoration: true
  }
}

module.exports = nextConfig
