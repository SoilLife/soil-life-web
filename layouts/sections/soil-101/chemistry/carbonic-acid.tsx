import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import CarbonicAcidSvg from 'public/images/soil-101/chemistry/carbonic_acid.svg';
import RootCloseUpSvg from 'public/images/soil-101/chemistry/root_closeup_carbonic_acid.svg';

import styles from '../soil-101.module.css';

export const CarbonicAcidSection = () => {
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
    const carbonicAcidSvg = sectionContainer.querySelector('#carbonic_acid_svg__Layer_49') as SVGGElement | null;
    carbonicAcidSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    carbonicAcidSvg?.addEventListener('click', handleOpenModal);

    return () => {
      carbonicAcidSvg?.removeEventListener('click', handleOpenModal);
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
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='regular' size='4xl' color='orange' className={styles['heading']}>
          carbonic acid
        </Text>
        <CarbonicAcidSvg />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          plant roots respire some carbon as CO2 out of their roots. leading to production of carbonic acid and
          increased mineral weathering.
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
          <div className='h-full w-full grid place-items-center'>
            <RootCloseUpSvg />
          </div>
        </ReactModal>
      )}
    </>
  );
};
