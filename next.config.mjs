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
      
      // Disable polyfills for modern browsers
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // Disable Node.js polyfills
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
      }
    }
    return config
  },
  // transpile only for legacy browsers if needed
  transpilePackages: [],
  // SWC compiler options for modern browsers
  swcMinify: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
