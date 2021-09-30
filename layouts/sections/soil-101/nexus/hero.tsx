// components
import { Image } from 'design-system/atoms';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection() {
  return (
    <div className='relative h-screen overflow-hidden'>
      <Image
        url='/Soil_101/nexus_header__2__841SmxC6D.png?updatedAt=1630389360286'
        className='min-h-screen object-cover'
      />
      <DownArrow height={30} className='absolute bottom-4 left-1/2 transform -translate-x-1/2' />
    </div>
  );
}
