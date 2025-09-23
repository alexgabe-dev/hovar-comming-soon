/** @type {import('next').NextConfig} */
const nextConfig = {
  // dev config - ignore errors during build
  eslint: {
    ignoreDuringBuilds: true, // fixme: remove in production
  },
  typescript: {
    ignoreBuildErrors: true, // fixme: remove in production
  },
  // image optimization - disabled for static export
  images: {
    unoptimized: true,
  },
  // enable compression
  compress: true,
}

export default nextConfig
