import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import ClaySvg from 'public/images/soil-101/physics/exchange_capacity_clay.svg';
import OrganicMatterSvg from 'public/images/soil-101/physics/exchange_capacity_organic_matter.svg';
import MetalOxideSvg from 'public/images/soil-101/physics/exchange_capacity_metal_oxides.svg';

import CationExchangeSvg from 'public/images/soil-101/physics/cation_exchange_capacity.svg';
import AnionExchangeSvg from 'public/images/soil-101/physics/anion_exchange_capacity.svg';
import MetalOxideExchangeSvg from 'public/images/soil-101/physics/metal_oxides_exchange_capacity.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  'cation exchange': {
    title: 'cation exchange capacity',
    image: <CationExchangeSvg className='h-full w-full' />,
    text: 'cations are positively charged ions. cation exchange capacity is the number of negatively charged sites (on clays or organic matter) that can hold onto these ions.',
  },
  'anion exchange': {
    title: 'anion exchange capacity',
    image: <AnionExchangeSvg className='h-full w-full' />,
    text: 'anions are negatively charged ions. anion exchange capacity is the number of positively charged sites (on metal oxides or organic matter) that can hold onto these ions.',
  },
  'metal oxide exchange': {
    title: '',
    image: <MetalOxideExchangeSvg className='h-full w-full' />,
    text: '',
  },
};

export const ExchangeCapacitySection = () => {
  useFullpageOverflow();
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function handleOpenModal(type: typeof modalType) {
      return (_e: MouseEvent) => {
        const body = document.querySelector('body');
        if (body) {
          body.style.overflow = 'hidden';
        }
        setModalType(type);
      };
    }

    const sectionContainer = sectionRef.current;
    const cationExchangeSvg = sectionContainer.querySelector(
      '#exchange_capacity_clay_svg__Layer_59'
    ) as SVGGElement | null;
    cationExchangeSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    cationExchangeSvg?.addEventListener('click', handleOpenModal('cation exchange'));

    const anionExchangeSvg = sectionContainer.querySelector(
      '#exchange_capacity_organic_matter_svg__Layer_65'
    ) as SVGGElement | null;
    anionExchangeSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    anionExchangeSvg?.addEventListener('click', handleOpenModal('anion exchange'));

    const metalOxideSvg = sectionContainer.querySelector(
      '#exchange_capacity_metal_oxides_svg__Layer_72'
    ) as SVGGElement | null;
    metalOxideSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    metalOxideSvg?.addEventListener('click', handleOpenModal('metal oxide exchange'));

    return () => {
      cationExchangeSvg?.removeEventListener('click', handleOpenModal('cation exchange'));
      anionExchangeSvg?.removeEventListener('click', handleOpenModal('anion exchange'));
      metalOxideSvg?.removeEventListener('click', handleOpenModal('metal oxide exchange'));
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='bold' size='4xl' color='yellow' className={styles['heading']}>
          exchange capacity
        </Text>
        <div
          className={`flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-16 sm:space-y-0 sm:text-right ${styles['p-48']}`}
        >
          <ClaySvg className='sm:w-1/2' />
          <Text type='p' weight='thin' size='md' className='sm:w-1/2'>
            the large, negatively charged surface area of clays holds on to important plant nutrients, called cations,
            preserving them against losses to gravity.
          </Text>
        </div>
        <div
          className={`flex flex-col-reverse items-center justify-center sm:flex-row sm:space-x-16 ${styles['p-48']}`}
        >
          <Text type='p' weight='thin' size='md' className='sm:w-1/2'>
            som also has high surface area and charge, holding on to both positive and negatively charged ions
            (depending on pH) and contributing significantly to water holding capacity.
          </Text>
          <OrganicMatterSvg className='mb-4 sm:mb-0 sm:w-1/2' />
        </div>
        <div
          className={`flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-16 sm:space-y-0 sm:text-right ${styles['p-48']}`}
        >
          <MetalOxideSvg className='sm:w-1/2' />
          <Text type='p' weight='thin' size='md' className='sm:w-1/2'>
            iron/aluminum oxides carry a charge, as well, but generally a positive charge, providing anion exchange
            capacity (i.e. NO3-, BO3-, Cl-).
          </Text>
        </div>
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
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div className='space-y-4'>
            <Text type='h1' weight='thin' size='2xl' className='text-pink-500 text-center'>
              {modalTypeMap[modalType].title}
            </Text>

            <Text type='p' weight='light' size='md' className='text-center'>
              {modalTypeMap[modalType].text}
            </Text>

            {modalTypeMap[modalType].image}
          </div>
        </ReactModal>
      )}
    </>
  );
};
