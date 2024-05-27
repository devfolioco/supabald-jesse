/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/token/:tokenID',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
