import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import ClaySvg from 'public/images/soil-101/physics/exchange_capacity_clay.svg';
import OrganicMatterSvg from 'public/images/soil-101/physics/exchange_capacity_organic_matter.svg';
import MetalOxideSvg from 'public/images/soil-101/physics/exchange_capacity_metal_oxide.svg';

export const ExchangeCapacitySection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-20'>
        exchange capacity
      </Text>
      <div className='space-y-4 sm:space-y-8'>
        <ClaySvg />
        <OrganicMatterSvg />
        <MetalOxideSvg />
      </div>
    </div>
  );
});
