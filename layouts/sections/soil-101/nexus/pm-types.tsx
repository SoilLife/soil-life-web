import { useRef, useEffect, useState } from 'react';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import PmTypesSvg from 'public/images/soil-101/nexus/pm_types.svg';
import styles from '../soil-101.module.css';

const modalTypeMap = {
  'coarse-mafic': {
    title: 'coarse mafic',
    imageUrl: 'Soil_101/Soil_Nexus/coarse_mafic_Rv4nOXIvr.png',
    text: 'gabbro',
  },
  'coarse-intermediate': {
    title: 'coarse intermediate',
    imageUrl: 'Soil_101/Soil_Nexus/coarse_intermediate_Z-FsFw9N5.png',
    text: 'diorite',
  },
  'coarse-felsic': {
    title: 'coarse felsic',
    imageUrl: 'Soil_101/Soil_Nexus/coarse_felsic_V9NkPZRBq.png',
    text: 'granite',
  },
  'fine-mafic': {
    title: 'fine mafic',
    imageUrl: 'Soil_101/Soil_Nexus/fine_mafic_E-ZoDPW3t.png',
    text: 'basalt',
  },
  'fine-intermediate': {
    title: 'fine intermediate',
    imageUrl: 'Soil_101/Soil_Nexus/fine_intermediate_Lk-PMOrcJ.png',
    text: 'andesite',
  },
  'fine-felsic': {
    title: 'fine felsic',
    imageUrl: 'Soil_101/Soil_Nexus/fine_felsic_GB5ktT7qZPq.png',
    text: 'rhyolite',
  },
};

export const PmTypesSection = () => {
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

    const sectionContainer = sectionRef.current;

    const coarseMaficSvg = sectionContainer.querySelector('#pm_types_svg__Layer_31') as SVGGElement | null;
    coarseMaficSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    coarseMaficSvg?.addEventListener('click', handleOpenModal('coarse-mafic'));

    const coarseIntermediate = sectionContainer.querySelector('#pm_types_svg__Layer_33') as SVGGElement | null;
    coarseIntermediate?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    coarseIntermediate?.addEventListener('click', handleOpenModal('coarse-intermediate'));

    const coarseFelsic = sectionContainer.querySelector('#pm_types_svg__Layer_34') as SVGGElement | null;
    coarseFelsic?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    coarseFelsic?.addEventListener('click', handleOpenModal('coarse-felsic'));

    const fineMafic = sectionContainer.querySelector('#pm_types_svg__Layer_30') as SVGGElement | null;
    fineMafic?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    fineMafic?.addEventListener('click', handleOpenModal('fine-mafic'));

    const fineIntermediate = sectionContainer.querySelector('#pm_types_svg__Layer_29') as SVGGElement | null;
    fineIntermediate?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    fineIntermediate?.addEventListener('click', handleOpenModal('fine-intermediate'));

    const fineFelsic = sectionContainer.querySelector('#pm_types_svg__Layer_28') as SVGGElement | null;
    fineFelsic?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    fineFelsic?.addEventListener('click', handleOpenModal('fine-felsic'));

    return () => {
      coarseMaficSvg?.removeEventListener('click', handleOpenModal('coarse-mafic'));
      coarseIntermediate?.removeEventListener('click', handleOpenModal('coarse-intermediate'));
      coarseFelsic?.removeEventListener('click', handleOpenModal('coarse-felsic'));
      fineMafic?.removeEventListener('click', handleOpenModal('fine-mafic'));
      fineIntermediate?.removeEventListener('click', handleOpenModal('fine-intermediate'));
      fineFelsic?.removeEventListener('click', handleOpenModal('fine-felsic'));
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
        <div className='flex flex-col space-x-4 sm:flex-row sm:items-end sm:pl-20'>
          <Text type='p' weight='light' size='2xl' color='pink'>
            types
          </Text>
          <Text type='p' weight='thin' size='xs' className={styles['p-60']}>
            - rocks are composed of different types of minerals that weather at different rates
          </Text>
        </div>
        <PmTypesSvg className='mx-auto h-full max-h-[683px]' />
      </div>
      {modalType && (
        <FullImage
          image={{
            type: 'imagekit',
            url: modalTypeMap[modalType].imageUrl,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
