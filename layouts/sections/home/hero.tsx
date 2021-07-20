import { Section } from 'design-system/atoms/fullpage-section';
import { Image } from 'design-system/atoms';

export function HeroSection() {
  return (
    <Section>
      <Image url='/Home_Page/natgeo5b_H4vFWWpPA.jpg' className='object-cover' />
      <div className='absolute w-1/2 text-6xl text-white transform translate-x-1/2 bottom-40 right-1/2 '>
        <p className='font-acre-medium'>
          we all share <br />
          common ground.
        </p>

        <div className='mt-4 h-10 w-full bg-pink-500'></div>
      </div>
    </Section>
  );
}
