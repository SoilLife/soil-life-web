import { Card6F } from 'components/atoms/card-six-f';
import { slides } from 'data/six-f-slides';
import { Section, Slide, Image } from 'components/atoms';

export function SixFSection() {
  return (
    <Section>
      {slides.map(({ photoUrl, ...slide }, index) => {
        return (
          <Slide className='relative' key={index}>
            <Card6F {...slide} />
            <div className='absolute top-0 left-0 w-full h-full sm:top-1/3 '>
              <Image key={index} url={photoUrl} className='object-cover' />
            </div>
          </Slide>
        );
      })}
    </Section>
  );
}
