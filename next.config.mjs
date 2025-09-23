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
  // modern JavaScript optimization
  experimental: {
    // modern browsers only - no legacy polyfills
    browsersListForSwc: true,
    // optimize for modern browsers
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // webpack optimization for modern browsers
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // modern browsers only - no legacy transforms
      config.target = ['web', 'es2020']
    }
    return config
  },
  // transpile only for legacy browsers if needed
  transpilePackages: [],
}

export default nextConfig
