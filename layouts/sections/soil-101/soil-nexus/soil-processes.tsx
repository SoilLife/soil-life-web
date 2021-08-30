// components
import { Text } from 'design-system/atoms';

// assets
import SoilProcesses from 'public/images/soil-101/nexus/soil_processes.svg';

export function SoilProcessesSection() {
  return (
    <div className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10  space-y-8'>
        <div className='grid grid-cols-2'>
          <div className='space-y-10'>
            <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
              soil processes
            </Text>
            <ul className='space-y-10'>
              <li>
                <Text type='p' weight='medium' size='lg' className='text-pink-500'>
                  additions:
                </Text>
                <Text type='p' weight='medium' size='md'>
                  rain/flooding, dust, animal
                </Text>
                <Text type='p' weight='medium' size='md'>
                  and plant residues, fertilizers
                </Text>
              </li>
              <li>
                <Text type='p' weight='medium' size='lg' className='text-teal-500'>
                  losses:
                </Text>
                <Text type='p' weight='medium' size='md'>
                  erosion/runoff, leaching,
                </Text>
                <Text type='p' weight='medium' size='md'>
                  metabolism, volatilization
                </Text>
              </li>
              <li>
                <Text type='p' weight='medium' size='lg' className='text-yellow-500'>
                  translocations:
                </Text>
                <Text type='p' weight='medium' size='md'>
                  gravity/water, evaporation of
                </Text>
                <Text type='p' weight='medium' size='md'>
                  salts, mixing by organisms
                </Text>
              </li>
              <li>
                <Text type='p' weight='medium' size='lg' className='text-blue-500'>
                  transformations:
                </Text>
                <Text type='p' weight='medium' size='md'>
                  decomposition of residues,
                </Text>
                <Text type='p' weight='medium' size='md'>
                  weathering of rocks to clay, iron oxidation{' '}
                </Text>
              </li>
            </ul>
          </div>
          <SoilProcesses />
        </div>
      </div>
    </div>
  );
}
