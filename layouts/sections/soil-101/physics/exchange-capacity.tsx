import { useRef, useEffect, useState, forwardRef } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import ClaySvg from 'public/images/soil-101/physics/exchange_capacity_clay.svg';
import OrganicMatterSvg from 'public/images/soil-101/physics/exchange_capacity_organic_matter.svg';
import MetalOxideSvg from 'public/images/soil-101/physics/exchange_capacity_metal_oxide.svg';

import CationExchangeSvg from 'public/images/soil-101/physics/cation_exchange_capacity.svg';
import AnionExchangeSvg from 'public/images/soil-101/physics/anion_exchange_capacity.svg';

const modalTypeMap = {
  'cation exchange': {
    title: 'carbon-based inputs',
    image: <CationExchangeSvg className='h-full w-full' />,
    text: 'cations are positively charged ions. cation exchange capacity is the number of negatively charged sites (on clays or organic matter) that can hold onto these ions.',
  },
  'anion exchange': {
    title: 'microbial filters',
    image: <AnionExchangeSvg className='h-full w-full' />,
    text: 'anions are negatively charged ions. anion exchange capacity is the number of positively charged sites (on metal oxides or organic matter) that can hold onto these ions.',
  },
  'metal oxide exchange': {
    title: 'metal oxide exchange',
    image: <CationExchangeSvg className='h-full w-full' />,
    text: 'iron, aluminum, and manganese',
  },
};

export const ExchangeCapacitySection = forwardRef<HTMLDivElement, {}>((_, _ref) => {
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

    return () => {
      cationExchangeSvg?.removeEventListener('click', handleOpenModal('cation exchange'));
      anionExchangeSvg?.removeEventListener('click', handleOpenModal('anion exchange'));
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
      <div ref={sectionRef}>
        <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-20'>
          exchange capacity
        </Text>
        <div className='space-y-4 sm:space-y-8'>
          <ClaySvg />
          <OrganicMatterSvg />
          <MetalOxideSvg />
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
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div className='space-y-4'>
            <Text type='h1' weight='bold' size='2xl' className='text-pink-500 text-center'>
              {modalTypeMap[modalType].title}
            </Text>

            <Text type='p' weight='light' size='2xs' className='text-center'>
              {modalTypeMap[modalType].text}
            </Text>

            {modalTypeMap[modalType].image}
          </div>
        </ReactModal>
      )}
    </>
  );
});
