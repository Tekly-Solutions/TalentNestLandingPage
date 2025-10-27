import type { NextConfig } from "next";

const nextConfig: NextConfig = {

   // Enable static export output
  output: 'export',
  
  // Enable compression
  compress: true,

  // Image optimization settings
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Bundle analyzer (conditionally enabled)
  ...(process.env.ANALYZE === "true" && {
    webpack: (config: any) => {
      if (process.env.NODE_ENV === "production") {
        // Add bundle analyzer
        const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
          })
        );
      }
      return config;
    },
  }),
};

export default nextConfig;
