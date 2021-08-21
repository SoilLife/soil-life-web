module.exports = {
  images: {
    domains: process.env.NODE_ENV === 'production' ? ['thesoillife.org', 'netlify.com'] : ['localhost'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/soil-101',
        destination: '/soil-101/soil-nexus',
        permanent: true,
      },
    ];
  },
};
