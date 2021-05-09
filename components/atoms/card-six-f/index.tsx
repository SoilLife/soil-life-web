import { CardSixFProps } from './card-six-f.interfaces';

export function Card6F({
  color: _color,
  ctaText: _ctaText,
  icon: _icon,
  subtext: _subtext,
  text: _text,
  className,
}: CardSixFProps) {
  return <div className={`${className}`}></div>;
}
