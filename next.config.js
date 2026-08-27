/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve modern formats first; Next falls back automatically for old browsers.
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Don't advertise the framework.
  poweredByHeader: false,
  compress: true,

  // Baseline security headers. Intentionally conservative — no strict CSP here,
  // because the app relies on a small inline theme script and Framer Motion's
  // inline styles; a CSP would need nonces/hashes wired in first.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
