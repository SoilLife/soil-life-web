import { ButtonProps } from './button.interfaces';

export const buttonTypeMap: { [K in ButtonProps['type']]: string } = {
  default: 'text-black ring-2 ring-black',
  secondary: 'text-white ring-2 ring-white',
  primary: 'text-blue-500 ring-2 ring-blue-500',
  success: 'text-teal-500 ring-2 ring-teal-500',
  warning: 'text-yellow-500 ring-2 ring-yellow-500',
  danger: 'text-pink-500 ring-2 ring-pink-500',
  neutral: 'text-brown-500 ring-2 ring-brown-500',
};
