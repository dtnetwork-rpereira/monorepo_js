/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/be/:path*',
        destination: 'http://localhost:3001/:path*'
      }
    ]
  }
}

module.exports = nextConfig
