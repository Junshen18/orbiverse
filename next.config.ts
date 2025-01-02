import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['your-domains-here'],
  },
  webpack: (config) => {
    config.externals.push({
      '@splinetool/runtime': '@splinetool/runtime',
    });
    return config;
  },
};

export default nextConfig;
