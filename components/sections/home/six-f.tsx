import { Card6F } from 'components/atoms/card-six-f';
import { slides } from 'data/six-f-slides';
import { IKImage } from 'imagekitio-react';

export function SixFSection() {
  return (
    <section className='relative h-screen overflow-hidden'>
      {slides.map(({ photoUrl, ...slide }, index) => {
        return (
          <div key={index} className='max-h-full'>
            <Card6F {...slide} />
            <IKImage
              key={index}
              path={photoUrl}
              loading='lazy'
              lqip={{ active: true }}
              className='absolute w-full top-56 left-0'
            />
          </div>
        );
      })}
    </section>
  );
}
