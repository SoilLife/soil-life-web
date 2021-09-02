import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

export const DiversitySection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-gray-500 mb-20'>
          soil diversity
        </Text>
        <Text type='p' weight='light' size='sm'>
          the{' '}
          <Text type='span' weight='bold' size='sm'>
            diversity of soils
          </Text>{' '}
          beneath our feet gives rise to the diversity of{' '}
          <Text type='span' weight='bold' size='sm'>
            plants
          </Text>
          ,{' '}
          <Text type='span' weight='bold' size='sm'>
            animals
          </Text>
          , and{' '}
          <Text type='span' weight='bold' size='sm'>
            ecosystems
          </Text>{' '}
          on earth, which in turn, further influence the diversity of soils.{' '}
          <Text type='span' weight='bold' size='sm'>
            it's all connected
          </Text>
        </Text>
        <img src='/images/soil-101/diversity/soil-diversity.png' className='w-full' />
      </div>
    </div>
  );
});