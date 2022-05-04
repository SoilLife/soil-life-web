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

const popupMap = {
  physical: {
    color: 'yellow',
    functions: ['structural stability', 'erosion control', 'water storage', 'air storage'],
    metrics: ['aggregate stability', 'infiltration rate', 'water-holding capacity', 'bulk density', 'surface hardness'],
    className: 'sm:absolute sm:top-0 sm:right-[80%]',
  },
  chemical: {
    color: 'pink',
    functions: ['fertility', 'nutrient cycling', 'buffering capacity', 'water infiltration'],
    metrics: ['cation exchange', 'capacity', 'nutrient analysis', 'pH', 'ec/sar'],
    className: 'sm:absolute sm:top-0 sm:right-[80%]',
  },
  biological: {
    color: 'teal',
    functions: ['carbon storage', 'nutrient storage', 'pest suppression', 'disease suppression', 'biodiversity'],
    metrics: ['soil carbon/som', 'microbial biomass/diversity', 'enzyme activity', 'invertebrate counts'],
    className: 'sm:absolute sm:top-0 sm:right-[80%]',
  },
};

export const WhatIsSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const [popup, setPopup] = useState<null | keyof typeof popupMap>(null);
  const [isSomModalOpen, setIsSomModalOpen] = useState(false);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    function showPopup(type: typeof popup) {
      return () => {
        setPopup(type);
      };
    }

    function hidePopup(e: MouseEvent) {
      const physicalBiologicalChemicalSvg = sectionContainer.querySelector('#tri-bubble');
      if (!physicalBiologicalChemicalSvg?.contains(e.target as HTMLElement)) {
        setPopup(null);
      }
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

    const popups: [string, typeof popup][] = [
      ['#what_is_soil_health_svg__Layer_32', 'biological'],
      ['#what_is_soil_health_svg__Layer_31', 'chemical'],
      ['#what_is_soil_health_svg__Layer_30', 'physical'],
    ];

    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    const interactivePopups = popups.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: showPopup(type),
        onKeydown: showPopup(type),
        ariaLabel: `show ${type} popup`,
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

    window.addEventListener('click', hidePopup);

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
      interactivePopups.forEach((popup) => popup?.unmount());
      somSvg?.unmount();
      window.removeEventListener('click', hidePopup);
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
        <div className='flex flex-col-reverse items-center justify-center gap-10 sm:flex-row sm:space-x-4 sm:space-y-4'>
          <Text type='p' size='md' weight='light' className={`text-center max-w-[311px] ${styles['p-60']}`}>
            soil health lies at the intersection of the{' '}
            <Text type='span' size='md' weight='bold' color='teal'>
              biological
            </Text>
            ,{' '}
            <Text type='span' size='md' weight='bold' color='pink'>
              chemical
            </Text>
            , and{' '}
            <Text type='span' size='md' weight='bold' color='yellow'>
              physical
            </Text>{' '}
            state of the soil
          </Text>
          <div id='tri-bubble' className='relative w-full max-w-[595px]'>
            <WhatIsSoilHealthSvg />
            {popup && <Popup title={popup} {...popupMap[popup]} />}
          </div>
        </div>
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-60']}`}>
          just like our organs provide services that keep us healthy, healthy soil provides important ecosystem services{' '}
          <Text type='span' weight='bold' size='md' color='blue'>
            that promote
          </Text>{' '}
          life on earth!
        </Text>

        <div className='grid grid-cols-2 grid-rows-4 gap-4 place-items-center sm:flex sm:items-center sm:gap-0 sm:space-x-8'>
          <HumanProfileSvg className='w-full mx-auto row-span-3 max-h-[800px] lg:w-auto' />
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

          <SoilProfileSvg className='w-full mx-auto row-span-3 col-start-2 max-h-[800px] sm:col-start-auto lg:w-auto' />
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

function Popup({
  className,
  title,
  color,
  functions,
  metrics,
}: {
  className: string;
  title: string;
  color: any;
  functions: string[];
  metrics: string[];
}) {
  return (
    <div className={`p-4 text-center space-y-4 w-fit sm:bg-white sm:shadow  ${className}`}>
      <Text size='md' weight='bold' type='h2'>
        {title}
      </Text>
      <div className='space-y-4'>
        <div className='flex'>
          <Text size='sm' weight='medium' type='h3' className='underline w-full' color={color}>
            Functions
          </Text>
          <Text size='sm' weight='medium' type='h3' className='underline w-full' color={color}>
            Metrics
          </Text>
        </div>
        <div className='flex divide-x divide-solid divide-gray-500'>
          <div className='flex-grow w-full p-4'>
            <ul className='text-left space-y-2'>
              {functions.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div className='flex-grow w-full p-4'>
            <ul className='text-left space-y-2'>
              {metrics.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
