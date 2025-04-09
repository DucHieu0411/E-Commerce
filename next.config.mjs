/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "image.pexels.com",
        hostname: "down-vn.img.susercontent.com",
      },
    ],
  },
};

export default nextConfig;
