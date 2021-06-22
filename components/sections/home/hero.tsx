import { Section } from 'components/atoms/fullpage-section';
import { Image } from 'components/atoms';

export function HeroSection() {
  return (
    <Section>
      <Image url='/Home_Page/natgeo5b_H4vFWWpPA.jpg' className='object-cover' />
      <div className='absolute w-1/2 text-6xl text-white transform translate-x-1/2 translate-y-1/4 bottom-1/4 right-1/2 '>
        <p className='mb-6 font-acre-medium'>
          we all share <br />
          common ground.
        </p>
        <div className='p-1 text-xl bg-pink-500 sm:flex sm:space-x-2'>
          <p>get dirty.</p>
          <p>get connected.</p>
        </div>
      </div>
    </Section>
  );
}
