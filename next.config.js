/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: process.env.MONGO_URI,
    MONGO_TICKER_PURCHASES_URI: process.env.MONGO_TICKER_PURCHASES_URI,

    TD_API_KEY: process.env.TD_API_KEY,
  }
}

module.exports = nextConfig