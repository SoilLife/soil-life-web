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
import PlantGrowthPromoting from 'public/images/soil-101/biology/plant_growth_promoting.svg';

import styles from '../soil-101.module.css';

export const FungalNetworksSection = () => {
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
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='light' size='4xl' color='teal' className={styles['heading']}>
          fungal networks
        </Text>

        <MycelialSvg className='mx-auto max-h-[80vh]' />

        <MycorrhizalFungiSvg className='mx-auto max-h-[80vh]' />

        <Text type='p' weight='light' size='lg' className={`text-center ${styles['p-70']}`}>
          plants release{' '}
          <Text type='span' weight='bold' size='lg' color='blue'>
            compounds
          </Text>{' '}
          to attract{' '}
          <Text type='span' weight='bold' size='lg' color='pink'>
            mycorrhizal fungi
          </Text>
          , stimulating the growth of thread-like hyphae, which connect within or outside the roots, extending them{' '}
          <Text type='span' weight='bold' size='lg'>
            100-1000x
          </Text>
          . the root provides sugars to feed the fungus and in turn, its hyphae spread throughout the soil in search of
          water, nitrogen, phosphorus, and other nutrients.
        </Text>

        <div className='text-center pt-4'>
          <Text type='p' weight='light' size='lg' className={styles['p-70']}>
            microbes also release a variety of
          </Text>
          <Text type='p' weight='bold' size='lg' className={styles['p-70']}>
            plant growth promoting compounds
          </Text>
        </div>

        <PlantGrowthPromoting className='mx-auto' />
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
            <MycorrhizaSvg />
          </div>
        </ReactModal>
      )}
    </>
  );
};
