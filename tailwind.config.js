const { colors, fontFamily, height, width } = require('./config/tailwind');

module.exports = {
  content: ['**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    colors,
    fontFamily,
    extend: {
      maxWidth: {
        'app-full': '1920px',
      },
      width: {
        fit: 'fit-content',
      },
      height: {
        fit: 'fit-content',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    container: false,
  },
};
