import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import BetterTogetherSvg from 'public/images/soil-101/biology/better_together.svg';
import PlantGrowthPromoting from 'public/images/soil-101/biology/plant_growth_promoting.svg';

export const SymbiosesSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
          symbioses
        </Text>

        <Text type='p' weight='light' size='lg'>
          mutually beneficial relationships, called symbioses, have evolved over millions and millions of years between
          plants and soil organisms.
        </Text>
        <BetterTogetherSvg className='w-1/2 mx-auto' />
        <Text type='p' weight='light' size='lg' className='text-center'>
          microbes release a variety of plant growth promoting compounds
        </Text>
        <PlantGrowthPromoting />
      </div>
    </div>
  );
});
