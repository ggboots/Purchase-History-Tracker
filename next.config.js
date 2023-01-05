/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: process.env.MONGO_URI,
    MONGO_TICKER_PURCHASES_URI: process.env.MONGO_TICKER_PURCHASES_URI,

    TD_API_KEY: process.env.TD_API_KEY,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false , path: false};
    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// module.exports = withBundleAnalyzer(nextConfig)
module.exports = nextConfig