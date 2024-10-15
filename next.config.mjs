/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all hostnames with https
      },
      {
        protocol: 'http',
        hostname: '**', // Allows all hostnames with http
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
