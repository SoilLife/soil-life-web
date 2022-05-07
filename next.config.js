const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  images: {
    domains: process.env.NODE_ENV === 'production' ? ['thesoillife.org', 'netlify.com'] : ['localhost'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(new FaviconsWebpackPlugin({logo: './public/images/logo.png', cache: true, publicPath: '/images', prefix: 'images/'}))

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
  trailingSlash: true,
};
