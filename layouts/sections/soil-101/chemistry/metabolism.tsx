import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import MetabolismSvg from 'public/images/soil-101/chemistry/metabolism.svg';
import ChemMetabolismSvg from 'public/images/soil-101/chemistry/chem_metabolism.svg';

import styles from '../soil-101.module.css';

export const MetabolismSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal() {
      setIsModalOpen(true);
    }

    const sectionContainer = sectionRef.current;
    const nutrientUptake = makeSvgInteractive({
      svg: sectionContainer.querySelector('#metabolism_svg__Layer_76'),
      onClick: openModal,
      onKeydown: openModal,
      ariaLabel: 'open metabolism chemistry modal',
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
          id='metabolism'
          type='h1'
          weight='bold'
          size='4xl'
          color='orange'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          metabolism
        </Text>
        <MetabolismSvg className='mx-auto lg:max-w-[75vw]' />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          meanwhile, 30-60% of the plant's carbon is put into compounds that are being pumped underground (i.e. sugars,
          amino acids); feeding microbes in the soil.
        </Text>
      </div>
      {isModalOpen && (
        <FullImage
          image={{
            type: 'svg',
            element: <ChemMetabolismSvg className='h-full w-full' />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
