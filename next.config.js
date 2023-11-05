/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        port: "",
        pathname: "/core-keeper/images/**",
      },
      {
        protocol: "https",
        hostname: "corekeeper.atma.gg",
        port: "",
        pathname: "/english/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
