import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import NutrientCyclingSvg from 'public/images/soil-101/chemistry/nutrient_cycling.svg';
import PlantNutrientSupplySvg from 'public/images/soil-101/chemistry/plant_nutrient_supply.svg';

import styles from '../soil-101.module.css';

export const NutrientCyclingSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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
    const nutrientUptake = sectionContainer.querySelector('#nutrient_cycling_svg__nut_cycling') as SVGGElement | null;
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
          nutrient cycling
        </Text>
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-50']}`}>
          some nutrients are more reliable than others, making it easier for plants to access and take theme up
        </Text>

        <NutrientCyclingSvg />
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
            <PlantNutrientSupplySvg />
          </div>
        </ReactModal>
      )}
    </>
  );
};
