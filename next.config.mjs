/** @type {import('next').NextConfig} */
const nextConfig = {
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
