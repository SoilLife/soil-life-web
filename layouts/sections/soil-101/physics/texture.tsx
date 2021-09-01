import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import SoilTextureSvg from 'public/images/soil-101/physics/soil_texture.svg';

export const TextureSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <div className='flex'>
          <div className='w-2/5 mr-10'>
            <Text type='h1' weight='bold' size='3xl' className='text-yellow-500 mb-20'>
              soil texture
            </Text>
            <Text type='p' weight='light' size='md'>
              the mineral particles in soil are classified by size into{' '}
              <Text type='span' weight='bold' size='md' style={{ color: '#EEA117' }}>
                sand
              </Text>
              ,{' '}
              <Text type='span' weight='bold' size='md' style={{ color: '#C17443' }}>
                silts
              </Text>
              , and{' '}
              <Text type='span' weight='bold' size='md' style={{ color: '#5C5052' }}>
                clay
              </Text>
              . the proportion of these three particle sizes determines the{' '}
              <Text type='span' weight='bold' size='md' style={{ color: '#FFCF01' }}>
                texture
              </Text>{' '}
              of the soil -- how it feels in your hand, how water moves into and through it, how fertile it is, and
              much, much more!
            </Text>
          </div>
          <SoilTextureSvg className='w-3/5' />
        </div>
      </div>
    </div>
  );
});
