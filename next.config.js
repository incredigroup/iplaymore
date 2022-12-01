/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost:3000',
      'localhost:3001',
      'localhost:3002',
      'i.ytimg.com'
    ],
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    }
    return config
  },
  // eslint: {
  //   dirs: ['pages', 'utils'],
  // },
}

module.exports = nextConfig
