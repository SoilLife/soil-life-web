// components
import { Text } from 'design-system/atoms';

// assets
import RisksSvg from 'public/images/soil-101/health/risks.svg';

export const RisksSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className='space-y-4 sm:space-y-8'>
      <Text type='h1' weight='bold' size='3xl' className='text-blue-500 mb-8 sm:mb-20'>
        soils at risk
      </Text>
      <Text type='p' weight='light' size='sm' className='text-center'>
        a soccer field of soil is eroded every 5 seconds, an area the size of new york is sealed up every day, and 33%
        of the world’s soils are considered moderately to highly degraded. this poses an existential threat -- to our
        food supply and the global economy. there is a great opportunity to improve soil health and provide solutions to
        global challenges.
      </Text>
      <RisksSvg className='mx-auto sm:w-1/2' />
    </div>
  );
};
