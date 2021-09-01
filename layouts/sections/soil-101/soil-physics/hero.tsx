// components
import { Image, Text } from 'design-system/atoms';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection() {
  return (
    <div className='max-h-screen relative h-full overflow-hidden'>
      <div className='absolute top-1/2 transform -translate-y-1/2 text-center text-white w-full'>
        <Text type='h1' weight='semibold' size='4xl'>
          setting the stage:
        </Text>
        <Text type='h1' weight='semibold' size='4xl'>
          the soil environment
        </Text>
      </div>
      <Image url='Soil_101/Soil_Physics/Soil_Habitat_a4f2tAtMH.jpg?updatedAt=1630509120158' className='object-cover' />
      <DownArrow height={60} className='absolute bottom-4 left-1/2 transform -translate-x-1/2' />
    </div>
  );
}
