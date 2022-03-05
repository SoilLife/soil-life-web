import { useRef, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
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

import styles from '../soil-101.module.css';

const modalTypeMap = {
  clays: <ClayPhSvg className='h-full w-full' />,
  'metal oxides': <OxidesPhSvg className='h-full w-full' />,
  SOM: <SomPhSvg className='h-full w-full' />,
};

export const NutrientAvailabilitySection = () => {
  useFullpageOverflow();
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const isMobile = useMedia('(max-width: 640px)');
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function handleOpenModal() {
      const body = document.querySelector('body');
      if (body) {
        body.style.overflow = 'hidden';
      }
      setModalType('clays');
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
      case 'clays':
        setModalType('SOM');
        break;
      case 'metal oxides':
        setModalType('clays');
        break;
      case 'SOM':
        setModalType('metal oxides');
        break;
    }
  }

  function handleNextProcessClick() {
    switch (modalType) {
      case 'clays':
        setModalType('metal oxides');
        break;
      case 'metal oxides':
        setModalType('SOM');
        break;
      case 'SOM':
        setModalType('clays');
        break;
    }
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='light' size='3xl' color='orange' className={styles['heading']}>
          ph & nutrient availability
        </Text>
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          ph determines the amount and type of charge on soil minerals and organic matter (the exchange complex), as
          well as the amount of protons or hydroxyls in the soil solution, which can kick plant nutrients off the
          complex.
        </Text>
        <NutrientAvailabilitySvg className='mx-auto max-h-[50vh]' />
      </div>
      {modalType && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              inset: isMobile ? '40px 0 0 0' : '10% 20%',
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
              <Text type='h2' size='3xl' weight='bold' className='mb-4'>
                {modalType}
              </Text>
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
