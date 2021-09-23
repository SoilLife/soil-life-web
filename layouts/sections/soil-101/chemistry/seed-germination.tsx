import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import SeedGerminationSvg from 'public/images/soil-101/chemistry/seed_germination.svg';

export const SeedGerminationSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
        seed germination
      </Text>

      <SeedGerminationSvg />
    </div>
  );
});
