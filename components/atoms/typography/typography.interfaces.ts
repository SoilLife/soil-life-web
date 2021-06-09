export interface TypographyProps extends React.PropsWithChildren<{}> {
  type: 'heading' | 'subheading' | 'paragraph' | 'label';
  className?: string;
  style?: React.CSSProperties;
}
