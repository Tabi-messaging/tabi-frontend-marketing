import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['swagger-ui-react'],
  async redirects() {
    return [{ source: '/sdk', destination: '/sdks', permanent: true }];
  },
};

export default nextConfig;
