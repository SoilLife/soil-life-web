const { colors, fontFamily, height, width } = require('./config/tailwind');

module.exports = {
  mode: 'jit',
  purge: ['**/*.{ts,tsx}'],
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
  variants: {
    extend: {},
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
