import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import MetabolismSvg from 'public/images/soil-101/chemistry/metabolism.svg';
import ChemMetabolismSvg from 'public/images/soil-101/chemistry/chem_metabolism.svg';

import styles from '../soil-101.module.css';

export const MetabolismSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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
    const nutrientUptake = sectionContainer.querySelector('#metabolism_svg__Layer_76') as SVGGElement | null;
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
      <div
        ref={(el) => {
          props.assignRef(el);
          sectionRef.current = el;
        }}
        className={styles['section']}
      >
        <Text type='h1' weight='bold' size='4xl' color='orange' className={styles['heading']}>
          metabolism
        </Text>
        <MetabolismSvg />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          meanwhile, 30-60% of the plant's carbon is put into compounds that are being pumped underground (i.e. sugars,
          amino acids); feeding microbes in the soil.
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
            <ChemMetabolismSvg />
          </div>
        </ReactModal>
      )}
    </>
  );
};
