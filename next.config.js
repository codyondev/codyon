/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: 'https://www.codyon.site/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
