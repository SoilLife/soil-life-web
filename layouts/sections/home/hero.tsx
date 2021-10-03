import { Section } from 'design-system/atoms/fullpage-section';
import { Image, Text } from 'design-system/atoms';

import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection() {
  return (
    <Section>
      <Image url='/Home_Page/natgeo5b_H4vFWWpPA.jpg' className='mt-10 object-cover object-top' />
      <div className='absolute w-3/4 transform translate-x-1/2 bottom-[15%] right-1/2 sm:w-1/2'>
        <Text type='h1' weight='medium' size='5xl' color='white' style={{ lineHeight: 1 }}>
          we all share
        </Text>
        <Text type='h1' weight='medium' size='5xl' color='white' style={{ lineHeight: 1 }}>
          common ground.
        </Text>
        <div className='mt-4 h-5 xl:h-6 2xl:h-10 w-full bg-pink-500'></div>
      </div>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center'>
        <Text type='p' weight='light' color='white' size='sm'>
          get
        </Text>
        <Text type='p' weight='light' color='white' size='sm' className='mb-1'>
          connected
        </Text>
        <div className='flex justify-center'>
          <DownArrow height={20} />
        </div>
      </div>
    </Section>
  );
}
