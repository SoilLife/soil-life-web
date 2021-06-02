import { Card6F } from 'components/atoms/card-six-f';
import { slides } from 'data/six-f-slides';
import { Section, Slide, Image } from 'components/atoms';

export function SixFSection() {
  return (
    <Section data-anchor='six-f'>
      {slides.map(({ photoUrl, ...slide }, index) => {
        return (
          <Slide className='relative' key={index}>
            <Card6F {...slide} />
            <Image key={index} url={photoUrl} className='absolute left-0 w-full top-56' />
          </Slide>
        );
      })}
    </Section>
  );
}
