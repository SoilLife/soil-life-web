import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon, Image } from 'design-system/atoms';

// assets
import NitrogenFixation1Svg from 'public/images/soil-101/biology/nitrogen_fixation_1.svg';
import NitrogenFixation2Svg from 'public/images/soil-101/biology/nitrogen_fixation_2.svg';
import NitrogenFixation3Svg from 'public/images/soil-101/biology/nitrogen_fixation_3.svg';
import RootNoduleSvg from 'public/images/soil-101/biology/root_nodule.svg';

import styles from '../soil-101.module.css';

export const NitrogenFixationSection = () => {
  useFullpageOverflow();
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');
  const [modalType, setModalType] = useState<null | 'infected' | 'root nodules'>(null);
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
    const infectedSvg = sectionContainer.querySelector('#nitrogen_fixation_2_svg__Layer_43') as SVGGElement | null;
    infectedSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    infectedSvg?.addEventListener('click', handleOpenModal('infected'));

    const rootNodulesSvg = sectionContainer.querySelector('#nitrogen_fixation_2_svg__Layer_45') as SVGGElement | null;
    rootNodulesSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    rootNodulesSvg?.addEventListener('click', handleOpenModal('root nodules'));

    return () => {
      infectedSvg?.removeEventListener('click', handleOpenModal('infected'));
      rootNodulesSvg?.removeEventListener('click', handleOpenModal('root nodules'));
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
        <Text type='h1' weight='light' size='4xl' color='teal' className={styles['heading']}>
          nitrogen fixation
        </Text>
        <NitrogenFixation1Svg />
        <NitrogenFixation2Svg />
        <NitrogenFixation3Svg />
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
          {modalType === 'infected' ? (
            <div>
              <Text type='h1' weight='bold' size='xl' color='pink' className='text-center mb-8'>
                "infected" root
              </Text>
              <Image url='Soil_101/Soil_Biology/UNADJUSTEDNONRAW_thumb_1be_kuHV5nM5s56_mKaTZ9IfFH.jpg' />
            </div>
          ) : (
            <div className='h-full grid place-items-center'>
              <RootNoduleSvg />
            </div>
          )}
        </ReactModal>
      )}
    </>
  );
};
