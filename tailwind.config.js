const { colors, fontFamily } = require('./config/tailwind');

module.exports = {
  mode: 'jit',
  purge: ['pages/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'layouts/**/*.{ts,tsx}', 'data/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    colors,
    fontFamily,
    extend: {
      maxWidth: {
        'app-full': '1920px',
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
