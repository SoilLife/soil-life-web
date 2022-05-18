import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import NutrientUptakeSvg from 'public/images/soil-101/chemistry/nutrient_uptake.svg';
import DissolutionChemistrySvg from 'public/images/soil-101/chemistry/dissolution_chemistry.svg';

import styles from '../soil-101.module.css';

export const NutrientUptakeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal() {
      setIsModalOpen(true);
    }

    const sectionContainer = sectionRef.current;
    const nutrientUptake = makeSvgInteractive({
      svg: sectionContainer.querySelector('#nutrient_uptake_svg__Layer_29'),
      onClick: openModal,
      onKeydown: openModal,
      ariaLabel: 'open dissolution modal',
    });

    return () => {
      nutrientUptake?.unmount();
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
          nutrient uptake
        </Text>
        <NutrientUptakeSvg className='mx-auto lg:max-w-[75vw]' />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          building these compounds also requires water and nutrients. as roots grow, they take up nutrients dissolved in
          water{' '}
          <Text type='span' weight='bold' size='md'>
            (the "soil solution")
          </Text>{' '}
          or from the surfaces of soil particles.
        </Text>
      </div>
      {isModalOpen && (
        <FullImage
          image={{
            type: 'svg',
            element: <DissolutionChemistrySvg className='h-full w-full' />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
