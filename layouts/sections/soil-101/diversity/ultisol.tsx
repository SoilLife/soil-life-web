import { forwardRef } from 'react';

// components
import { Text, Image } from 'design-system/atoms';

export const UltisolSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-gray-500 mb-20'>
        ultisol
      </Text>
      <Text type='h1' weight='light' size='xl' className='text-pink-500 underline text-center mx-auto mb-10'>
        the old soil
      </Text>

      <div className='w-3/4 max-h-full mx-auto border-2 border-solid border-gray-500'>
        <Image
          url='Soil_101/Diversity_-_Soil_Profiles/Ultisol_surface_Coxville_WLB_1__VENETQPvM.jpg'
          className='object-cover '
        />
      </div>
    </div>
  );
});
