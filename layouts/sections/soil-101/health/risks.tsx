import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import RisksSvg from 'public/images/soil-101/health/risks.svg';

export const RisksSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-blue-500 mb-20'>
          soils at risk
        </Text>
        <Text type='p' weight='light' size='sm'>
          a soccer field of soil is eroded every 5 seconds, an area the size of new york is sealed up every day, and 33%
          of the world’s soils are considered moderately to highly degraded. this poses an existential threat -- to our
          food supply and the global economy. there is a great opportunity to improve soil health and provide solutions
          to global challenges.
        </Text>
        <RisksSvg />
      </div>
    </div>
  );
});