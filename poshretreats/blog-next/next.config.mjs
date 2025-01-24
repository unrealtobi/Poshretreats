/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // Set up '@' alias to point to 'src'
    return config;
  },
};

module.exports = nextConfig;
