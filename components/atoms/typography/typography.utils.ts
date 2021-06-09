import { TypographyProps } from './typography.interfaces';

export const typographyTypeMap: { [Type in TypographyProps['type']]: string } = {
  heading: 'text-5xl font-acre-semibold',
  subheading: 'text-3xl font-acre-regular',
  paragraph: 'text-sm sm:text-xl font-acre-light',
  label: 'text-base md:text-lg lg:text-3xl font-acre-regular',
};
