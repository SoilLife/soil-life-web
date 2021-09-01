import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import SoilTexturalClassSvg from 'public/images/soil-101/physics/soil_textural_class.svg';

export const TexturalClassSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-10'>
          soil texture
        </Text>
        <Text type='p' weight='thin' size='md' className='mb-20'>
          ratios of sand, silt, and clay are grouped into categories that behave similarly
        </Text>
        <SoilTexturalClassSvg />
      </div>
    </div>
  );
});
