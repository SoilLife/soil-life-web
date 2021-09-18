import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import StructureSvg from 'public/images/soil-101/physics/structure.svg';

export const StructureSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-20'>
        structure
      </Text>
      <Text type='p' weight='light' size='md'>
        the way these structural units stack together determines the size, shape, and distribution of pore space within
        the soil profile. the density of the individual soil particles and the amount of empty space within and between
        them determines the bulk density, or mass per unit volume of the soil.
      </Text>
      <StructureSvg />
    </div>
  );
});
