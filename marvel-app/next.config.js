/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');
const envConfig = dotenv.config().parsed;

const nextConfig = {
  reactStrictMode: true,
  env: envConfig,
}

module.exports = nextConfig
