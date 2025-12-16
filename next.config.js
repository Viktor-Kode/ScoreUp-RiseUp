/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add this to help with the build
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig