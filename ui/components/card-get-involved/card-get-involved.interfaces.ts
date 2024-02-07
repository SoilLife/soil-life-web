import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface CardGetInvolvedProps {
  color: Color;
  index: number;
  links: string | { name: string; href: string }[];
  text: string;
  imageUrl?: string;
  icon?: IconProp;
  imageContain?: boolean;
}
