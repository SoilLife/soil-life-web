import { ButtonProps } from 'components/atoms/button/button.interfaces';

const colorMap = {
  blue: {
    text: {
      idle: 'text-blue-500',
      hover: 'hover:text-blue-400',
      active: 'active:text-blue-700',
    },
    bg: {
      idle: 'bg-blue-500',
      hover: 'hover:bg-blue-400',
      active: 'active:bg-blue-700',
    },
    gradient: {
      idle: 'from-blue-500',
      hover: '',
      active: '',
    },
  },
  brown: {
    text: {
      idle: 'text-brown-500',
      hover: 'hover:text-brown-400',
      active: 'active:text-brown-700',
    },
    bg: {
      idle: 'bg-brown-500',
      hover: 'hover:bg-brown-400',
      active: 'active:bg-brown-700',
    },
    gradient: {
      idle: 'from-brown-500',
      hover: '',
      active: '',
    },
  },
  orange: {
    text: {
      idle: 'text-orange-500',
      hover: 'hover:text-orange-400',
      active: 'active:text-orange-700',
    },
    bg: {
      idle: 'bg-orange-500',
      hover: 'hover:bg-orange-400',
      active: 'active:bg-orange-700',
    },
    gradient: {
      idle: 'from-orange-500',
      hover: '',
      active: '',
    },
  },
  pink: {
    text: {
      idle: 'text-pink-500',
      hover: 'hover:text-pink-400',
      active: 'active:text-pink-700',
    },
    bg: {
      idle: 'bg-pink-500',
      hover: 'hover:bg-pink-400',
      active: 'active:bg-pink-700',
    },
    gradient: {
      idle: 'from-pink-500',
      hover: '',
      active: '',
    },
  },
  teal: {
    text: {
      idle: 'text-teal-500',
      hover: 'hover:text-teal-400',
      active: 'active:text-teal-700',
    },
    bg: {
      idle: 'bg-teal-500',
      hover: 'hover:bg-teal-400',
      active: 'active:bg-teal-700',
    },
    gradient: {
      idle: 'from-teal-500',
      hover: '',
      active: '',
    },
  },
  yellow: {
    text: {
      idle: 'text-yellow-500',
      hover: 'hover:text-yellow-400',
      active: 'active:text-yellow-700',
    },
    bg: {
      idle: 'bg-yellow-500',
      hover: 'hover:bg-yellow-400',
      active: 'active:bg-yellow-700',
    },
    gradient: {
      idle: 'from-yellow-500',
      hover: '',
      active: '',
    },
  },
};

export function getColor({
  color,
  type,
  state,
}: {
  color: 'blue' | 'brown' | 'orange' | 'pink' | 'teal' | 'yellow';
  type: 'text' | 'bg' | 'gradient';
  state: 'idle' | 'hover' | 'active';
}): string {
  return colorMap[color][type][state];
}

export function getButtonType(color: 'blue' | 'brown' | 'orange' | 'pink' | 'teal' | 'yellow'): ButtonProps['type'] {
  switch (color) {
    case 'blue':
      return 'primary';
    case 'brown':
      return 'neutral';
    case 'orange':
      return 'alert';
    case 'pink':
      return 'danger';
    case 'teal':
      return 'success';
    case 'yellow':
      return 'warning';
  }
}
