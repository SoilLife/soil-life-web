import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import DecompositionSvg from 'public/images/soil-101/chemistry/decomposition.svg';

export const DecompositionSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
        decomposition
      </Text>
      <DecompositionSvg />
    </div>
  );
});
