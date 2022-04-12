import { useRef, useEffect, useState } from 'react';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import AggregationSvg from 'public/images/soil-101/physics/aggregation.svg';
import AggregatesSvg from 'public/images/soil-101/physics/whats_an_aggregate.svg';

import styles from '../soil-101.module.css';

export const AggregatesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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
        <FullImage
          image={{
            type: 'svg',
            element: <AggregatesSvg className='max-h-full' />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
