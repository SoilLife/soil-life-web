// components
import { Image, Text } from 'design-system/atoms';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection() {
  return (
    <div className='max-h-screen min-h-screen relative overflow-hidden'>
      <div className='absolute top-1/2 transform -translate-y-1/2 text-center text-white w-full'>
        <Text type='h1' weight='light' size='4xl'>
          meet the cast:
        </Text>
        <Text type='h1' weight='bold' size='4xl'>
          soil biology
        </Text>
      </div>
      <Image
        url='Soil_101/Soil_Biology/Players_Soil_Biology_tardigrade_protozoaslide_bmxw1jrtlnE.jpg?updatedAt=1630520368188'
        className='object-cover'
      />
      <DownArrow height={30} className='absolute bottom-4 left-1/2 transform -translate-x-1/2' />
    </div>
  );
}
