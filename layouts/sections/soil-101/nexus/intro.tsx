import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';

// assets
import AirWaterMineralOrganic from 'public/images/soil-101/nexus/air_water_mineral_organic.svg';
import NexusIntro from 'public/images/soil-101/nexus/nexus_intro.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  air: {
    title: 'air',
    imageUrl: 'Soil_101/Soil_Nexus/air_climate.jpg',
    text: 'the invisible, gaseous substance that blankets the earth, allowing us to breathe and keeping us just the right temperature. mainly a mix of oxygen and nitrogen with small amounts of CO2 , argon, other trace gases, and water vapor.',
  },
  mineral: {
    title: 'mineral',
    imageUrl: 'Soil_101/Soil_Nexus/mineral.png',
    text: 'minerals are the non-living, chemical material (in-organic) that makes up the earth’s crust. they consist of diverse combinations of natural elements in consistent structures and form the rocks that eventually break down to form soil!',
  },
  water: {
    title: 'water',
    imageUrl: 'Soil_101/Soil_Nexus/Water.jpg',
    text: 'the transparent combination of hydrogen and oxygen, vital to life, as we know it. the universal solvent, capable of dissolving more substances than any other liquid. produced during formation of organic macromolecules, consumed during the breakdown.',
  },
  organic: {
    title: 'organic',
    imageUrl: 'Soil_101/Soil_Nexus/Organic.jpeg',
    text: 'organic means related to or containing the carbon compounds on which all life on earth is based. a combination of carbon from the air, hydrogen and oxygen from water and mineral matter forms all living matter. ',
  },
};

export const IntroSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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
      ['#air_water_mineral_organic_svg__Layer_27', 'air'],
      ['#air_water_mineral_organic_svg__Layer_28', 'water'],
      ['#air_water_mineral_organic_svg__Layer_29', 'mineral'],
      ['#air_water_mineral_organic_svg__Layer_30', 'organic'],
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
          id='soil-nexus'
          type='h1'
          weight='bold'
          size='4xl'
          color='pink'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          soil: the nexus
        </Text>
        <div>
          <Text type='p' weight='light' size='md' className={styles['p-60']}>
            the{' '}
            <Text type='span' weight='light' size='md' color='pink'>
              "solid ground"
            </Text>{' '}
            we walk on is only about{' '}
            <Text type='span' weight='light' size='md' color='pink'>
              50% solid
            </Text>{' '}
            — made mostly of minerals and 1-10% organic matter. the remaining{' '}
            <Text type='span' weight='light' size='md' color='pink'>
              50% is open, pore space
            </Text>{' '}
            — filled with either air or water.
          </Text>
        </div>
        <div className='flex flex-col gap-6 sm:flex-row'>
          <NexusIntro className="w-full h-full max-w-full" />
          <AirWaterMineralOrganic className="w-full h-full max-w-full" />
        </div>
      </div>
      {modalType && (
        <GenericModal
          title={modalTypeMap[modalType].title}
          description={modalTypeMap[modalType].text}
          image={{ type: 'imagekit', url: modalTypeMap[modalType].imageUrl }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
