import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';

// assets
import StructureSvg from 'public/images/soil-101/physics/structure.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  granular: {
    title: 'granular',
    imageUrl: 'Soil_101/Soil_Physics/granular_structure_ViHk-cnG7.png',
    text: 'nearly spherical aggregates commonly found in surface soils (especially with high organic matter)',
  },
  wedge: {
    title: 'wedge',
    imageUrl: 'Soil_101/Soil_Physics/wedge_structure_okJkM6JmU.png',
    text: 'elongated structure caused by clays that shrink and swell,  churning/sliding over each other again and again',
  },
  platy: {
    title: 'platy',
    imageUrl: 'Soil_101/Soil_Physics/platy.png',
    text: 'flat, stacked, “plate-like” structure; often caused by compaction',
  },
  prismatic: {
    title: 'prismatic',
    imageUrl: 'Soil_101/Soil_Physics/Structure_Prismatic_2s1S3USk6.JPG',
    text: 'large, vertical columns with flat tops, found in subsoils with accumulation of clay',
  },
  massive: {
    title: 'massive',
    imageUrl: 'Soil_101/Soil_Physics/masssive_old.JPG',
    text: 'the absence of structure; just a giant mass of solid material.',
  },
  columnar: {
    title: 'columnar',
    imageUrl: 'Soil_101/Soil_Physics/columnar_FrnNpqkbq.png',
    text: 'large, vertical columns with round tops, found in subsoils with high sodium and clay built up',
  },
  blocky: {
    title: 'blocky',
    imageUrl: 'Soil_101/Soil_Physics/blocky.jpg',
    text: 'well-aggregated with rounded or sharp edges, common with clay',
  },
  'single grain': {
    title: 'single grain',
    imageUrl: 'Soil_101/Soil_Physics/singlegrained.jpg',
    text: 'absence of structure; each particle is separate and distinct from the other',
  },
};

export const StructureSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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
      ['#structure_svg__Layer_116', 'granular'],
      ['#structure_svg__Layer_115', 'wedge'],
      ['#structure_svg__Layer_114', 'platy'],
      ['#structure_svg__Layer_113', 'prismatic'],
      ['#structure_svg__Layer_112', 'massive'],
      ['#structure_svg__Layer_111', 'columnar'],
      ['#structure_svg__Layer_110', 'blocky'],
      ['#structure_svg__Layer_109', 'single grain'],
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
          id='structure'
          type='h1'
          weight='bold'
          size='4xl'
          color='yellow'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          structure
        </Text>
        <Text type='p' weight='thin' size='md' className={styles['p-60']}>
          the way these structural units stack together determines the size, shape, and distribution of pore space
          within the soil profile. the density of the individual soil particles and the amount of empty space within and
          between them determines the bulk density, or mass per unit volume of the soil.
        </Text>
        <StructureSvg className='mx-auto max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)]' />
      </div>
      {modalType && (
        <GenericModal
          title={modalTypeMap[modalType].title}
          description={modalTypeMap[modalType].text}
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
