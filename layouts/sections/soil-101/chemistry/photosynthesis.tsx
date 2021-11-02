import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import PhotosynthesisSvg from 'public/images/soil-101/chemistry/photosynthesis.svg';
import PhotosynthesisChemistrySvg from 'public/images/soil-101/chemistry/photosynthesis_chemistry.svg';

import styles from '../soil-101.module.css';

export const PhotosynthesisSection = () => {
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
    const photosynthesisSvg = sectionContainer.querySelector('#photosynthesis_svg__Layer_42') as SVGGElement | null;
    photosynthesisSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    photosynthesisSvg?.addEventListener('click', handleOpenModal);

    return () => {
      photosynthesisSvg?.removeEventListener('click', handleOpenModal);
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
        <Text type='h1' weight='light' size='4xl' color='orange' className={styles['heading']}>
          photosynthesis
        </Text>
        <PhotosynthesisSvg className='mx-auto max-h-[70vh]' />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          as shoots grow, they act like solar panels, taking in CO2 from the atmosphere which energy from the sun helps
          convert into the building blocks of life (carbohydrates, proteins, fats, etc).
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
            <PhotosynthesisChemistrySvg />
          </div>
        </ReactModal>
      )}
    </>
  );
};
