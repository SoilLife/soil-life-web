import { ButtonProps } from './button.interfaces';
import { textSizeMap } from 'design-system/atoms/text/text.utils';

export const buttonTypeMap: { [K in ButtonProps['type']]: string } = {
  secondary: 'text-white ring-1 ring-white',
  primary: 'text-blue-500 ring-2 ring-blue-500',
  success: 'text-teal-500 ring-2 ring-teal-500',
  warning: 'text-yellow-500 ring-2 ring-yellow-500',
  danger: 'text-pink-500 ring-2 ring-pink-500',
  neutral: 'text-gray-500 ring-2 ring-gray-500',
  alert: 'text-orange-500 ring-2 ring-orange-500',
};

export const buttonSizeMap: { [K in ButtonProps['size']]: string } = {
  sm: `${textSizeMap['xs']} px-4 py-2 xl:px-[14px] xl:py-2.5`,
  md: `${textSizeMap['sm']} px-4 py-2 xl:px-[22px] xl:py-2.5`,
  lg: `${textSizeMap['md']} px-2.5 py-2 xl:px-[25px] xl:py-[15px]`,
  xl: `${textSizeMap['lg']} px-5 py-[5px]`,
};
