import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import OrganicMatterSvg from 'public/images/soil-101/physics/organic_matter.svg';
import CarbonInputsSvg from 'public/images/soil-101/physics/carbon_inputs.svg';
import MicrobialFilterSvg from 'public/images/soil-101/physics/microbial_filter.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  'carbon inputs': {
    title: 'carbon-based inputs',
    image: <CarbonInputsSvg className='max-h-full' />,
  },
  filter: {
    title: 'microbial filter',
    image: <MicrobialFilterSvg className='max-h-full' />,
  },
};

export const OrganicMatterSection = () => {
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    function showPopup(svg: SVGGElement | null) {
      return () => {
        if (!svg) return;
        svg.classList.toggle('hidden');
      };
    }

    const modalSvgs: [string, typeof modalType][] = [
      ['#organic_matter_svg__Layer_1-2', 'filter'],
      ['#organic_matter_svg__Layer_27', 'carbon inputs'],
      ['#organic_matter_svg__Layer_28', 'carbon inputs'],
      ['#organic_matter_svg__Layer_29', 'carbon inputs'],
    ];

    const sectionContainer = sectionRef.current;

    const interactiveModalSvgs = modalSvgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    const soilOrganicMatterPopup = sectionContainer.querySelector(
      '#organic_matter_svg__Layer_34'
    ) as SVGGElement | null;
    soilOrganicMatterPopup?.classList?.add('hidden');

    const soilOrganicMatterSvg = makeSvgInteractive({
      svg: sectionContainer.querySelector('#organic_matter_svg__Layer_25'),
      onClick: showPopup(soilOrganicMatterPopup),
      onKeydown: showPopup(soilOrganicMatterPopup),
      ariaLabel: 'show soil organic matter popup',
    });

    return () => {
      interactiveModalSvgs.forEach((svg) => svg?.unmount());
      soilOrganicMatterSvg?.unmount();
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='bold' size='4xl' color='yellow' className={styles['heading']}>
          organic matter
        </Text>
        <Text type='p' weight='thin' size='md' className={`text-center ${styles['p-48']}`}>
          supramolecular aggregation of plant, animal, and microbially-based compounds in varying stages of
          decomposition. stable organic matter can last in the soil for 100s to 1000s of years.
        </Text>
        <OrganicMatterSvg className='mx-auto max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)]' />
      </div>
      {modalType && (
        <FullImage
          image={{
            type: 'svg',
            element: modalTypeMap[modalType].image,
          }}
          title={modalTypeMap[modalType].title}
          titleColor='teal'
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
