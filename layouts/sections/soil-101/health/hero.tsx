// components
import { Image, Text } from 'design-system/atoms';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection({ onDownArrowClick }: { onDownArrowClick: () => void }) {
  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='absolute top-1/2 transform -translate-y-1/2 text-center text-white w-full z-10'>
        <Text type='h1' weight='light' size='4xl'>
          bringing it altogether:
        </Text>
        <Text type='h1' weight='bold' size='4xl'>
          soil health
        </Text>
      </div>
      <Image url='Soil_101/Soil_Health/natgeo7_FWW0JHPzP.jpg' className='absolute object-cover' />
      <button
        className='absolute bottom-4 left-1/2 transform -translate-x-1/2 hover:scale-105 active:scale-100'
        onClick={onDownArrowClick}
      >
        <DownArrow height={30} />
      </button>
    </div>
  );
}
