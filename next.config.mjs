/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/token/:tokenID',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
