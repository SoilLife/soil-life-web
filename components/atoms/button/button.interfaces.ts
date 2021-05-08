export interface ButtonProps extends Pick<JSX.IntrinsicElements['button'], 'id' | 'key' | 'onClick'> {
  label: string;
  inverted?: boolean;
}
