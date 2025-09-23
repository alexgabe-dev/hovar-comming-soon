/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: !isProd, // csak devben engedjük
  },
  typescript: {
    ignoreBuildErrors: !isProd,  // csak devben engedjük
  },
  images: { 
    unoptimized: true // static export miatt
  },
  compress: true,
  experimental: {
    browsersListForSwc: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.target = ['web', 'es2020'] // modern böngészők
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, net: false, tls: false, crypto: false, stream: false,
        url: false, zlib: false, http: false, https: false, assert: false,
        os: false, path: false,
      }
    }
    return config
  },
  swcMinify: true,
  compiler: {
    removeConsole: isProd ? {
      exclude: ['console.log'] // console.log-okat megtartjuk a reklám miatt
    } : false,
  },

  // Security headerek
  async headers() {
    const cspBase = [
      "default-src 'self'",
      // DEV: engedjük az inline scripteket és eval-t (webpack hot reload) PROD: engedjük az inline scripteket a console banner miatt
      isProd ? "script-src 'self' 'unsafe-inline'" : "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'", // Tailwind miatt
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self' https://ipinfo.io", // a ips api használja
      "frame-ancestors 'none'",
    ].filter(Boolean).join('; ')

    const common = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'DENY' }, // kiegészítésnek maradhat
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()' },
      { key: 'Content-Security-Policy', value: cspBase },
    ]

    const prodOnly = isProd
      ? [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }]
      : []

    return [{ source: '/:path*', headers: [...common, ...prodOnly] }]
  },
}

export default nextConfig
