import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import AggregationSvg from 'public/images/soil-101/physics/aggregation.svg';

export const AggregatesSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-20'>
        aggregates
      </Text>
      <AggregationSvg />
    </div>
  );
});
