import { MouseEvent, CSSProperties } from 'react';

export type ButtonProps = {
  as: 'button' | 'link';
  label: string;
  type: 'default' | 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'alert';
  size: 'sm' | 'md' | 'lg';
  id?: string;
  key?: string | number;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  style?: CSSProperties;
  inverted?: boolean;
};
