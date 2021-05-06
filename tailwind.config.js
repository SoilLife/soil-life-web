module.exports = {
  mode: 'jit',
  purge: ['pages/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
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
