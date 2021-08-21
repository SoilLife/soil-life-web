// components
import { Section, Text } from 'design-system/atoms';

// assets
import AirWaterMineralOrganic from 'public/images/soil-101/nexus/air_water_mineral_organic.svg';
import NexusIntro from 'public/images/soil-101/nexus/nexus_intro.svg';

export function SoilNexusIntroSection() {
  return (
    <Section>
      <div className='container py-16 h-full grid grid-cols-12'>
        <div className='col-start-3 col-span-10 '>
          <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
            soil: the nexus
          </Text>
          <Text type='p' weight='light' size='md'>
            the{' '}
            <Text type='span' weight='bold' size='md' className='text-pink-500'>
              "solid ground"
            </Text>{' '}
            we walk on is only about{' '}
            <Text type='span' weight='bold' size='md' className='text-pink-500'>
              50% solid
            </Text>{' '}
            material made of mostly mineral and 1-10% organic matter. the remaining{' '}
            <Text type='span' weight='bold' size='md' className='text-pink-500'>
              50% is empty, pore space
            </Text>{' '}
            — filled with either air or water.
          </Text>
          <div className='flex space-x-10 p-6'>
            <NexusIntro />
            <AirWaterMineralOrganic />
          </div>
        </div>
      </div>
    </Section>
  );
}
