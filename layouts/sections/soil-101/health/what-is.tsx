import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import WhatIsSoilHealthSvg from 'public/images/soil-101/health/what_is_soil_health.svg';
import SoilHumanProfileSvg from 'public/images/soil-101/health/soil_human_profile.svg';
import SomFunctionsSvg from 'public/images/soil-101/health/SOM_functions.svg';

export const WhatIsSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-blue-500 mb-20'>
        what is soil health?
      </Text>
      <Text type='p' weight='light' size='sm'>
        soil health is the capacity of soil to{' '}
        <Text type='span' weight='bold' size='sm'>
          function as a vital, living ecosystem
        </Text>{' '}
        that sustains plants, animals, and humans. many soil properties are inherent and can’t change on a human time
        scale (i.e. texture). others are dynamic and directly influenced by management (i.e structure, organic matter).
      </Text>
      <WhatIsSoilHealthSvg />
      <Text type='p' weight='light' size='sm'>
        just like our{' '}
        <Text type='span' weight='bold' size='sm' className='text-blue-500'>
          organs
        </Text>{' '}
        provide services that keep us healthy, healthy soil provides important{' '}
        <Text type='span' weight='bold' size='sm' className='text-blue-500'>
          ecosystem services
        </Text>{' '}
        to life on earth!
      </Text>
      <SoilHumanProfileSvg />

      <Text type='p' weight='light' size='sm'>
        organic matter (SOM) is key to soil health, as it greatly improves most soil functions. whether sandy or clayey,
        SOM improves structure, which may be the real{' '}
        <Text type='span' weight='bold' size='sm'>
          secret to soil health
        </Text>
        . while many conservation practices can improve soil structure, the ability to build and store SOM varies from
        soil to soil.
      </Text>
      <SomFunctionsSvg />

      <Text type='p' weight='light' size='sm'>
        in order to build SOM, microbes must{' '}
        <Text type='span' weight='bold' size='sm'>
          store more of the carbon
        </Text>{' '}
        they consume (as living biomass){' '}
        <Text type='span' weight='bold' size='sm'>
          than they respire as CO2
        </Text>
        . this requires a healthy living environment (good structure!) that optimizes their health and overall
        efficiency.
      </Text>
    </div>
  );
});
