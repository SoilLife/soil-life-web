import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import NutrientAvailabilitySvg from 'public/images/soil-101/chemistry/nutrient_availability.svg';

export const NutrientAvailabilitySection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
          ph & nutrient availability
        </Text>
        <Text type='p' weight='light' size='md'>
          ph determines the amount and type of charge on soil minerals and organic matter (the exchange complex), as
          well as the concentration of protons or hydroxyls that can kick plant nutrients off the complex
        </Text>
        <NutrientAvailabilitySvg />
      </div>
    </div>
  );
});
