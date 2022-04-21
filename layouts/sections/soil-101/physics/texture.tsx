import { useRef, useEffect, useState } from 'react';
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';

// components
import { Text } from 'design-system/atoms';

// assets
import SoilTextureSvg from 'public/images/soil-101/physics/soil_texture.svg';

import styles from '../soil-101.module.css';

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
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function handleOpenModalClick(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    function handleOpenModalKeydown(type: typeof modalType) {
      return (event: KeyboardEvent) => {
        if (event.code === 'Enter') {
          setModalType(type);
        }
      };
    }

    function makeInteractive(svg: SVGGElement | null, type: keyof typeof modalTypeMap) {
      if (!svg) return;
      svg.classList.add('cursor-pointer', 'focus:opacity-50', 'hover:opacity-50', 'active:opacity-100');
      svg.tabIndex = 0;
      svg.addEventListener('click', handleOpenModalClick(type));
      svg.addEventListener('keydown', handleOpenModalKeydown(type));
      return {
        unmount() {
          svg.removeEventListener('click', handleOpenModalClick(type));
          svg.removeEventListener('keydown', handleOpenModalKeydown(type));
        },
      };
    }

    const sectionContainer = sectionRef.current;
    const sandSvg = makeInteractive(sectionContainer.querySelector('#soil_texture_svg__d'), 'sand');
    const siltSvg = makeInteractive(sectionContainer.querySelector('#soil_texture_svg__e'), 'silt');
    const claySvg = makeInteractive(sectionContainer.querySelector('#soil_texture_svg__f'), 'clay');

    return () => {
      sandSvg?.unmount();
      siltSvg?.unmount();
      claySvg?.unmount();
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
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
        <Text type='h1' weight='bold' size='4xl' color='yellow' className={styles['heading']}>
          soil texture
        </Text>
        <div className='flex flex-col items-center gap-8 sm:flex-row-reverse'>
          <SoilTextureSvg className='sm:w-1/2' />
          <Text type='p' weight='light' size='lg' className={`max-w-lg sm:w-1/2 ${styles['p-48']}`}>
            the particles in soil are classified by size into{' '}
            <Text type='span' weight='bold' size='lg' style={{ color: '#EEA117' }}>
              sand
            </Text>
            ,{' '}
            <Text type='span' weight='bold' size='lg' style={{ color: '#C17443' }}>
              silts
            </Text>
            , and{' '}
            <Text type='span' weight='bold' size='lg' style={{ color: '#5C5052' }}>
              clay
            </Text>
            . the proportion of these three particle sizes determines the{' '}
            <Text type='span' weight='bold' size='lg' style={{ color: '#FFCF01' }}>
              texture
            </Text>{' '}
            of the soil -- how it feels in your hand, how water moves into and through it, how fertile it is, and much,
            much more!
          </Text>
        </div>
      </div>
      {modalType && (
        <GenericModal
          title={modalTypeMap[modalType].title}
          image={{ type: 'imagekit', url: modalTypeMap[modalType].imageUrl }}
          description={modalTypeMap[modalType].text}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
