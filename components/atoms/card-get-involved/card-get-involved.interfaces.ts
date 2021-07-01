import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface CardGetInvolvedProps {
  color: 'blue' | 'gray' | 'orange' | 'pink' | 'teal' | 'yellow';
  index: number;
  links: string | { name: string; href: string }[];
  text: string;
  imageUrl?: string;
  icon?: IconProp;
  imageContain?: boolean;
}
