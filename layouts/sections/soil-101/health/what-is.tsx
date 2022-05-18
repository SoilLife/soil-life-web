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
      ['#soil_profile_svg__Layer_66', 'protection'],
      ['#human_profile_svg__Layer_37', 'respiration'],
      ['#human_profile_svg__Layer_38', 'respiration'],
      ['#human_profile_svg__Layer_36', 'respiration'],
      ['#soil_profile_svg__Layer_27', 'respiration'],
      ['#human_profile_svg__Layer_39', 'filtration'],
      ['#soil_profile_svg__Layer_24', 'filtration'],
      ['#human_profile_svg__Layer_35', 'circulation'],
      ['#soil_profile_svg__Layer_26', 'circulation'],
      ['#soil_profile_svg__Layer_25', 'biodegradation'],
      ['#soil_profile_svg__Layer_28', 'physical'],
      ['#human_profile_svg__Layer_85', 'physical'],
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
          just like our {' '}
          <Text type='span' weight='bold' size='md' color='blue'>
          organs 
           </Text>{' '}
          provide important functions that keep us {' '}
          <Text type='span' weight='bold' size='md' color='blue'>
          healthy
          </Text>, healthy soil provides important {' '}
          <Text type='span' weight='bold' size='md' color='blue'>
          ecosystem functions
          </Text>
          that promote a healthy environment!
        </Text>

        <div className='grid grid-cols-2 grid-rows-4 gap-4 place-items-center xl:flex xl:items-center xl:gap-0 xl:space-x-8'>
          <HumanProfileSvg className='w-full mx-auto row-span-3 max-h-[800px] lg:w-auto' />
          <Text
            type='p'
            weight='light'
            size='sm'
            className={`text-center row-start-4 col-span-2 xl:row-start-auto xl:w-2/5 ${styles['p-60']}`}
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
            have the power to modify our DNA and promote overall health, the way we manage soil has a
            major impact on soil organic matter, soil structure, and overall soil health!
          </Text>

          <SoilProfileSvg className='w-full mx-auto row-span-3 col-start-2 max-h-[800px] lg:w-auto xl:col-start-auto ' />
        </div>

        <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-60']}`}>
          in {' '}
          <Text type='span' weight='bold' size='sm' color='blue'>
          sandy soils
          </Text>
          , increasing soil organic matter (SOM) improves soil structure by {' '}
          <Text type='span' weight='bold' size='sm' color='blue'>
          sticking particles 
          </Text>{' '}
          together; while in {' '}
          <Text type='span' weight='bold' size='sm' color='blue'>
          clayey soils
           </Text>
          , SOM helps open up the soil, creating more {' '}
          <Text type='span' weight='bold' size='sm' color='blue'>
          pore space
          </Text>
          . while many conservation practices can improve soil structure, the ability to build and store SOM may be limited in some soils or climates.  
        </Text>
        <CarbonSequestSvg />

        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-60']}`}>
          in order to build SOM, microbes must{' '}
          <Text type='span' weight='bold' size='md' color='blue'>
            store more of the carbon
          </Text>{' '}
          they consume in their biomass{' '}
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
            functions
          </Text>
          <Text size='sm' weight='medium' type='h3' className='underline w-full' color={color}>
            metrics
          </Text>
        </div>
        <div className='flex divide-x divide-solid divide-gray-500 whitespace-pre'>
          <div className='flex-grow w-full p-4'>
            <ul className='text-left space-y-2'>
              {functions.map((f, i) => (
                <li key={i}>
                  <Text size='xs' weight='thin' type='span'>
                    {f}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-grow w-full p-4'>
            <ul className='text-left space-y-2'>
              {metrics.map((m, i) => (
                <li key={i}>
                  <Text size='xs' weight='thin' type='span'>
                    {m}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
