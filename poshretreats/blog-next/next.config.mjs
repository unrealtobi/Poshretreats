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
        source: "/:path*",
        has: [{ type: "host", value: "blog.poshretreats.co.uk" }],
        destination: "/:path*", // Blog stays at "/"
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "deals.poshretreats.co.uk" }],
        destination: "/deals/:path*", // Deals at "/deals"
      },
    ];
  },
};

export default nextConfig;
