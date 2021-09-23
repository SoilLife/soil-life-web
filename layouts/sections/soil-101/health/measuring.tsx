import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import MeasuringSvg from 'public/images/soil-101/health/measuring_soil_health.svg';

export const MeasuringSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-blue-500 mb-20'>
        measuring soil health
      </Text>
      <Text type='p' weight='light' size='sm'>
        soil testing helps land managers evaluate the health of their systems. traditional lab tests focus on soil
        chemical properties, while soil health tests include physical and biological properties, as well.
      </Text>
      <MeasuringSvg />
    </div>
  );
});
