export interface TypographyProps extends React.PropsWithChildren<{}> {
  type: 'heading' | 'subheading' | 'paragraph';
  className?: string;
  style?: React.CSSProperties;
}
