import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import RootIonExchangeSvg from 'public/images/soil-101/chemistry/root_ion.svg';

export const RootIonExchangeSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
        root ion exchange
      </Text>
      <RootIonExchangeSvg />
      <Text type='p' weight='light' size='md'>
        plant roots also release H+, or protons, which can replace other positively charged cations on clays, making
        them available for plant uptake.
      </Text>
    </div>
  );
});
