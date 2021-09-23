import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import MetabolismSvg from 'public/images/soil-101/chemistry/metabolism.svg';

export const MetabolismSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
        metabolism
      </Text>
      <MetabolismSvg />
      <Text type='p' weight='light' size='md'>
        meanwhile, 30-60% of the plant's carbon is put into compounds that are being pumped underground (i.e. sugars,
        amino acids); feeding microbes in the soil.
      </Text>
    </div>
  );
});
