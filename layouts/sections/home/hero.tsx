import { Section } from 'design-system/atoms/fullpage-section';
import { Image, Text } from 'design-system/atoms';

import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection() {
  return (
    <Section>
      <Image url='/Home_Page/natgeo5b_H4vFWWpPA.jpg' className='object-cover' />
      <div className='absolute w-1/2 transform translate-x-1/2 bottom-40 right-1/2 '>
        <Text type='h1' weight='medium' size='2xl' className='text-white'>
          we all share <br />
          common ground.
        </Text>
        <div className='mt-4 h-5 sm:h-10 w-full bg-pink-500'></div>
      </div>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white'>
        <Text type='p' weight='light' size='sm' className='mb-10'>
          get connected
        </Text>
        <div className='flex justify-center'>
          <DownArrow height={20} />
        </div>
      </div>
    </Section>
  );
}
