import { TextProps } from './text.interfaces';

export const textTypeMap: { [Type in TextProps['type']]: string } = {
  h1: 'leading-tight',
  h2: 'leading-tight',
  h3: 'leading-tight',
  p: 'leading-tight',
  span: 'leading-tight',
};

export const textFontWeightMap: { [Weight in TextProps['weight']]: string } = {
  thin: 'font-acre-thin',
  light: 'font-acre-light',
  regular: 'font-acre-regular',
  medium: 'font-acre-medium',
  semibold: 'font-acre-semibold',
  bold: 'font-acre-bold',
};

export const textSizeMap: { [Size in TextProps['size']]: string } = {
  '2xs': 'text-xs md:text-sm 2xl:text-[18px]',
  xs: 'md:text-[18px] lg:text-xl 2xl:text-[30px]',
  sm: 'md:text-[18px] lg:text-xl xl:text-[24px] 2xl:text-[30px]',
  md: 'text-[18px] sm:text-[24px] xl:text-[28px] 2xl:text-[36px]',
  lg: 'text-[24px] sm:text-[32px] xl:text-[36px] 2xl:text-[40px]',
  xl: 'text-[36px] lg:text-[40px] 2xl:text-[50px]',
  '2xl': 'text-[40px] lg:text-[48px] xl:text-[50px] 2xl:text-[60px]',
  '3xl': 'text-[48px] lg:text-[54px] xl:text-[60px] 2xl:text-[70px]',
  '4xl': 'text-[54px] lg:text-[60px] xl:-text-[70px] 2xl:text-[80px]',
  '5xl': 'text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px]',
};

export const textColorMap: { [Color in Required<TextProps>['color']]: string } = {
  blue: 'text-blue-500',
  gray: 'text-gray-500',
  orange: 'text-orange-500',
  pink: 'text-pink-500',
  teal: 'text-teal-500',
  yellow: 'text-yellow-500',
  white: 'text-white',
  current: 'text-currentColor',
};
