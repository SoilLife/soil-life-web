import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import CarbonicAcidSvg from 'public/images/soil-101/chemistry/carbonic_acid.svg';
import RootCloseUpSvg from 'public/images/soil-101/chemistry/root_closeup_carbonic_acid.svg';

import styles from '../soil-101.module.css';

export const CarbonicAcidSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal() {
      setIsModalOpen(true);
    }

    const sectionContainer = sectionRef.current;
    const carbonicAcidSvg = makeSvgInteractive({
      svg: sectionContainer.querySelector('#carbonic_acid_svg__Layer_49'),
      onClick: openModal,
      onKeydown: openModal,
      ariaLabel: 'open root close up modal',
    });

    return () => {
      carbonicAcidSvg?.unmount();
    };
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='regular' size='4xl' color='orange' className={styles['heading']}>
          carbonic acid
        </Text>
        <CarbonicAcidSvg className='mx-auto lg:max-w-[75vw]' />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          plants respire some carbon out of their roots as CO<sub>2</sub>, which forms carbonic
          acid in water and can lead to increased mineral weathering and nutrient availability.
        </Text>
      </div>
      {isModalOpen && (
        <FullImage
          image={{
            type: 'svg',
            element: <RootCloseUpSvg className='h-full w-full' />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
