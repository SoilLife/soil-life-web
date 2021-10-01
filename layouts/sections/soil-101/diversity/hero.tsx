// components
import { Image, Text } from 'design-system/atoms';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

const imageUrls = [
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_1_H7yj6M4szGJ.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_12_4hnWVQBte7.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_3_Bjnn6JzY0.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_4_nwPY1ltoO3W.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_5_APOZdIgOH.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Diversity_Last_Soil_Profile_2-nPmWgRG.png',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_6_1F5dQkSdrP.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_10_KXOyznfWU4ad.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_7_1a-MPWo2Kh9W.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_8_WpiYBstRa.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_9_8sT5dxppd.jpeg',
  'Soil_101/Diversity_-_Soil_Profiles/Soil_Profile_11_UvZP_6LA0B.jpeg',
];

export function HeroSection() {
  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='absolute pt-16 top-1/2 transform -translate-y-1/2 text-center text-white w-full z-10'>
        <Text type='h1' weight='light' size='4xl'>
          digging into the diversity:
        </Text>
        <Text type='h1' weight='bold' size='4xl'>
          soil orders
        </Text>
      </div>
      <div className='max-h-screen min-h-screen grid grid-cols-2 sm:pt-20 sm:pb-4 sm:px-8 sm:grid-cols-6 sm:grid-rows-2 sm:gap-2'>
        {imageUrls.map((imageUrl) => (
          <div key={imageUrl} className='overflow-hidden h-[calc(100vh/6)] sm:h-full'>
            <Image url={imageUrl} className='object-cover object-top sm:object-center' />
          </div>
        ))}
      </div>
      <DownArrow height={30} className='absolute bottom-4 left-1/2 transform -translate-x-1/2' />
    </div>
  );
}
