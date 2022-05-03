import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import AnimalInputs1Svg from 'public/images/soil-101/chemistry/animal_inputs_1.svg';
import AnimalInputs2Svg from 'public/images/soil-101/chemistry/animal_inputs_2.svg';
import AnimalInputs3Svg from 'public/images/soil-101/chemistry/animal_inputs_3.svg';
import NitrificationSvg from 'public/images/soil-101/chemistry/nitrification.svg';

import styles from '../soil-101.module.css';

export const AnimalInputsSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal() {
      setIsModalOpen(true);
    }

    const sectionContainer = sectionRef.current;
    const nutrientUptake = makeSvgInteractive({
      svg: sectionContainer.querySelector('#animal_inputs_2_svg__b'),
      onClick: openModal,
      onKeydown: openModal,
      ariaLabel: 'open nitrification modal',
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
          id='animal-inputs'
          type='h1'
          weight='bold'
          size='4xl'
          color='orange'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          animal inputs
        </Text>
        <AnimalInputs1Svg className='mx-auto lg:max-w-[75vw]' />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          above ground, animals nibble on plants. in response, plants change their root growth patterns and pump more
          carbon underground, in search of nutrients for regrowth. this herbivory has been shown to increase soil
          microbial biomass and activity.
        </Text>
        <AnimalInputs2Svg className='mx-auto lg:max-w-[75vw]' />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          urine and feces that grazers leave behind provides nutrient-rich food for microbes, enhancing nutrient
          cycling/availability. applications of these inputs have been found to increase soil organic matter.
        </Text>
        <AnimalInputs3Svg className='mx-auto lg:max-w-[75vw]' />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          trampling from animal hooves helps break up the soil and vegetation. this increases water infiltration,
          promoting decomposition and seed germination, allowing the cycle to begin again!
        </Text>
      </div>
      {isModalOpen && (
        <FullImage
          image={{
            type: 'svg',
            element: <NitrificationSvg className='h-full w-full' />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
