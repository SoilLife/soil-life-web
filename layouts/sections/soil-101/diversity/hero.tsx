// components
import { Image, Text } from 'design-system/atoms';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

export function HeroSection() {
  return (
    <div className='max-h-screen min-h-screen relative overflow-hidden'>
      <div className='absolute pt-16 top-1/2 transform -translate-y-1/2 text-center text-white w-full'>
        <Text type='h1' weight='light' size='4xl'>
          digging into the diversity:
        </Text>
        <Text type='h1' weight='bold' size='4xl'>
          soil orders
        </Text>
      </div>
      <div className='min-h-screen pt-20 pb-4 px-8 grid grid-cols-6 grid-rows-2 gap-4'>
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_1_H7yj6M4szGJ.jpeg' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_12_4hnWVQBte7.jpeg' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_3_Bjnn6JzY0.jpeg' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_4_nwPY1ltoO3W.jpeg' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_5_APOZdIgOH.jpeg' className='object-cover' />
        <Image url='Soil_101/soil_chemistry/soil_chemistry_hero.JPG?updatedAt=1630600714426' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_6_1F5dQkSdrP.jpeg' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_10_KXOyznfWU4ad.jpeg' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_7_1a-MPWo2Kh9W.jpeg' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_8_WpiYBstRa.jpeg' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_9_8sT5dxppd.jpeg' className='object-cover' />
        <Image url='Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_11_UvZP_6LA0B.jpeg' className='object-cover' />
      </div>
      <DownArrow height={30} className='absolute bottom-4 left-1/2 transform -translate-x-1/2' />
    </div>
  );
}
