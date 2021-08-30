// components
import { Text, Image } from 'design-system/atoms';

export function PmTypesSection() {
  return (
    <div className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10  space-y-8'>
        <div className='flex items-end pl-20 space-x-4'>
          <Text type='p' weight='light' size='lg' className='text-pink-500'>
            types
          </Text>
          <Text type='p' weight='thin' size='xs'>
            - rocks are composed of different types of minerals that weather at different rates
          </Text>
        </div>
        <Image url='/Soil_101/Soil_Nexus/pm_types_ptw5coXfG.svg' className='h-[685px] object-contain' />
      </div>
    </div>
  );
}
