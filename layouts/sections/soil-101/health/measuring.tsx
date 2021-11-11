import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

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
    const svgs: { [Key in keyof typeof modalTypeMap]: string } = {
      aggregate: 'measuring_soil_health_svg__Layer_58',
      infiltration: 'measuring_soil_health_svg__Layer_57',
      matter: 'measuring_soil_health_svg__Layer_56',
      nutrients: 'measuring_soil_health_svg__Layer_55',
      ph: 'measuring_soil_health_svg__Layer_54',
      salinity: 'measuring_soil_health_svg__Layer_53',
      respiration: 'measuring_soil_health_svg__Layer_52',
      earthworms: 'measuring_soil_health_svg__Layer_51',
      diversity: 'measuring_soil_health_svg__Layer_50',
      density: 'measuring_soil_health_svg__Layer_49',
      capacity: 'measuring_soil_health_svg__Layer_48',
    };

    Object.entries(svgs).forEach(([type, svgId]) => {
      const svg = sectionContainer.querySelector(`#${svgId}`) as SVGGElement | null;
      svg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
      svg?.addEventListener('click', handleOpenModal(type as typeof modalType));
    });

    return () => {
      Object.entries(svgs).forEach(([type, svgId]) => {
        const svg = sectionContainer.querySelector(`#${svgId}`) as SVGGElement | null;
        svg?.removeEventListener('click', handleOpenModal(type as typeof modalType));
      });
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
        className={styles['section']}
      >
        <Text type='h1' weight='bold' size='3xl' color='blue' className={styles['heading']}>
          measuring soil health
        </Text>
        <Text type='p' weight='light' size='sm' className={styles['p-50']}>
          soil testing helps land managers evaluate the health of their systems. traditional lab tests focus on soil
          chemical properties, while soil health tests include physical and biological properties, as well.
        </Text>
        <MeasuringSvg />
      </div>
      {modalType && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              inset: isMobile ? '40px 0 0 0' : '20%',
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
          <div className='h-full w-full grid place-items-center'>{modalTypeMap[modalType]}</div>
        </ReactModal>
      )}
    </>
  );
};
