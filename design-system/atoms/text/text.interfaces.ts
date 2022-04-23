export interface TextProps extends React.PropsWithChildren<{}> {
  type: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  size: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight: 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  color?: Color | 'white' | 'current';
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}
