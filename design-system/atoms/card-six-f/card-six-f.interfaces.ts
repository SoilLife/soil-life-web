import { ButtonProps } from 'design-system/atoms/button/button.interfaces';

export interface CardSixFProps
  extends Pick<JSX.IntrinsicElements['div'], 'id' | 'key' | 'style' | 'className' | 'onClick'> {
  text: JSX.Element | string;
  subtext: string;
  icon: string;
  type: 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'alert';
  button: ButtonProps;
  href: string;
}
