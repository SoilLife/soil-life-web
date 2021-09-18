import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import SoilFormation from 'public/images/soil-101/nexus/soil_formation.svg';

export const FormationSection = forwardRef<HTMLDivElement, {}>(function (_, ref) {
  return (
    <div ref={ref}>
      <div className='space-y-8'>
        <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
          soil formation
        </Text>
        <SoilFormation className='max-h-[668px] mx-auto' />
      </div>
    </div>
  );
});
