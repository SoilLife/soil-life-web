const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  images: {
    domains: ['img.youtube.com', 'www.youtube.com', 'vimeo.com', 'www.facebook.com', 'www.soils4teachers.org', 'soils.org', 'www.soils4kids.org',...(process.env.NODE_ENV === 'production' ? ['thesoillife.org', 'netlify.com', ] : ['localhost'])],
    unoptimized: true
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
      {
        source: '/web-of-soil',
        destination: '/web-of-soil/food',
        permanent: true,
      }
    ];
  },
  trailingSlash: false,
  
};
