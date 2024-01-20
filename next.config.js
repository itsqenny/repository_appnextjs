/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  generateEtags: false,
  images: {
    domains: ['cdn.poizon.com'],
  },
  experimental:{
    //Only For Next.js versions prior to 14.1.0 because it is enabled by default since version 14.1.0 
    windowHistorySupport:true 
},
}

module.exports = nextConfig
