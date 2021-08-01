export interface TextProps extends React.PropsWithChildren<{}> {
  type: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  weight: 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
  style?: React.CSSProperties;
}
