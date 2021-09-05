import { Section } from 'design-system/atoms/fullpage-section';
import { Image, Text } from 'design-system/atoms';

import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection() {
  return (
    <Section className='text-white'>
      <Image url='/Home_Page/natgeo5b_H4vFWWpPA.jpg' className='mt-10 object-cover object-top' />
      <div className='absolute w-3/4 text-white transform translate-x-1/2 bottom-40 right-1/2 sm:w-1/2'>
        <Text type='h1' weight='medium' size='5xl'>
          we all share
        </Text>
        <Text type='h1' weight='medium' size='5xl'>
          common ground.
        </Text>
        <div className='mt-4 h-5 sm:h-10 w-full bg-pink-500'></div>
      </div>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
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
