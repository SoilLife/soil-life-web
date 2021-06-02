import { Section } from 'components/atoms/fullpage-section';
import { Image } from 'components/atoms';

export function HeroSection() {
  return (
    <Section data-anchor=''>
      <Image url='/Home_Page/natgeo5b_H4vFWWpPA.jpg' />
      <div className='absolute w-1/2 text-6xl text-white transform translate-x-1/2 bottom-1/4 right-1/2 '>
        <p className='mb-6 font-acre-medium'>
          we all share <br />
          common ground.
        </p>
        <div className='p-1 text-xl bg-pink-500'>
          <p>
            <span>get dirty.</span> <span>get connected.</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
