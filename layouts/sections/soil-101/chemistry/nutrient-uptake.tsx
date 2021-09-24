import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import NutrientUptakeSvg from 'public/images/soil-101/chemistry/nutrient_uptake.svg';
import DissolutionChemistrySvg from 'public/images/soil-101/chemistry/dissolution_chemistry.svg';

export const NutrientUptakeSection = () => {
  useFullpageOverflow();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function handleOpenModal() {
      const body = document.querySelector('body');
      if (body) {
        body.style.overflow = 'hidden';
      }
      setIsModalOpen(true);
    }

    const sectionContainer = sectionRef.current;
    const nutrientUptake = sectionContainer.querySelector('#nutrient_uptake_svg__Layer_29') as SVGGElement | null;
    nutrientUptake?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    nutrientUptake?.addEventListener('click', handleOpenModal);

    return () => {
      nutrientUptake?.removeEventListener('click', handleOpenModal);
    };
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }
  return (
    <>
      <div ref={sectionRef} className='space-y-4 sm:space-y-8'>
        <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
          nutrient uptake
        </Text>
        <NutrientUptakeSvg />
        <Text type='p' weight='light' size='md'>
          building the compounds also requires water and nutrients. as roots grow, they take up nutrients dissolved in
          water, known as the "
          <Text type='span' weight='bold' size='md'>
            soil solution
          </Text>
          " or from particle surfaces.
        </Text>
      </div>
      {isModalOpen && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              height: isMobile ? '100%' : isLandscape ? '80vh' : '50vh',
              width: isMobile ? '100%' : isLandscape ? '50vw' : '80vw',
              left: isMobile ? 0 : '50%',
              top: isMobile ? '40px' : '50%',
              transform: isMobile ? undefined : 'translate(-50%, -50%)',
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <DissolutionChemistrySvg />
        </ReactModal>
      )}
    </>
  );
};
