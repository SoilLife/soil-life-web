import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import SurfaceAreaSvg from 'public/images/soil-101/physics/surface_area.svg';

export const SurfaceAreaSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <div className='flex flex-col space-y-6 mb-20 sm:flex-row sm:space-y-0 sm:space-x-20'>
        <div>
          <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-10'>
            surface area
          </Text>
          <Text type='p' weight='thin' size='md'>
            the smaller the particles, the greater the surface area. the smallest particles, clays, not only have high
            surface area, but carry an electrical charge, as well.{' '}
          </Text>
        </div>
        <SurfaceAreaSvg />
      </div>
      <img src='/images/soil-101/physics/surface_areas.png' className='h-full w-full object-contain' />
    </div>
  );
});
