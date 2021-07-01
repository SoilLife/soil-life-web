import { CardSixFProps } from './card-six-f.interfaces';

export const cardSixFTypeMap: { [K in CardSixFProps['type']]: string } = {
  primary: 'bg-blue-500',
  danger: 'bg-pink-500',
  success: 'bg-teal-500',
  warning: 'bg-yellow-500',
  neutral: 'bg-gray-500',
  alert: 'bg-orange-500',
};
