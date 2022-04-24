import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';
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
    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    const svgs: [string, typeof modalType][] = [
      ['#soil_texture_svg__d', 'sand'],
      ['#soil_texture_svg__e', 'silt'],
      ['#soil_texture_svg__f', 'clay'],
    ];

    const sectionContainer = sectionRef.current;

    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
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
        <Text
          id='texture'
          type='h1'
          weight='bold'
          size='4xl'
          color='yellow'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
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
