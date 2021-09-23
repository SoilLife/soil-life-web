// components
import { Image, Text } from 'design-system/atoms';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection() {
  return (
    <div className='max-h-screen min-h-screen relative overflow-hidden'>
      <div className='absolute top-1/2 transform -translate-y-1/2 text-center text-white w-full'>
        <Text type='h1' weight='light' size='4xl'>
          bringing it altogether:{' '}
          <Text type='span' weight='bold' size='4xl'>
            soil health
          </Text>
        </Text>
      </div>
      <Image url='Soil_101/Soil_Health/natgeo7_FWW0JHPzP.jpg' className='object-cover' />
      <DownArrow height={30} className='absolute bottom-4 left-1/2 transform -translate-x-1/2' />
    </div>
  );
}
