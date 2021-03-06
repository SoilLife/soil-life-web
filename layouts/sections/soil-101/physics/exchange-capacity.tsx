import { useRef, useEffect, useState, useCallback } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';

// assets
import SomSvg from 'public/images/soil-101/physics/som_cation_anion.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  'anion exchange': {
    title: 'cation & anion exchange capacity',
    image: { type: 'svg', element: <SomSvg className='mx-auto sm:w-1/2' /> },
    description:
      'soil organic matter is composed of a diversity of complex organic molecules that have both positively and negatively charged sites (called functional groups) and can hold onto both negatively and positively charged ions!',
    reverseContent: true,
  },
} as const;

export const ExchangeCapacitySection = () => {
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  const openModal = useCallback(function (type: typeof modalType) {
    return () => {
      setModalType(type);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const svgs: [string, typeof modalType][] = [['#exchange_capacity_clay_svg__Layer_2', 'anion exchange']];
    const sectionContainer = sectionRef.current;

    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
  }, [openModal]);

  function handleCloseModal() {
    setModalType(null);
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='light' size='4xl' color='yellow' className={styles['heading']}>
          exchange capacity
        </Text>
        <div
          className={`flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-16 sm:space-y-0 sm:text-right ${styles['p-48']}`}
        >
          <img
            src='/images/soil-101/physics/exchange_capacity_organic_matter.png'
            className='cursor-pointer hover:opacity-50 active:opacity-100 sm:w-1/2'
            onClick={openModal('anion exchange')}
          />
          <Text type='p' weight='thin' size='md' className='sm:w-1/2'>
            som also has large surface area and charge (varies with pH), contributing significantly to a soil's water and nutrient-holding capacity.
          </Text>
        </div>
      </div>
      {modalType && <GenericModal {...modalTypeMap[modalType]} onClose={handleCloseModal} />}
    </>
  );
};
