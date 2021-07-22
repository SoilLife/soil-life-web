import { TextProps } from './text.interfaces';

export const textTypeMap: { [Type in TextProps['type']]: string } = {
  h1: 'text-[34px] lg:text-[70px] leading-none',
  h2: 'text-3xl leading-none',
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
