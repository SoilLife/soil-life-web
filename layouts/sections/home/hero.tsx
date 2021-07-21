import { Section } from 'design-system/atoms/fullpage-section';
import { Image, Text } from 'design-system/atoms';

export function HeroSection() {
  return (
    <Section>
      <Image url='/Home_Page/natgeo5b_H4vFWWpPA.jpg' className='object-cover' />
      <div className='absolute w-1/2 transform translate-x-1/2 bottom-40 right-1/2 '>
        <Text type='h1' weight='medium' className='text-white text-[34px] sm:text-6xl'>
          we all share <br />
          common ground.
        </Text>

        <div className='mt-4 h-5 sm:h-10 w-full bg-pink-500'></div>
      </div>
    </Section>
  );
}
