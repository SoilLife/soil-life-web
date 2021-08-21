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
};
