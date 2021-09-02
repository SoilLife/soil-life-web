import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import PhotosynthesisSvg from 'public/images/soil-101/chemistry/photosynthesis.svg';

export const PhotosynthesisSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
          photosynthesis
        </Text>
        <PhotosynthesisSvg />
        <Text type='p' weight='light' size='md'>
          as shoots grow, they act like solar panels, with the sun fueling conversion of CO2 from the atmosphere into
          the building blocks of life (carbohydrates, proteins, fats, etc).
        </Text>
      </div>
    </div>
  );
});
