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

const gray = {
  100: 'var(--gray-100-rgb)',
  200: 'var(--gray-200-rgb)',
  300: 'var(--gray-300-rgb)',
  400: 'var(--gray-400-rgb)',
  500: 'var(--gray-500-rgb)',
  600: 'var(--gray-600-rgb)',
  700: 'var(--gray-700-rgb)',
  800: 'var(--gray-800-rgb)',
  900: 'var(--gray-900-rgb)',
};

const colors = {
  pink,
  orange,
  yellow,
  teal,
  blue,
  gray,
};

function configTailwindColor(cssVar) {
  return ({ opacityVariable }) => {
    if (opacityVariable) {
      return `rgba(${cssVar}, var(${opacityVariable}))`;
    }
    return `rgb(${cssVar})`;
  };
}
Object.keys(colors).forEach((colorKey) => {
  Object.keys(colors[colorKey]).forEach((colorStep) => {
    colors[colorKey][colorStep] = configTailwindColor(colors[colorKey][colorStep]);
  });
});

colors['transparent'] = 'transparent';
colors['currentColor'] = 'currentColor';
colors['white'] = configTailwindColor('var(--white-rgb)');
colors['black'] = configTailwindColor('var(--black-rgb)');

module.exports = colors;
