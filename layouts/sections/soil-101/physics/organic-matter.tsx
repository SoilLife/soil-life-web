import { useRef, useEffect, useState } from 'react';

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
    function handleOpenModal(type: typeof modalType) {
      return (_e: MouseEvent) => {
        const body = document.querySelector('body');
        if (body) {
          body.style.overflow = 'hidden';
        }
        setModalType(type);
      };
    }

    function handlePopup() {
      const soilOrganicMatterPopup = sectionContainer.querySelector(
        '#organic_matter_svg__Layer_34'
      ) as SVGGElement | null;
      soilOrganicMatterPopup?.classList?.toggle('hidden');
    }

    const sectionContainer = sectionRef.current;

    const microbialFilterSvg = sectionContainer.querySelector('#organic_matter_svg__Layer_1-2') as SVGGElement | null;
    microbialFilterSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    microbialFilterSvg?.addEventListener('click', handleOpenModal('filter'));

    const plantResiduesSvg = sectionContainer.querySelector('#organic_matter_svg__Layer_27') as SVGGElement | null;
    plantResiduesSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    plantResiduesSvg?.addEventListener('click', handleOpenModal('carbon inputs'));

    const plantRootsSvg = sectionContainer.querySelector('#organic_matter_svg__Layer_28') as SVGGElement | null;
    plantRootsSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    plantRootsSvg?.addEventListener('click', handleOpenModal('carbon inputs'));

    const animalResidueSvg = sectionContainer.querySelector('#organic_matter_svg__Layer_29') as SVGGElement | null;
    animalResidueSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    animalResidueSvg?.addEventListener('click', handleOpenModal('carbon inputs'));

    const soilOrganicMatterNode = sectionContainer.querySelector('#organic_matter_svg__Layer_25') as SVGAElement | null;
    const soilOrganicMatterPopup = sectionContainer.querySelector(
      '#organic_matter_svg__Layer_34'
    ) as SVGGElement | null;
    soilOrganicMatterPopup?.classList?.add('hidden');
    soilOrganicMatterNode?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    soilOrganicMatterNode?.addEventListener('click', handlePopup);

    return () => {
      microbialFilterSvg?.removeEventListener('click', handleOpenModal('filter'));
      plantResiduesSvg?.removeEventListener('click', handleOpenModal('carbon inputs'));
      plantRootsSvg?.removeEventListener('click', handleOpenModal('carbon inputs'));
      animalResidueSvg?.removeEventListener('click', handleOpenModal('carbon inputs'));
      soilOrganicMatterNode?.removeEventListener('click', handlePopup);
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
