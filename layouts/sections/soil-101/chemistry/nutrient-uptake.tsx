import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import NutrientUptakeSvg from 'public/images/soil-101/chemistry/nutrient_uptake.svg';

export const NutrientUptakeSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
        nutrient uptake
      </Text>
      <NutrientUptakeSvg />
      <Text type='p' weight='light' size='md'>
        building the compounds also requires water and nutrients. as roots grow, they take up nutrients dissolved in
        water, known as the "
        <Text type='span' weight='bold' size='md'>
          soil solution
        </Text>
        " or from particle surfaces.
      </Text>
    </div>
  );
});
