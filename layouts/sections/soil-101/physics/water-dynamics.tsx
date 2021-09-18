import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import WaterDynamicsSvg from 'public/images/soil-101/physics/water_dynamics.svg';

export const WaterDynamicsSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-10'>
        water dynamics
      </Text>
      <WaterDynamicsSvg />
    </div>
  );
});
