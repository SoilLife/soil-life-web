import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import SoilTexturalClassSvg from 'public/images/soil-101/physics/soil_textural_class.svg';

export const TexturalClassSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-10'>
        soil texture
      </Text>
      <Text type='p' weight='thin' size='md' className='mb-20'>
        ratios of sand, silt, and clay are grouped into categories that behave similarly
      </Text>
      <div className='sm:grid sm:grid-cols-2'>
        <div className='mb-10 sm:mb-0'>
          <SoilTexturalClassSvg />
        </div>
        <div className='flex flex-col justify-center mx-auto space-y-8'>
          <div className='flex space-x-4'>
            <input type='number' className='border border-solid border-pink-500 rounded-lg' />
            <Text type='h2' weight='regular' size='xl'>
              = % sand
            </Text>
          </div>

          <div className='flex space-x-4'>
            <input type='number' className='border border-solid border-pink-500 rounded-lg' />
            <Text type='h2' weight='regular' size='xl'>
              = % silt
            </Text>
          </div>

          <div className='flex space-x-4'>
            <input type='number' className='border border-solid border-pink-500 rounded-lg' />
            <Text type='h2' weight='regular' size='xl'>
              = % clay
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
});
