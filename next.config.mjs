/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s2.coinmarketcap.com",
      },
      {
        protocol: "https",
        hostname: "6h9bk1szzl6gtr5x.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
