import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets

export const PrinciplesSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-blue-500 mb-20'>
          principles of soil health
        </Text>
        <Text type='p' weight='light' size='xl' className='text-pink-500 text-center'>
          keep it active and well-fed!
        </Text>
      </div>
    </div>
  );
});