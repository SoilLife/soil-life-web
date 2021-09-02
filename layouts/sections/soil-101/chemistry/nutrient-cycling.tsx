import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import NutrientCyclingSvg from 'public/images/soil-101/chemistry/nutrient_cycling.svg';

export const NutrientCyclingSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
          nutrient cycling
        </Text>
        <Text type='p' weight='light' size='md'>
          some nutrients are more reliable than others, making it easier for plants to access and take theme up
        </Text>

        <NutrientCyclingSvg />
      </div>
    </div>
  );
});
