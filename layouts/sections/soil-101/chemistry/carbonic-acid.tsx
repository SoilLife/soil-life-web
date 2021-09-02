import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import CarbonicAcidSvg from 'public/images/soil-101/chemistry/carbonic_acid.svg';

export const CarbonicAcidSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
          carbonic acid
        </Text>
        <CarbonicAcidSvg />
        <Text type='p' weight='light' size='md'>
          plant roots respire some carbon as CO2 out of their roots. leading to production of carbonic acid and
          increased mineral weathering.
        </Text>
      </div>
    </div>
  );
});
