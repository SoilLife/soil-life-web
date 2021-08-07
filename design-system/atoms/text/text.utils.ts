import { TextProps } from './text.interfaces';

export const textTypeMap: { [Type in TextProps['type']]: string } = {
  h1: 'leading-tight sm:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight',
  h2: 'leading-tight sm:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight',
  h3: 'leading-tight sm:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight',
  p: 'leading-tight sm:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight',
  span: 'leading-tight sm:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight',
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
  xxs: 'text-[10px] lg:text-xs xl:text-[18px]',
  xs: 'text-xs lg:text-sm xl:text-[24px]',
  sm: 'lg:text-[18px] 2xl:text-[30px]',
  md: 'text-[18px] lg:text-xl xl:text-[36px]',
  lg: 'text-[24px] xl:text-[40px]',
  xl: 'text-[32px] xl:text-[60px]',
  '2xl': 'text-[36px] lg:text-[40px] xl:text-[70px]',
  '3xl': 'text-[40px] lg:text-[52px] xl:text-[80px]',
  '4xl': 'text-[60px] lg:text-[72px] xl:-text-[90px]',
};
