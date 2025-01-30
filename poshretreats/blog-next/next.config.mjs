import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow images from Sanity's CDN
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve("./src"); // Set up '@' alias to point to 'src'
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/deals/:path*", // Route `/deals/*` correctly under Deals
        has: [{ type: "host", value: "deals.poshretreats.co.uk" }],
        destination: "/deals/:path*",
      },
      {
        source: "/:path*", // Ensure the blog subdomain works properly
        has: [{ type: "host", value: "blog.poshretreats.co.uk" }],
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
