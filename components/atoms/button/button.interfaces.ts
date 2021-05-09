export interface ButtonProps
  extends Pick<JSX.IntrinsicElements['button'], 'id' | 'key' | 'className' | 'onClick' | 'style'> {
  label: string;
  type: 'default' | 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  inverted?: boolean;
}
