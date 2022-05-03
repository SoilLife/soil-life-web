import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import NutrientCyclingSvg from 'public/images/soil-101/chemistry/nutrient_cycling.svg';
import PlantNutrientSupplySvg from 'public/images/soil-101/chemistry/plant_nutrient_supply.svg';

import styles from '../soil-101.module.css';

export const NutrientCyclingSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    function openModal() {
      setIsModalOpen(true);
    }
    const sectionContainer = sectionRef.current;
    const nutrientUptake = makeSvgInteractive({
      svg: sectionContainer.querySelector('#nutrient_cycling_svg__nut_cycling'),
      onClick: openModal,
      onKeydown: openModal,
      ariaLabel: 'open plant nutrient supply modal',
    });

    return () => {
      nutrientUptake?.unmount();
    };
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
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
        <Text
          id='nutrient-cycling'
          type='h1'
          weight='bold'
          size='4xl'
          color='orange'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          nutrient cycling
        </Text>
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-50']}`}>
          some nutrients are more mobile than others, making it easier for plants to access and take them up
        </Text>

        <NutrientCyclingSvg className='mx-auto lg:max-w-[75vw]' />
      </div>
      {isModalOpen && (
        <FullImage
          image={{
            type: 'svg',
            element: <PlantNutrientSupplySvg className='h-full w-full' />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
