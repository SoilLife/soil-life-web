import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import NutrientAvailabilitySvg from 'public/images/soil-101/chemistry/nutrient_availability.svg';
import ClayPhSvg from 'public/images/soil-101/chemistry/clay_pH.svg';
import OxidesPhSvg from 'public/images/soil-101/chemistry/oxides_pH.svg';
import SomPhSvg from 'public/images/soil-101/chemistry/som_pH.svg';
import LeftArrow from 'public/images/left_arrow_pink_thick.svg';
import RightArrow from 'public/images/right_arrow_pink_thick.svg';

const modalTypeMap = {
  clay: <ClayPhSvg className='h-full w-full' />,
  oxide: <OxidesPhSvg className='h-full w-full' />,
  som: <SomPhSvg className='h-full w-full' />,
};

export const NutrientAvailabilitySection = () => {
  useFullpageOverflow();
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
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
      setModalType('clay');
    }

    const sectionContainer = sectionRef.current;
    const nutrientAvailabilitySvg = sectionContainer.querySelector(
      '#nutrient_availability_svg__pH'
    ) as SVGGElement | null;
    nutrientAvailabilitySvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    nutrientAvailabilitySvg?.addEventListener('click', handleOpenModal);

    return () => {
      nutrientAvailabilitySvg?.removeEventListener('click', handleOpenModal);
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }

  function handlePreviousProcessClick() {
    switch (modalType) {
      case 'clay':
        setModalType('som');
        break;
      case 'oxide':
        setModalType('clay');
        break;
      case 'som':
        setModalType('oxide');
        break;
    }
  }

  function handleNextProcessClick() {
    switch (modalType) {
      case 'clay':
        setModalType('oxide');
        break;
      case 'oxide':
        setModalType('som');
        break;
      case 'som':
        setModalType('clay');
        break;
    }
  }

  return (
    <>
      <div ref={sectionRef} className='space-y-4 sm:space-y-8'>
        <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
          ph & nutrient availability
        </Text>
        <Text type='p' weight='light' size='md'>
          ph determines the amount and type of charge on soil minerals and organic matter (the exchange complex), as
          well as the concentration of protons or hydroxyls that can kick plant nutrients off the complex
        </Text>
        <NutrientAvailabilitySvg />
      </div>
      {modalType && (
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
          <div className='h-full'>
            <button className='absolute top-4 right-4' onClick={handleCloseModal}>
              <Icon icon='x' size={32} className='text-gray-500' />
            </button>
            <div className='relative grid place-items-center h-full px-8 sm:px-10'>
              {modalTypeMap[modalType]}
              <LeftArrow
                className='absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer'
                height={40}
                onClick={handlePreviousProcessClick}
              />
              <RightArrow
                className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
                height={40}
                onClick={handleNextProcessClick}
              />
            </div>
          </div>
        </ReactModal>
      )}
    </>
  );
};
