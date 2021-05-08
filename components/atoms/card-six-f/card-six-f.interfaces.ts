export interface CardSixFProps
  extends Pick<JSX.IntrinsicElements['div'], 'id' | 'key' | 'style' | 'className' | 'onClick'> {
  text: JSX.Element | string;
  subtext: string;
  ctaText: string;
  icon: string;
  color: string;
}
