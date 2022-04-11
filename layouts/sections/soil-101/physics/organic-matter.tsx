import { useRef, useEffect, useState } from 'react';
import { useMedia, useOrientation } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import OrganicMatterSvg from 'public/images/soil-101/physics/organic_matter.svg';
import CarbonInputsSvg from 'public/images/soil-101/physics/carbon_inputs.svg';
import MicrobialFilterSvg from 'public/images/soil-101/physics/microbial_filter.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  'carbon inputs': {
    title: 'carbon-based inputs',
    image: <CarbonInputsSvg className='h-full w-full' />,
  },
  filter: {
    title: '',
    image: <MicrobialFilterSvg className='h-full w-full' />,
  },
};

export const OrganicMatterSection = () => {
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

    function handlePopup() {
      const soilOrganicMatterPopup = sectionContainer.querySelector(
        '#organic_matter_svg__Layer_34'
      ) as SVGGElement | null;
      soilOrganicMatterPopup?.classList?.toggle('hidden');
    }

    const sectionContainer = sectionRef.current;

    const microbialFilterSvg = sectionContainer.querySelector('#organic_matter_svg__Layer_1-2') as SVGGElement | null;
    microbialFilterSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    microbialFilterSvg?.addEventListener('click', handleOpenModal('filter'));

    const plantResiduesSvg = sectionContainer.querySelector('#organic_matter_svg__Layer_27') as SVGGElement | null;
    plantResiduesSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    plantResiduesSvg?.addEventListener('click', handleOpenModal('carbon inputs'));

    const plantRootsSvg = sectionContainer.querySelector('#organic_matter_svg__Layer_28') as SVGGElement | null;
    plantRootsSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    plantRootsSvg?.addEventListener('click', handleOpenModal('carbon inputs'));

    const animalResidueSvg = sectionContainer.querySelector('#organic_matter_svg__Layer_29') as SVGGElement | null;
    animalResidueSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    animalResidueSvg?.addEventListener('click', handleOpenModal('carbon inputs'));

    const soilOrganicMatterNode = sectionContainer.querySelector('#organic_matter_svg__Layer_25') as SVGAElement | null;
    const soilOrganicMatterPopup = sectionContainer.querySelector(
      '#organic_matter_svg__Layer_34'
    ) as SVGGElement | null;
    soilOrganicMatterPopup?.classList?.add('hidden');
    soilOrganicMatterNode?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    soilOrganicMatterNode?.addEventListener('click', handlePopup);

    return () => {
      microbialFilterSvg?.removeEventListener('click', handleOpenModal('filter'));
      plantResiduesSvg?.removeEventListener('click', handleOpenModal('carbon inputs'));
      plantRootsSvg?.removeEventListener('click', handleOpenModal('carbon inputs'));
      animalResidueSvg?.removeEventListener('click', handleOpenModal('carbon inputs'));
      soilOrganicMatterNode?.removeEventListener('click', handlePopup);
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
          organic matter
        </Text>
        <Text type='p' weight='thin' size='md' className={`text-center ${styles['p-48']}`}>
          supramolecular aggregation of plant, animal, and microbially-based compounds in varying stages of
          decomposition. stable organic matter can last in the soil for 100s to 1000s of years.
        </Text>
        <OrganicMatterSvg className='mx-auto max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)]' />
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
          {modalTypeMap[modalType].title && (
            <button className='absolute top-4 right-4' onClick={handleCloseModal}>
              <Icon icon='x' size={32} className='text-gray-500' />
            </button>
          )}
          <div className='space-y-8'>
            {modalTypeMap[modalType].title && (
              <Text type='h1' weight='light' size='xl' color='teal' className='text-center'>
                {modalTypeMap[modalType].title}
              </Text>
            )}
            {modalTypeMap[modalType].image}
          </div>
        </ReactModal>
      )}
    </>
  );
};
