import { forwardRef } from 'react';

// components
import { Text, Image } from 'design-system/atoms';

export const AnthrosolSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-gray-500 mb-20'>
          anthrosol
        </Text>
        <Text type='h1' weight='light' size='xl' className='text-pink-500 underline text-center mx-auto mb-10'>
          the human soil
        </Text>

        <div className='w-3/4 max-h-full mx-auto border-2 border-solid border-gray-500'>
          <Image url='Soil_101/Diversity_-_Soil_Profiles/anthrosol_surface_NKdtUYTsVh.jpg' className='object-cover ' />
        </div>
      </div>
    </div>
  );
});
