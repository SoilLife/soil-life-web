import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Image, Icon } from 'design-system/atoms';

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
  useFullpageOverflow();
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');
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
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              height: isMobile ? '100%' : isLandscape ? '80vh' : '50vh',
              width: isMobile ? '100%' : isLandscape ? '50vw' : '80vw',
              left: isMobile ? 0 : '50%',
              top: isMobile ? '40px' : '50%',
              transform: isMobile ? undefined : 'translate(-50%, -50%)',
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
          <div className='h-full flex items-center justify-center'>
            <Image url={modalTypeMap[modalType].imageUrl} className='object-contain mx-auto max-h-[508px]' />
            {/* <div className='space-y-2 text-center'>
              <Text type='h1' weight='bold' size='4xl' color='pink'>
                {modalTypeMap[modalType].title}
              </Text>
              <Text type='p' weight='light' size='xl'>
                {modalTypeMap[modalType].text}
              </Text>
            </div> */}
          </div>
        </ReactModal>
      )}
    </>
  );
};
