import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import AnimalInputs1Svg from 'public/images/soil-101/chemistry/animal_inputs_1.svg';
import AnimalInputs2Svg from 'public/images/soil-101/chemistry/animal_inputs_2.svg';
import AnimalInputs3Svg from 'public/images/soil-101/chemistry/animal_inputs_3.svg';
import NitrificationSvg from 'public/images/soil-101/chemistry/nitrification.svg';

export const AnimalInputsSection = () => {
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
    const nutrientUptake = sectionContainer.querySelector('#animal_inputs_2_svg__Layer_81') as SVGGElement | null;
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
          animal inputs
        </Text>
        <AnimalInputs1Svg />
        <Text type='p' weight='light' size='md'>
          above ground, animal nibbles on plants. in response, plants change their root growth patterns and pump more
          carbon underground, in search of nutrients for regrowth. this herbivory has been shown to increase soil
          microbial biomass.
        </Text>
        <AnimalInputs2Svg />
        <Text type='p' weight='light' size='md'>
          urine and feces that grazers leave behind provides nutrient-rich food for microbes, enhancing nutrient
          cycling/availability. applications of these inputs have been found to increase soil organic matter.
        </Text>
        <AnimalInputs3Svg />
        <Text type='p' weight='light' size='md'>
          trampling from animal hooves helps break up the soil and vegetation. this increases water infiltration,
          promoting decomposition and seed germination, allowing the cycle to begin again!
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
            overlay: {
              zIndex: 2,
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div className='h-full grid place-items-center'>
            <NitrificationSvg />
          </div>
        </ReactModal>
      )}
    </>
  );
};
