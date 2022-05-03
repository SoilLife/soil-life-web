import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import RootIonExchangeSvg from 'public/images/soil-101/chemistry/root_ion.svg';
import RootCloseUpSvg from 'public/images/soil-101/chemistry/root_closeup_proton.svg';

import styles from '../soil-101.module.css';

export const RootIonExchangeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal() {
      setIsModalOpen(true);
    }

    const sectionContainer = sectionRef.current;
    const rootIonSvg = makeSvgInteractive({
      svg: sectionContainer.querySelector('#root_ion_svg__Layer_53'),
      onClick: openModal,
      onKeydown: openModal,
      ariaLabel: 'open root close up proton svg',
    });

    return () => {
      rootIonSvg?.unmount();
    };
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='regular' size='4xl' color='orange' className={styles['heading']}>
          root ion exchange
        </Text>
        <RootIonExchangeSvg className='mx-auto lg:max-w-[75%]' />
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-48']}`}>
          plant roots also release H+, or protons, which can replace other positively charged ions (cations) on clays,
          making them available for plant uptake.
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
