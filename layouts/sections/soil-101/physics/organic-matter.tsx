import { useRef, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import OrganicMatterSvg from 'public/images/soil-101/physics/organic_matter.svg';
import CarbonInputsSvg from 'public/images/soil-101/physics/carbon_inputs.svg';
import MicrobialFilterSvg from 'public/images/soil-101/physics/microbial_filter.svg';

const modalTypeMap = {
  'carbon inputs': {
    title: 'carbon-based inputs',
    image: <CarbonInputsSvg className='h-full w-full' />,
  },
  filter: {
    title: 'microbial filters',
    image: <MicrobialFilterSvg className='h-full w-full' />,
  },
};

export const OrganicMatterSection = () => {
  useFullpageOverflow();
  const isMobile = useMedia('(max-width: 640px)');
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
    const carbonInputsSvg = sectionContainer.querySelector('#soil_texture_svg__Layer_19') as SVGGElement | null;
    carbonInputsSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    carbonInputsSvg?.addEventListener('click', handleOpenModal('carbon inputs'));

    const microbialFilterSvg = sectionContainer.querySelector('#organic_matter_svg__Layer_1-2') as SVGGElement | null;
    microbialFilterSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    microbialFilterSvg?.addEventListener('click', handleOpenModal('filter'));

    return () => {
      carbonInputsSvg?.removeEventListener('click', handleOpenModal('carbon inputs'));
      microbialFilterSvg?.removeEventListener('click', handleOpenModal('filter'));
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
      <div ref={sectionRef}>
        <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-10'>
          organic matter
        </Text>
        <Text type='p' weight='light' size='md'>
          supramolecular aggregation of plant, animal, and microbially-based compounds in varying stages of
          decomposition. stable organic matter can last in the soil for 100s to 1000s of years.
        </Text>
        <OrganicMatterSvg />
      </div>
      {modalType && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              inset: isMobile ? '40px 0 0 0' : '64px 0 0 0',
              height: '100%',
              width: '100%',
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
            {modalTypeMap[modalType].image}
          </div>
        </ReactModal>
      )}
    </>
  );
};
