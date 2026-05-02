import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [{ source: "/sdk", destination: "/sdks", permanent: true }];
  },
};

export default nextConfig;
