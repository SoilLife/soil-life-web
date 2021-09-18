import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import OrganicMatterSvg from 'public/images/soil-101/physics/organic_matter.svg';

export const OrganicMatterSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-10'>
        organic matter
      </Text>
      <Text type='p' weight='light' size='md'>
        supramolecular aggregation of plant, animal, and microbially-based compounds in varying stages of decomposition.
        stable organic matter can last in the soil for 100s to 1000s of years.
      </Text>
      <OrganicMatterSvg />
    </div>
  );
});
