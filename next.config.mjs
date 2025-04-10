/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // hostname: "down-vn.img.susercontent.com",
      },
    ],
  },
};

export default nextConfig;
