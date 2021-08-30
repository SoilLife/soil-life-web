// components
import { Text } from 'design-system/atoms';

// assets
import EcosystemServices from 'public/images/soil-101/nexus/ecosystem_services.svg';

export function EcosystemServicesSection() {
  return (
    <div className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10  space-y-8'>
        <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
          ecosystem services
        </Text>
        <Text type='p' weight='light' size='md' className='text-center'>
          soils are the foundation of nearly every ecosystem on the planet. soil functions and processes provide
          ecosystem services that give rise to healthy plants, healthy people, and a healthy planet!
        </Text>
        <div style={{ height: 'fit-content' }}>
          <EcosystemServices className='h-full mx-auto max-h-[500px] object-contain' />
        </div>
        <Text type='p' weight='light' size='md' className='text-center text-teal-500'>
          "essentially, all life depends upon the soil... there can be no life without soil and no soil without life;
          they have evolved together." -charles kellogg
        </Text>
      </div>
    </div>
  );
}
