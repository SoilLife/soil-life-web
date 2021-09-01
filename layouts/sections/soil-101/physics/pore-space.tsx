import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import PoreSpaceSvg from 'public/images/soil-101/physics/pore_space.svg';

export const PoreSpaceSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-20'>
          pore space
        </Text>
        <PoreSpaceSvg />
      </div>
    </div>
  );
});
