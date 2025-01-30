import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('./src'); // Set up '@' alias to point to 'src'
    return config;
  },
};

export default nextConfig;
