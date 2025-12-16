/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // This option is valid for Next.js 13/14, but may need adjustment for 15+
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig