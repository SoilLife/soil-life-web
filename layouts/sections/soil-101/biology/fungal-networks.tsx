import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import MycelialSvg from 'public/images/soil-101/biology/mycelial.svg';
import MycorrhizalFungiSvg from 'public/images/soil-101/biology/mycorrhizal_fungi.svg';
import MycorrhizaSvg from 'public/images/soil-101/biology/mycorrhiza.svg';

export const FungalNetworksSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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
    const fungiSvg = sectionContainer.querySelector('#mycorrhizal_fungi_svg__Mycorrhizal_Fungi') as SVGGElement | null;
    fungiSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    fungiSvg?.addEventListener('click', handleOpenModal);

    return () => {
      fungiSvg?.removeEventListener('click', handleOpenModal);
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
      >
        <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
          fungal networks
        </Text>

        <MycelialSvg className='mb-20' />

        <MycorrhizalFungiSvg className='mb-20' />

        <Text type='p' weight='light' size='md'>
          plants release{' '}
          <Text type='span' weight='light' size='md' className='text-blue-500'>
            compounds
          </Text>{' '}
          to attract{' '}
          <Text type='span' weight='light' size='md' className='text-pink-500'>
            mycorrhizal fungi
          </Text>
          , stimulating the growth of thread-like hyphae, which connect within or outside the roots, extending them
          100-1000x. the root provides sugars to feed the fungus and in turn, its hyphae spread throughout the soil in
          search of water, nitrogen, phosphorus, and other nutrients.
        </Text>
      </div>
      {isModalOpen && (
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
          <MycorrhizaSvg />
        </ReactModal>
      )}
    </>
  );
};
