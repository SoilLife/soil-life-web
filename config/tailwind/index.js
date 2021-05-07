const pink = {
  100: 'var(--pink-100-rgb)',
  200: 'var(--pink-200-rgb)',
  300: 'var(--pink-300-rgb)',
  400: 'var(--pink-400-rgb)',
  500: 'var(--pink-500-rgb)',
  600: 'var(--pink-600-rgb)',
  700: 'var(--pink-700-rgb)',
  800: 'var(--pink-800-rgb)',
  900: 'var(--pink-900-rgb)',
};

const orange = {
  100: 'var(--orange-100-rgb)',
  200: 'var(--orange-200-rgb)',
  300: 'var(--orange-300-rgb)',
  400: 'var(--orange-400-rgb)',
  500: 'var(--orange-500-rgb)',
  600: 'var(--orange-600-rgb)',
  700: 'var(--orange-700-rgb)',
  800: 'var(--orange-800-rgb)',
  900: 'var(--orange-900-rgb)',
};

const yellow = {
  100: 'var(--yellow-100-rgb)',
  200: 'var(--yellow-200-rgb)',
  300: 'var(--yellow-300-rgb)',
  400: 'var(--yellow-400-rgb)',
  500: 'var(--yellow-500-rgb)',
  600: 'var(--yellow-600-rgb)',
  700: 'var(--yellow-700-rgb)',
  800: 'var(--yellow-800-rgb)',
  900: 'var(--yellow-900-rgb)',
};

const teal = {
  100: 'var(--teal-100-rgb)',
  200: 'var(--teal-200-rgb)',
  300: 'var(--teal-300-rgb)',
  400: 'var(--teal-400-rgb)',
  500: 'var(--teal-500-rgb)',
  600: 'var(--teal-600-rgb)',
  700: 'var(--teal-700-rgb)',
  800: 'var(--teal-800-rgb)',
  900: 'var(--teal-900-rgb)',
};

const blue = {
  100: 'var(--blue-100-rgb)',
  200: 'var(--blue-200-rgb)',
  300: 'var(--blue-300-rgb)',
  400: 'var(--blue-400-rgb)',
  500: 'var(--blue-500-rgb)',
  600: 'var(--blue-600-rgb)',
  700: 'var(--blue-700-rgb)',
  800: 'var(--blue-800-rgb)',
  900: 'var(--blue-900-rgb)',
};

const brown = {
  100: 'var(--brown-100-rgb)',
  200: 'var(--brown-200-rgb)',
  300: 'var(--brown-300-rgb)',
  400: 'var(--brown-400-rgb)',
  500: 'var(--brown-500-rgb)',
  600: 'var(--brown-600-rgb)',
  700: 'var(--brown-700-rgb)',
  800: 'var(--brown-800-rgb)',
  900: 'var(--brown-900-rgb)',
};

const colors = {
  pink,
  orange,
  yellow,
  teal,
  blue,
  brown,
};

Object.keys(colors).forEach((colorKey) => {
  Object.keys(colors[colorKey]).forEach((colorStep) => {
    function configTailwindColor(cssVar) {
      return ({ opacityVariable }) => {
        if (opacityVariable) {
          return `rgba(${cssVar}, var(${opacityVariable}))`;
        }
        return `rgb(${cssVar})`;
      };
    }

    colors[colorKey][colorStep] = configTailwindColor(colors[colorKey][colorStep]);
  });
});

colors['transparent'] = 'transparent';
colors['currentColor'] = 'currentColor';

module.exports = colors;
