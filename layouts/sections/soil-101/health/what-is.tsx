import { useState, useRef, useEffect } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import WhatIsSoilHealthSvg from 'public/images/soil-101/health/what_is_soil_health.svg';
import CarbonSequestSvg from 'public/images/soil-101/health/carbon_sequest.svg';
import HumanProfileSvg from 'public/images/soil-101/health/human_profile.svg';
import SoilProfileSvg from 'public/images/soil-101/health/soil_profile.svg';
import ProtectionSvg from 'public/images/soil-101/health/protection.svg';
import RespirationSvg from 'public/images/soil-101/health/respiration.svg';
import PhysicalSvg from 'public/images/soil-101/health/physical.svg';
import CirculationSvg from 'public/images/soil-101/health/circulation.svg';
import FiltrationSvg from 'public/images/soil-101/health/filtration.svg';
import BiodegradationSvg from 'public/images/soil-101/health/biodegradation.svg';
import CarbonSanDiegoSvg from 'public/images/soil-101/health/carbon_san_diego.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  protection: <ProtectionSvg className='h-full w-full' />,
  respiration: <RespirationSvg className='h-full w-full' />,
  physical: <PhysicalSvg className='h-full w-full' />,
  circulation: <CirculationSvg className='h-full w-full' />,
  filtration: <FiltrationSvg className='h-full w-full' />,
  biodegradation: <BiodegradationSvg className='h-full w-full' />,
};

export const WhatIsSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const [isSomModalOpen, setIsSomModalOpen] = useState(false);
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
      ['#human_profile_svg__Layer_40', 'protection'],
      ['#soil_profile_svg__Layer_28', 'protection'],
      ['#human_profile_svg__Layer_37', 'respiration'],
      ['#human_profile_svg__Layer_39', 'filtration'],
      ['#soil_profile_svg__Layer_24', 'filtration'],
      ['#human_profile_svg__Layer_35', 'circulation'],
      ['#soil_profile_svg__Layer_26', 'circulation'],
      ['#ecosystem_services_svg__Layer_6', 'biodegradation'],
      ['#soil_profile_svg__Layer_25', 'biodegradation'],
      ['#human_profile_svg__Layer_85', 'physical'],
      ['#soil_profile_svg__Layer_28', 'physical'],
    ];

    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    function toggleSomModal() {
      setIsSomModalOpen(true);
    }

    const somSvg = makeSvgInteractive({
      svg: sectionContainer.querySelector('#carbon_sequest_svg__Layer_2'),
      onClick: toggleSomModal,
      onKeydown: toggleSomModal,
      ariaLabel: 'toggle soil organic matter modal',
    });

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
      somSvg?.unmount();
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
    setIsSomModalOpen(false);
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
          id='what-is-soil-health?'
          type='h1'
          weight='bold'
          size='4xl'
          color='blue'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          what is soil health?
        </Text>
        <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-60']}`}>
          soil health is the capacity of soil to function as a{' '}
          <Text type='span' weight='bold' size='sm' color='blue'>
            vital, living ecosystem
          </Text>{' '}
          that sustains plants, animals, and humans. many soil properties are{' '}
          <Text type='span' weight='bold' size='sm' color='blue'>
            inherent
          </Text>{' '}
          and can't change on a human time scale (i.e. texture). others are{' '}
          <Text type='span' weight='bold' size='sm' color='blue'>
            dynamic
          </Text>{' '}
          and can be directly influenced by management (i.e structure, organic matter).
        </Text>
        <div className='flex items-center justify-center space-x-4'>
          <Text type='p' size='sm' weight='light' className={`text-center max-w-[311px] ${styles['p-60']}`}>
            soil health lies at the intersection of the{' '}
            <Text type='span' size='sm' weight='bold' color='teal'>
              biological
            </Text>
            ,{' '}
            <Text type='span' size='sm' weight='bold' color='pink'>
              chemical
            </Text>
            , and{' '}
            <Text type='span' size='sm' weight='bold' color='yellow'>
              physical
            </Text>{' '}
            state of the soil
          </Text>
          <WhatIsSoilHealthSvg className='max-w-[595px]' />
        </div>
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-60']}`}>
          just like our organs provide services that keep us healthy, healthy soil provides important ecosystem services{' '}
          <Text type='span' weight='bold' size='md' color='blue'>
            that promote
          </Text>{' '}
          life on earth!
        </Text>

        <div className='grid grid-cols-2 grid-rows-4 gap-4 place-items-center sm:flex sm:items-center sm:gap-0 sm:space-x-8'>
          <HumanProfileSvg className='mx-auto row-span-3 max-h-[800px]' />
          <Text
            type='p'
            weight='light'
            size='sm'
            className={`text-center row-start-4 col-span-2 sm:row-start-auto sm:w-2/5 ${styles['p-60']}`}
          >
            just like we inherit{' '}
            <Text type='span' weight='bold' size='sm' color='blue'>
              genetic material
            </Text>{' '}
            from our parents, soils inherit certain properties from their{' '}
            <Text type='span' weight='bold' size='sm' color='blue'>
              parent material
            </Text>{' '}
            that can't easily be changed (i.e. texture, mineralogy), but just like{' '}
            <Text type='span' weight='bold' size='sm' color='blue'>
              diet and lifestyle
            </Text>{' '}
            have the power to modify our DNA (via epigenetics) and promote overall health, the way we manage soil has a
            major impact on soil organic matter, soil structure, and overall soil health!
          </Text>

          <SoilProfileSvg className='mx-auto row-span-3 col-start-2 max-h-[800px] sm:col-start-auto' />
        </div>

        <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-60']}`}>
          organic matter (SOM) is key to soil health, as it greatly improves most soil functions. whether sandy or
          clayey, SOM improves structure, which may be the real{' '}
          <Text type='span' weight='bold' size='sm' color='blue'>
            secret to soil health
          </Text>
          . while many conservation practices can improve soil structure, the ability to build and store SOM varies from
          soil to soil.
        </Text>
        <CarbonSequestSvg />

        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-60']}`}>
          in order to build SOM, microbes must{' '}
          <Text type='span' weight='bold' size='md' color='blue'>
            store more of the carbon
          </Text>{' '}
          they consume as living biomass{' '}
          <Text type='span' weight='bold' size='md' color='blue'>
            than they respire as CO<sub>2</sub>
          </Text>
          . this requires a healthy living environment (good structure!) that optimizes their health and overall
          efficiency.
        </Text>
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

      {isSomModalOpen && (
        <FullImage
          image={{
            type: 'svg',
            element: <CarbonSanDiegoSvg className='h-full w-full' />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
