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
};

export default nextConfig;
