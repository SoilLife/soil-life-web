import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import RhizosphereSvg from 'public/images/soil-101/biology/rhizosphere.svg';
import RhizosphereDetailedSvg from 'public/images/soil-101/biology/rhizosphere_detailed.svg';

export const RhizosphereSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
          rhizosphere
        </Text>
        <div className='flex'>
          <Text type='p' weight='light' size='md' className='w-2/5'>
            the{' '}
            <Text type='span' weight='light' size='md' className='text-teal-500'>
              rhizosphere
            </Text>{' '}
            is a bustling metropolis with billions of organisms in a single teaspoon! it's the area of soil that is in
            close contact with plant roots, where biological activity and turnover provides available nutrients right
            where plants needs them most!
          </Text>
          <RhizosphereSvg className='w-3/5' />
        </div>
        <RhizosphereDetailedSvg />
      </div>
    </div>
  );
});
