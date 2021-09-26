import { useState } from 'react';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import { Text, Image } from 'design-system/atoms';
import { SoilDiversityModal } from 'design-system/components/soil-diversity-modal';

export const AndisolSection = () => {
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
          andisol
        </Text>
        <Text type='h1' weight='light' size='2xl' className='text-pink-500 underline text-center mx-auto mb-10'>
          the volcanic soil
        </Text>

        <div className='w-3/4 max-h-full mx-auto border-2 border-solid border-gray-500'>
          <Image
            url='Soil_101/Diversity_-_Soil_Profiles/Andisol_surface_WLB_bt0DvMLBvz3.jpg'
            className='object-cover cursor-pointer'
            onClick={handleOpenModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <SoilDiversityModal
          title='developed from volcanic ejecta; rapid transformation of ash to poorly crystallized minerals.'
          label='contains volcanic material'
          features={['highly fertile', '>5% soil organic matter', 'in surface 18-25cm']}
          imageKitUrl='Soil_101/Diversity_-_Soil_Profiles/Andisol_profile_WLB_EqR0ctPfe.jpg'
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
