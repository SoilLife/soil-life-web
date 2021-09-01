import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import SurfaceAreaSvg from 'public/images/soil-101/physics/surface_area.svg';

export const SurfaceAreaSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <div className='flex mb-20'>
          <div className='mr-20'>
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
        <img src='/images/soil-101/physics/surface_areas.png' />
      </div>
    </div>
  );
});
