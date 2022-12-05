/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: process.env.MONGO_URI,
    TWELVEDATA_API_KEY: process.env.TD_API_KEY,
  }
}

module.exports = nextConfig