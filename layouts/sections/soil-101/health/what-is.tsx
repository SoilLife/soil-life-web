// components
import { Text } from 'design-system/atoms';

// assets
import WhatIsSoilHealthSvg from 'public/images/soil-101/health/what_is_soil_health.svg';
import SomFunctionsSvg from 'public/images/soil-101/health/SOM_functions.svg';
import HumanProfileSvg from 'public/images/soil-101/health/human_profile.svg';
import SoilProfileSvg from 'public/images/soil-101/health/soil_profile.svg';

export const WhatIsSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className='space-y-4 sm:space-y-8'>
      <Text type='h1' weight='light' size='4xl' className='text-blue-500 mb-20'>
        what is soil health?
      </Text>
      <Text type='p' weight='light' size='md'>
        soil health is the capacity of soil to{' '}
        <Text type='span' weight='bold' size='md'>
          function as a vital, living ecosystem
        </Text>{' '}
        that sustains plants, animals, and humans. many soil properties are inherent and can’t change on a human time
        scale (i.e. texture). others are dynamic and directly influenced by management (i.e structure, organic matter).
      </Text>
      <WhatIsSoilHealthSvg />
      <Text type='p' weight='light' size='md'>
        just like our{' '}
        <Text type='span' weight='bold' size='md' className='text-blue-500'>
          organs
        </Text>{' '}
        provide services that keep us healthy, healthy soil provides important{' '}
        <Text type='span' weight='bold' size='md' className='text-blue-500'>
          ecosystem services
        </Text>{' '}
        to life on earth!
      </Text>

      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center sm:space-x-32'>
        <HumanProfileSvg />

        <Text type='p' weight='light' size='md'>
          just like we inherit{' '}
          <Text type='span' weight='bold' size='md'>
            genetic material
          </Text>{' '}
          from our parents, soils inherit certain properties from their{' '}
          <Text type='span' weight='bold' size='md'>
            parent material
          </Text>{' '}
          that can’t easily be changed (i.e. texture, mineralogy), but just like{' '}
          <Text type='span' weight='bold' size='md'>
            diet and lifestyle
          </Text>{' '}
          have the power to modify our DNA (via epigenetics) and promote overall health, the way we manage soil has a
          major impact on soil organic matter, soil structure, and overall soil health!
        </Text>

        <SoilProfileSvg />
      </div>

      <Text type='p' weight='light' size='md'>
        organic matter (SOM) is key to soil health, as it greatly improves most soil functions. whether sandy or clayey,
        SOM improves structure, which may be the real{' '}
        <Text type='span' weight='bold' size='md'>
          secret to soil health
        </Text>
        . while many conservation practices can improve soil structure, the ability to build and store SOM varies from
        soil to soil.
      </Text>
      <SomFunctionsSvg />

      <Text type='p' weight='light' size='md'>
        in order to build SOM, microbes must{' '}
        <Text type='span' weight='bold' size='md'>
          store more of the carbon
        </Text>{' '}
        they consume (as living biomass){' '}
        <Text type='span' weight='bold' size='md'>
          than they respire as CO2
        </Text>
        . this requires a healthy living environment (good structure!) that optimizes their health and overall
        efficiency.
      </Text>
    </div>
  );
};
