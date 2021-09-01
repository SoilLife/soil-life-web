import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import AggregationSvg from 'public/images/soil-101/physics/healthy_structure_aggregation.svg';
import RootsSvg from 'public/images/soil-101/physics/healthy_structure_roots.svg';
import MicrobesSvg from 'public/images/soil-101/physics/healthy_structure_microbes.svg';

export const HealthyStructureSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-20'>
          healthy structure
        </Text>
        <AggregationSvg />
        <RootsSvg />
        <MicrobesSvg />
      </div>
    </div>
  );
});
