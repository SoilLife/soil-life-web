import { ButtonProps } from './button.interfaces';

export function Button({ label, ...props }: ButtonProps) {
  return <button {...props}>{label}</button>;
}
