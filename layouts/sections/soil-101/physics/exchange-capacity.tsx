import { useRef, useEffect, useState, useCallback } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';

// assets
import ClaySvg from 'public/images/soil-101/physics/exchange_capacity_clay.svg';
import CationExchangeSvg from 'public/images/soil-101/physics/cation_exchange_capacity.svg';
import AnionExchangeSvg from 'public/images/soil-101/physics/anion_exchange_capacity.svg';
import SomSvg from 'public/images/soil-101/physics/som_cation_anion.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  'cation exchange': {
    title: 'cation exchange capacity',
    image: { type: 'svg', element: <CationExchangeSvg className='mx-auto sm:w-1/2' /> },
    description:
      'cations are positively charged ions. cation exchange capacity is the number of negatively charged sites (on clays or organic matter) that can hold onto these ions.',
    reverseContent: true,
  },
  'anion exchange': {
    title: 'soil & anion exchange capacity',
    image: { type: 'svg', element: <SomSvg className='mx-auto sm:w-1/2' /> },
    description:
      'soil organic matter is composed of a diversity of complex molecules that have both positively and negatively charged sites and can hold onto both negatively and positively charged ions!',
    reverseContent: true,
  },
  'metal oxide exchange': {
    title: 'anion exchange capacity',
    image: { type: 'svg', element: <AnionExchangeSvg className='mx-auto sm:w-1/2' /> },
    description:
      'anions are negatively charged ions. anion exchange capacity is the number of positively charged sites (on metal oxides or organic matter) that can hold onto these ions',
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

    const svgs: [string, typeof modalType][] = [['#exchange_capacity_clay_svg__Layer_2', 'cation exchange']];
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
        <Text type='h1' weight='bold' size='4xl' color='yellow' className={styles['heading']}>
          exchange capacity
        </Text>
        <div
          className={`flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-16 sm:space-y-0 sm:text-right ${styles['p-48']}`}
        >
          <ClaySvg className='sm:w-1/2' />
          <Text type='p' weight='thin' size='md' className='sm:w-1/2'>
            the large, negatively charged surface area of clays holds on to important plant nutrients, called cations,
            preserving them against losses to gravity.
          </Text>
        </div>
        <div
          className={`flex flex-col-reverse items-center justify-center sm:flex-row sm:space-x-16 ${styles['p-48']}`}
        >
          <Text type='p' weight='thin' size='md' className='sm:w-1/2'>
            som also has high surface area and charge, holding on to both positive and negatively charged ions
            (depending on pH) and contributing significantly to water holding capacity.
          </Text>
          <img
            src='/images/soil-101/physics/exchange_capacity_organic_matter.png'
            className='cursor-pointer hover:opacity-50 active:opacity-100 mb-4 sm:mb-0 sm:w-1/2'
            onClick={openModal('anion exchange')}
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-16 sm:space-y-0 sm:text-right ${styles['p-48']}`}
        >
          <img
            src='/images/soil-101/physics/exchange_capacity_metal_oxides.png'
            className='cursor-pointer hover:opacity-50 active:opacity-100 sm:w-1/2'
            onClick={openModal('metal oxide exchange')}
          />
          <Text type='p' weight='thin' size='md' className='sm:w-1/2'>
            iron/aluminum oxides carry a charge, as well, but generally a positive charge, providing anion exchange
            capacity (i.e. NO3-, BO3-, Cl-).
          </Text>
        </div>
      </div>
      {modalType && <GenericModal {...modalTypeMap[modalType]} onClose={handleCloseModal} />}
    </>
  );
};
