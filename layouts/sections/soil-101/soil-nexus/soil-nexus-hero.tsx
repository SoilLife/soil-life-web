// components
import { Image, Text } from 'design-system/atoms';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

export function SoilNexusHeroSection() {
  return (
    <div className='max-h-screen relative h-full overflow-hidden'>
      <div className='grid grid-cols-2 grid-rows-2 text-white'>
        <div className='relative'>
          <Image url='Soil_101//Soil_Nexus/atmosphere_UTyTSatt0.jpg' className='object-cover' />
          <Text type='h2' size='4xl' weight='medium' className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
            atmosphere
          </Text>
        </div>
        <div className='relative'>
          <Image url='Soil_101/Soil_Nexus/hydrosphere_bBzkj3nZj' className='object-cover' />
          <Text type='h2' size='4xl' weight='medium' className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
            hydrosphere
          </Text>
        </div>
        <div className='relative'>
          <Image url='Soil_101/Soil_Nexus/biosphere_YgY0JFMjV.jpg' className='object-cover' />
          <Text type='h2' size='4xl' weight='medium' className='absolute top-0 left-1/2 transform -translate-x-1/2'>
            biosphere
          </Text>
        </div>
        <div className='relative'>
          <Image url='Soil_101/Soil_Nexus/lithosphere_JlqxSPmFY.jpg' className='object-cover' />
          <Text type='h2' size='4xl' weight='medium' className='absolute top-0 left-1/2 transform -translate-x-1/2'>
            lithosphere
          </Text>
        </div>
      </div>
      <div className='absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-solid border-white  overflow-hidden max-h-[264px] max-w-[264px]'>
        <Image
          url='Soil_101/Soil_Nexus/soil_wksCYXPSf.jpg?updatedAt=1629619132361'
          className='h-full w-full object-cover'
        />
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full text-white'>
          <Text type='h2' weight='medium' size='3xl'>
            soil
          </Text>
          <Text type='p' weight='medium' size='xs'>
            is the
          </Text>
          <Text type='h2' weight='bold' size='xl'>
            nexus
          </Text>
        </div>
      </div>
      <DownArrow height={60} className='absolute bottom-4 left-1/2 transform -translate-x-1/2' />
    </div>
  );
}
