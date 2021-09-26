import { useState } from 'react';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import { Text, Image } from 'design-system/atoms';
import { SoilDiversityModal } from 'design-system/components/soil-diversity-modal';

export const HistosolSection = () => {
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
          histosol
        </Text>
        <Text type='h1' weight='light' size='2xl' className='text-pink-500 underline text-center mx-auto mb-10'>
          the wetland soil
        </Text>

        <div className='w-3/4 max-h-full mx-auto border-2 border-solid border-gray-500'>
          <Image
            url='Soil_101/Diversity_-_Soil_Profiles/histosol_surface_KtsPucsZx.png'
            className='object-cover cursor-pointer'
            onClick={handleOpenModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <SoilDiversityModal
          title='formed from organic parent material; minimum 12-18% organic in the top 40 cm'
          label='known as peat or muck'
          features={['low pH', 'low bulk density', 'high infiltration rates', 'poor/slow drainage']}
          imageKitUrl='Soil_101/Diversity_-_Soil_Profiles/histosol_profile.jpg'
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
