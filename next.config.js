module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: process.env.NODE_ENV === 'production' ? ['thesoillife.org'] : ['localhost'],
  },
};
