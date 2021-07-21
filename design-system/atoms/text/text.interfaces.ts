export interface TextProps extends React.PropsWithChildren<{}> {
  type: 'h1' | 'h2' | 'h3' | 'p';
  weight: 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
  style?: React.CSSProperties;
}
