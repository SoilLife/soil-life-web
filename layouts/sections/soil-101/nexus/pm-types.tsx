import { useRef, useEffect, useState, forwardRef } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Image, Icon } from 'design-system/atoms';

const modalTypeMap = {
  'coarse-mafic': {
    title: 'coarse mafic',
    imageUrl: 'Soil_101/Soil_Nexus/coarse_mafic.jpeg',
    text: 'gabbro',
  },
  'coarse-intermediate': {
    title: 'coarse intermediate',
    imageUrl: 'Soil_101/Soil_Nexus/coarse_intermediate.jpeg',
    text: 'diorite',
  },
  'coarse-felsic': {
    title: 'coarse felsic',
    imageUrl: 'Soil_101/Soil_Nexus/coarse_felsic.jpg',
    text: 'granite',
  },
  'fine-mafic': {
    title: 'fine mafic',
    imageUrl: 'Soil_101/Soil_Nexus/fine_mafic.jpeg',
    text: 'basalt',
  },
  'fine-intermediate': {
    title: 'fine intermediate',
    imageUrl: 'Soil_101/Soil_Nexus/fine_intermediate.jpeg',
    text: 'andesite',
  },
  'fine-felsic': {
    title: 'fine felsic',
    imageUrl: 'Soil_101/Soil_Nexus/fine_felsic.jpeg',
    text: 'rhyolite',
  },
};

export const PmTypesSection = forwardRef<HTMLDivElement, {}>(function (_, _ref) {
  useFullpageOverflow();
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');
  const [svgTable, setSvgTable] = useState<null | string>(null);
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    async function fetchSvg() {
      const image = await fetch(
        'https://ik.imagekit.io/q9koofhilw/Soil_101/Soil_Nexus/pm_types_ptw5coXfG.svg?updatedAt=1629529482197'
      )
        .then((res) => {
          if (res.ok && res.status === 200) {
            return res.text();
          } else {
            throw Error('Something went wrong');
          }
        })
        .then((svg) => {
          setSvgTable(svg);
        });

      return image;
    }

    fetchSvg();
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !svgTable) return;
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

    const coarseMaficSvg = sectionContainer.querySelector('#Layer_69') as SVGGElement | null;
    coarseMaficSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    coarseMaficSvg?.addEventListener('click', handleOpenModal('coarse-mafic'));

    const coarseIntermediate = sectionContainer.querySelector('#Layer_68') as SVGGElement | null;
    coarseIntermediate?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    coarseIntermediate?.addEventListener('click', handleOpenModal('coarse-intermediate'));

    const coarseFelsic = sectionContainer.querySelector('#Layer_67') as SVGGElement | null;
    coarseFelsic?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    coarseFelsic?.addEventListener('click', handleOpenModal('coarse-felsic'));

    const fineMafic = sectionContainer.querySelector('#Layer_72') as SVGGElement | null;
    fineMafic?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    fineMafic?.addEventListener('click', handleOpenModal('fine-mafic'));

    const fineIntermediate = sectionContainer.querySelector('#Layer_71') as SVGGElement | null;
    fineIntermediate?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    fineIntermediate?.addEventListener('click', handleOpenModal('fine-intermediate'));

    const fineFelsic = sectionContainer.querySelector('#Layer_70') as SVGGElement | null;
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
  }, [svgTable]);

  function handleCloseModal() {
    setModalType(null);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div ref={sectionRef}>
        <div className='space-y-8'>
          <div className='flex items-end space-x-4 sm:pl-20'>
            <Text type='p' weight='light' size='lg' className='text-pink-500'>
              types
            </Text>
            <Text type='p' weight='thin' size='xs'>
              - rocks are composed of different types of minerals that weather at different rates
            </Text>
          </div>
          {/* {svgTable && <div dangerouslySetInnerHTML={{ __html: svgTable }} />} */}
        </div>
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
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div className='space-y-4'>
            <Text type='h1' weight='bold' size='2xl' className='text-pink-500 text-center'>
              {modalTypeMap[modalType].title}
            </Text>

            <Image url={modalTypeMap[modalType].imageUrl} className='object-cover mx-auto' />
            <Text type='p' weight='light' size='2xs' className='text-center'>
              {modalTypeMap[modalType].text}
            </Text>
          </div>
        </ReactModal>
      )}
    </>
  );
});
