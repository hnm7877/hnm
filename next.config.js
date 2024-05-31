/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.generated.photos",
        port: "",
        pathname: "**",
      },
    ],
  },

  webpack: (config) => {
    config.module.generator.asset.publicPath = "/_next/"

    return config
  },
}

module.exports = nextConfig
