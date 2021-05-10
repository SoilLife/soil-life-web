import { Card6F } from 'components/atoms/card-six-f';
import { slides } from 'data/six-f-slides';
import { IKImage } from 'imagekitio-react';

export function SixFSection() {
  return (
    <section className='h-screen flex overflow-y-hidden overflow-x-auto'>
      {slides.map(({ photoUrl, ...slide }, index) => (
        <div key={index} className='w-full flex-shrink-0'>
          <Card6F {...slide} />
          <IKImage path={photoUrl} loading='lazy' lqip={{ active: true }} />
        </div>
      ))}
    </section>
  );
}
