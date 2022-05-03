import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import PhotosynthesisSvg from 'public/images/soil-101/chemistry/photosynthesis.svg';
import PhotosynthesisChemistrySvg from 'public/images/soil-101/chemistry/photosynthesis_chemistry.svg';

import styles from '../soil-101.module.css';

export const PhotosynthesisSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    function openModal() {
      setIsModalOpen(true);
    }

    const sectionContainer = sectionRef.current;
    const photosynthesisSvg = makeSvgInteractive({
      svg: sectionContainer.querySelector('#photosynthesis_svg__Layer_2'),
      onClick: openModal,
      onKeydown: openModal,
      ariaLabel: 'open photosynthesis modal',
    });

    return () => {
      photosynthesisSvg?.unmount();
    };
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='light' size='4xl' color='orange' className={styles['heading']}>
          photosynthesis
        </Text>
        <PhotosynthesisSvg className='mx-auto lg:max-w-[75vw]' />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          as shoots grow, they act like solar panels, using energy from the sun to convert CO<sub>2</sub> from the
          atmosphere into the building blocks of life (carbohydrates, proteins, fats, etc).
        </Text>
      </div>
      {isModalOpen && (
        <FullImage
          image={{
            type: 'svg',
            element: <PhotosynthesisChemistrySvg className='h-full w-full' />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
