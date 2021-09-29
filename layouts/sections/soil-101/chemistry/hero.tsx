// components
import { Image, Text } from 'design-system/atoms';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection() {
  return (
    <div className='max-h-screen min-h-screen relative overflow-hidden'>
      <div className='absolute top-1/2 transform -translate-y-1/2 text-center text-white w-full z-10'>
        <Text type='h1' weight='light' size='4xl'>
          peering into the process:{' '}
          <Text type='span' weight='bold' size='4xl'>
            soil functions
          </Text>
        </Text>
      </div>
      <Image
        url='Soil_101/soil_chemistry/soil_chemistry_hero.JPG?updatedAt=1630600714426'
        className='absolute object-cover'
      />
      <DownArrow height={30} className='absolute bottom-4 left-1/2 transform -translate-x-1/2' />
    </div>
  );
}
