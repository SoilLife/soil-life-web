import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import MeasuringSvg from 'public/images/soil-101/health/measuring_soil_health.svg';
import AggregateSvg from 'public/images/soil-101/health/measuring_aggregate.svg';
import CapacitySvg from 'public/images/soil-101/health/measuring_capacity.svg';
import DensitySvg from 'public/images/soil-101/health/measuring_density.svg';
import DiversitySvg from 'public/images/soil-101/health/measuring_diversity.svg';
import EarthwormsSvg from 'public/images/soil-101/health/measuring_earthworms.svg';
import InfiltrationSvg from 'public/images/soil-101/health/measuring_infiltration.svg';
import MatterSvg from 'public/images/soil-101/health/measuring_matter.svg';
import NutrientsSvg from 'public/images/soil-101/health/measuring_nutrients.svg';
import PhSvg from 'public/images/soil-101/health/measuring_ph.svg';
import RespirationSvg from 'public/images/soil-101/health/measuring_respiration.svg';
import SalinitySvg from 'public/images/soil-101/health/measuring_salinity.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  aggregate: <AggregateSvg className='h-full w-full' />,
  capacity: <CapacitySvg className='h-full w-full' />,
  density: <DensitySvg className='h-full w-full' />,
  diversity: <DiversitySvg className='h-full w-full' />,
  earthworms: <EarthwormsSvg className='h-full w-full' />,
  infiltration: <InfiltrationSvg className='h-full w-full' />,
  matter: <MatterSvg className='h-full w-full' />,
  nutrients: <NutrientsSvg className='h-full w-full' />,
  ph: <PhSvg className='h-full w-full' />,
  respiration: <RespirationSvg className='h-full w-full' />,
  salinity: <SalinitySvg className='h-full w-full' />,
};

export const MeasuringSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    const sectionContainer = sectionRef.current;
    const svgs: [string, typeof modalType][] = [
      ['#measuring_soil_health_svg__Layer_58', 'aggregate'],
      ['#measuring_soil_health_svg__Layer_57', 'infiltration'],
      ['#measuring_soil_health_svg__Layer_56', 'matter'],
      ['#measuring_soil_health_svg__Layer_55', 'nutrients'],
      ['#measuring_soil_health_svg__Layer_54', 'ph'],
      ['#measuring_soil_health_svg__Layer_53', 'salinity'],
      ['#measuring_soil_health_svg__Layer_52', 'respiration'],
      ['#measuring_soil_health_svg__Layer_51', 'earthworms'],
      ['#measuring_soil_health_svg__Layer_50', 'diversity'],
      ['#measuring_soil_health_svg__Layer_49', 'density'],
      ['#measuring_soil_health_svg__Layer_48', 'capacity'],
    ];

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
          id='measurement'
          type='h1'
          weight='bold'
          size='3xl'
          color='blue'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          measuring soil health
        </Text>
        <Text type='p' weight='light' size='sm' className={styles['p-50']}>
          soil testing helps land managers evaluate the health of their systems. traditional lab tests focus on soil
          chemical properties, while soil health tests include physical and biological properties, as well.
        </Text>
        <MeasuringSvg />
      </div>
      {modalType && (
        <FullImage
          image={{
            type: 'svg',
            element: modalTypeMap[modalType],
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
