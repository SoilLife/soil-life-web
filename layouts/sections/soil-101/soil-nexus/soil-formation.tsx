// components
import { Text } from 'design-system/atoms';

// assets
import SoilFormation from 'public/images/soil-101/nexus/soil_formation.svg';

export function SoilFormationSection() {
  return (
    <div className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10  space-y-8'>
        <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
          soil formation
        </Text>
        <SoilFormation className='max-h-[668px] mx-auto' />
      </div>
    </div>
  );
}
