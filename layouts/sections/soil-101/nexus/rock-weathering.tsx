// components
import { Text } from 'design-system/atoms';

// assets
import RockWeathering from 'public/images/soil-101/nexus/rock_weathering.svg';
import RockWeatheringTable from 'public/images/soil-101/nexus/rock_weathering_table.svg';

export function RockWeatheringSection() {
  return (
    <div className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10  space-y-8'>
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
}
