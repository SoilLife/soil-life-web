import { useState } from 'react';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import { Text, Image } from 'design-system/atoms';
import { SoilDiversityModal } from 'design-system/components/soil-diversity-modal';

export const AridisolSection = () => {
  useFullpageOverflow();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div>
        <Text type='h1' weight='light' size='4xl' className='text-gray-500 mb-20'>
          aridisol
        </Text>
        <Text type='h1' weight='light' size='2xl' className='text-pink-500 underline text-center mx-auto mb-10'>
          the dry soil
        </Text>

        <div className='w-3/4 max-h-full mx-auto border-2 border-solid border-gray-500'>
          <Image
            url='Soil_101/Diversity_-_Soil_Profiles/Aridisol_surface_WLB_aUUD2iCB-.jpg'
            className='object-cover cursor-pointer'
            onClick={handleOpenModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <SoilDiversityModal
          title='little to moderate soil development, due to low precipitation'
          label='found in deserts'
          features={[
            'very low organic matter',
            'high sand content',
            'fast infiltration, rapid drainage',
            'low water holding capacity',
          ]}
          imageKitUrl='Soil_101/Diversity_-_Soil_Profiles/Aridisol_profile_WLB_VdQDq8dLhw7.jpg'
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
