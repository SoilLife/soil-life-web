import { useState } from 'react';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import { Text, Image } from 'design-system/atoms';
import { SoilDiversityModal } from 'design-system/components/soil-diversity-modal';

export const InceptisolsSection = () => {
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
          inceptisols
        </Text>
        <Text type='h1' weight='light' size='2xl' className='text-pink-500 underline text-center mx-auto mb-10'>
          the adolescent soil
        </Text>

        <div className='w-3/4 max-h-full mx-auto border-2 border-solid border-gray-500'>
          <Image
            url='Soil_101/Diversity_-_Soil_Profiles/Inceptisol_surface_Dellwood_WLB_PuYJjmE3V.jpg'
            className='object-cover cursor-pointer'
            onClick={handleOpenModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <SoilDiversityModal
          title='moderate soil 
          development, horizons beginning to form'
          label='contain permafrost'
          features={['moderate organic matter', 'moderate rock content']}
          imageKitUrl='Soil_101/Diversity_-_Soil_Profiles/Inceptisol_profile_Dellwood_WLB_trHwpLtL_Ls.jpg'
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
