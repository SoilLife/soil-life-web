import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import FoodWebSvg from 'public/images/soil-101/biology/food_web.svg';

export const FoodWebSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
          soil food web
        </Text>
        <FoodWebSvg />
      </div>
    </div>
  );
});
