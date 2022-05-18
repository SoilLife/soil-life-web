import { useRef, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import ReactModal from 'react-modal';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import NutrientAvailabilitySvg from 'public/images/soil-101/chemistry/nutrient_availability.svg';
import ClayPhSvg from 'public/images/soil-101/chemistry/clay_pH.svg';
import OxidesPhSvg from 'public/images/soil-101/chemistry/oxides_pH.svg';
import SomPhSvg from 'public/images/soil-101/chemistry/som_pH.svg';
import AlumPhSvg from 'public/images/soil-101/chemistry/aluminum_oxide.svg';
import PhosphateSvg from 'public/images/soil-101/chemistry/phosphate_retention.svg';

import LeftArrow from 'public/images/left_arrow_pink_thick.svg';
import RightArrow from 'public/images/right_arrow_pink_thick.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  clays: <ClayPhSvg className='h-full w-full' />,
  'iron oxides': <OxidesPhSvg className='h-full w-full' />,
  'organic matter': <SomPhSvg className='h-full w-full' />,
  'aluminum oxides': <AlumPhSvg className='h-full w-full' />,
  'phosphate retention': <PhosphateSvg className='h-full w-full' />,
};

const modalTypesArray = ['clays', 'iron oxides', 'organic matter', 'aluminum oxides', 'phosphate retention'] as const;

export const NutrientAvailabilitySection = () => {
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const isMobile = useMedia('(max-width: 640px)');
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal() {
      setModalType('clays');
    }

    const sectionContainer = sectionRef.current;
    const nutrientAvailabilitySvg = makeSvgInteractive({
      svg: sectionContainer.querySelector('#nutrient_availability_svg__pH'),
      onClick: openModal,
      onKeydown: openModal,
      ariaLabel: 'open nutrient availability modal',
    });
    return () => {
      nutrientAvailabilitySvg?.unmount();
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
  }

  function handlePreviousClick() {
    setModalType((prevType) => {
      if (prevType) {
        const index = modalTypesArray.indexOf(prevType);
        const type = index - 1 < 0 ? 'phosphate retention' : modalTypesArray[index - 1];
        return type ?? null;
      } else return prevType;
    });
  }

  function handleNextClick() {
    setModalType((prevType) => {
      if (prevType) {
        const index = modalTypesArray.indexOf(prevType);
        const type = index + 1 === modalTypesArray.length ? 'clays' : modalTypesArray[index + 1];
        return type ?? null;
      } else return prevType;
    });
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='light' size='3xl' color='orange' className={styles['heading']}>
          ph & nutrient availability
        </Text>
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          ph determines the amount and type of charge on soil minerals and organic matter (the exchange complex), as
          well as the amount of protons or hydroxyls in the soil solution; driving overall nutrient availability.
        </Text>
        <NutrientAvailabilitySvg className='mx-auto lg:max-w-[75vw]' />
      </div>
      {modalType && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          preventScroll
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
              <button className='absolute top-1/2 left-4 transform -translate-y-1/2' onClick={handlePreviousClick}>
                <LeftArrow height={40} />
              </button>
              <button className='absolute top-1/2 right-4 transform -translate-y-1/2 ' onClick={handleNextClick}>
                <RightArrow height={40} />
              </button>
            </div>
          </div>
        </ReactModal>
      )}
    </>
  );
};
