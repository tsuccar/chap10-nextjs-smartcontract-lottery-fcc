/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "./"  
}

// swcMinify: true,
// images: { unoptimized: true },

module.exports = {nextConfig,images: {loader: "custom"}}
