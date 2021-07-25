import { TextProps } from './text.interfaces';

export const textTypeMap: { [Type in TextProps['type']]: string } = {
  h1: 'leading-none',
  h2: 'leading-none',
  h3: 'leading-none',
  p: 'leading-none',
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
  xs: 'text-xs lg:text-sm xl:text-base 2xl:text-xl',
  sm: 'lg:text-lg xl:text-xl 2xl:text-3xl',
  md: 'text-lg lg:text-[28px] xl:text-4xl 2xl:text-5xl',
  lg: 'text-2xl lg:text-[40px] xl:text-5xl 2xl:text-6xl',
  xl: 'text-[32px] lg:text-[52px] xl:text-6xl 2xl:text-7xl',
  '2xl': 'text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl',
};
