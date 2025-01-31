import path from "path";
import TerserPlugin from "terser-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Images config (same as before)
  images: {
    domains: ["cdn.sanity.io"],
  },

  // 2. Hide source maps in production for security
  productionBrowserSourceMaps: false,

  // 3. Extend webpack to add Terser in client builds
  webpack: (config, { isServer }) => {
    // Keep your existing alias
    config.resolve.alias["@"] = path.resolve("./src");

    // Only add Terser for the browser build
    if (!isServer) {
      // Push a new TerserPlugin for extra minification & obfuscation
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Removes console.log, etc.
              drop_debugger: true, // Removes 'debugger' statements
              pure_funcs: ["console.log", "console.warn"], // Completely strips logs
            },
            format: {
              comments: false, // Removes all comments
            },
            mangle: true, // Obfuscates variable & function names
          },
        })
      );
    }

    return config;
  },
};

export default nextConfig;
