import { Section } from 'components/atoms/fullpage-section';
import { Image } from 'components/atoms';

export function HeroSection() {
  return (
    <Section>
      <Image url='/Home_Page/natgeo5b_H4vFWWpPA.jpg' className='object-cover' />
      <div className='absolute w-1/2 text-6xl text-white transform translate-x-1/2 bottom-1/4 right-1/2 '>
        <p className='font-acre-medium'>
          we all share <br />
          common ground.
        </p>
      </div>
    </Section>
  );
}
