import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Image, Icon } from 'design-system/atoms';

// assets
import SoilTextureSvg from 'public/images/soil-101/physics/soil_texture.svg';

const modalTypeMap = {
  sand: {
    title: 'sand',
    imageUrl: 'Soil_101/Soil_Physics/sand.jpg',
    text: 'the largest and least weathered particles. sand increases infiltration, but has little ability to hold on to water or nutrients',
  },
  silt: {
    title: 'silt',
    imageUrl: 'Soil_101/Soil_Physics/silt.jpg',
    text: 'silt is easily transported by water and wind and gives glacial lakes their beautiful blue-green color! seasonal flood deposits provided soil fertility for many a civilization.',
  },
  clay: {
    title: 'clay',
    imageUrl: 'Soil_101/Soil_Physics/clay.jpg',
    text: 'sticky particles with high surface area and an electric charge that increase a soil’s water, nutrient, and carbon storage capacity! too much clay can lead to compaction.',
  },
};

export const TextureSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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
    const sandSvg = sectionContainer.querySelector('#soil_texture_svg__Layer_19') as SVGGElement | null;
    sandSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    sandSvg?.addEventListener('click', handleOpenModal('sand'));

    const siltSvg = sectionContainer.querySelector('#soil_texture_svg__Layer_17') as SVGGElement | null;
    siltSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    siltSvg?.addEventListener('click', handleOpenModal('silt'));

    const claySvg = sectionContainer.querySelector('#soil_texture_svg__Layer_18') as SVGGElement | null;
    claySvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    claySvg?.addEventListener('click', handleOpenModal('clay'));

    return () => {
      sandSvg?.removeEventListener('click', handleOpenModal('sand'));
      siltSvg?.removeEventListener('click', handleOpenModal('silt'));
      claySvg?.removeEventListener('click', handleOpenModal('clay'));
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
      <div
        ref={(el) => {
          props.assignRef(el);
          sectionRef.current = el;
        }}
      >
        <Text type='h1' weight='bold' size='3xl' className='text-yellow-500 mb-10'>
          soil texture
        </Text>
        <div className='flex flex-col sm:flex-row-reverse'>
          <SoilTextureSvg className='mb-10 sm:w-1/2 sm:mb-0' />
          <div className='sm:w-1/2 sm:mr-10'>
            <Text type='p' weight='light' size='md'>
              the clay particles in soil are classified by size into{' '}
              <Text type='span' weight='bold' size='md' style={{ color: '#EEA117' }}>
                sand
              </Text>
              ,{' '}
              <Text type='span' weight='bold' size='md' style={{ color: '#C17443' }}>
                silts
              </Text>
              , and{' '}
              <Text type='span' weight='bold' size='md' style={{ color: '#5C5052' }}>
                clay
              </Text>
              . the proportion of these three particle sizes determines the{' '}
              <Text type='span' weight='bold' size='md' style={{ color: '#FFCF01' }}>
                texture
              </Text>{' '}
              of the soil -- how it feels in your hand, how silt moves into and through it, how fertile it is, and much,
              much more!
            </Text>
          </div>
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
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

            <Image url={modalTypeMap[modalType].imageUrl} className='object-cover mx-auto h-auto' />
            <Text type='p' weight='light' size='2xs' className='text-center'>
              {modalTypeMap[modalType].text}
            </Text>
          </div>
        </ReactModal>
      )}
    </>
  );
};
