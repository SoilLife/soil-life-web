import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import AggregationSvg from 'public/images/soil-101/physics/aggregation.svg';
import AggregatesSvg from 'public/images/soil-101/physics/whats_an_aggregate.svg';

import styles from '../soil-101.module.css';

export const AggregatesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  useFullpageOverflow();
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    const aggregatesSvg = sectionContainer.querySelector('#aggregation_svg__Layer_94') as SVGGElement | null;
    aggregatesSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    aggregatesSvg?.addEventListener('click', handleOpenModal);
    const aggregatesSvg2 = sectionContainer.querySelector('#aggregation_svg__Layer_91') as SVGGElement | null;
    aggregatesSvg2?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    aggregatesSvg2?.addEventListener('click', handleOpenModal);

    return () => {
      aggregatesSvg?.removeEventListener('click', handleOpenModal);
      aggregatesSvg2?.removeEventListener('click', handleOpenModal);
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
        <Text type='h1' weight='light' size='4xl' color='yellow' className={styles['heading']}>
          aggregates
        </Text>
        <AggregationSvg />
      </div>
      {isModalOpen && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              inset: isMobile ? '40px 0 0 0' : '10%',
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
            <AggregatesSvg className='max-h-[70vh]' />
          </div>
        </ReactModal>
      )}
    </>
  );
};
