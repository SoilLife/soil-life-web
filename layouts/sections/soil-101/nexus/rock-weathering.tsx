import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import RockWeathering from 'public/images/soil-101/nexus/rock_weathering.svg';
import RockWeatheringTable from 'public/images/soil-101/nexus/rock_weathering_table.svg';

export const RockWeatheringSection = forwardRef<HTMLDivElement, {}>(function (_, ref) {
  return (
    <div ref={ref} className='py-16'>
      <div className='space-y-8'>
        <div className='flex'>
          <div>
            <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
              rock weathering
            </Text>
            <Text type='p' weight='light' size='md'>
              over time, through a combination of physical, biological, and chemical processes, rocks break down into
              smaller and smaller pieces.
            </Text>
          </div>
          <RockWeathering height='189px' />
        </div>
        <RockWeatheringTable />
      </div>
    </div>
  );
});
