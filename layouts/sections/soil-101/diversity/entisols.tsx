import { useState } from 'react';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import { Text, Image } from 'design-system/atoms';
import { SoilDiversityModal } from 'design-system/components/soil-diversity-modal';

export const EntisolsSection = () => {
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
          entisols
        </Text>
        <Text type='h1' weight='light' size='2xl' className='text-pink-500 underline text-center mx-auto mb-10'>
          the baby soil
        </Text>

        <div className='w-3/4 max-h-full mx-auto border-2 border-solid border-gray-500'>
          <Image
            url='Soil_101/Diversity_-_Soil_Profiles/Entisol_surface_Killburn_WLB_9vMq_fMa1.jpg'
            className='object-cover cursor-pointer'
            onClick={handleOpenModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <SoilDiversityModal
          title='little to no soil development'
          label='young and/or low weathering environment'
          features={['shallow', 'high rock content']}
          imageKitUrl='Soil_101/Diversity_-_Soil_Profiles/Entisol_profile_Killburn_WLB_N-7Dq2xnJ5F.jpg'
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
