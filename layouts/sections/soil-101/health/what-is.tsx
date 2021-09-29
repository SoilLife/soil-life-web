import { useState, useRef, useEffect } from 'react';

// helpers
import { useMedia, useOrientation } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import ReactModal from 'react-modal';
import { Text, Icon } from 'design-system/atoms';

// assets
import WhatIsSoilHealthSvg from 'public/images/soil-101/health/what_is_soil_health.svg';
import SomFunctionsSvg from 'public/images/soil-101/health/SOM_functions.svg';
import HumanProfileSvg from 'public/images/soil-101/health/human_profile.svg';
import SoilProfileSvg from 'public/images/soil-101/health/soil_profile.svg';
import ProtectionSvg from 'public/images/soil-101/health/protection.svg';
import RespirationSvg from 'public/images/soil-101/health/respiration.svg';
import PhysicalSvg from 'public/images/soil-101/health/physical.svg';
import CirculationSvg from 'public/images/soil-101/health/circulation.svg';
import FiltrationSvg from 'public/images/soil-101/health/filtration.svg';
import BiodegradationSvg from 'public/images/soil-101/health/biodegradation.svg';

const modalTypeMap = {
  protection: <ProtectionSvg />,
  respiration: <RespirationSvg />,
  physical: <PhysicalSvg />,
  circulation: <CirculationSvg />,
  filtration: <FiltrationSvg />,
  biodegradation: <BiodegradationSvg />,
};

const interactiveClassNames = ['cursor-pointer', 'hover:opacity-50', 'active:opacity-100'];

export const WhatIsSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  useFullpageOverflow();
  const isMobile = useMedia('(max-width: 640px)');
  const orientation = useOrientation();
  const isLandscape = orientation.type.includes('landscape');
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  useFullpageOverflow();
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

    function addSvgInteractivity({ element, modalType }: { element: string; modalType: keyof typeof modalTypeMap }) {
      const interactiveSvg = sectionContainer.querySelector(element) as SVGGElement | null;
      interactiveSvg?.classList?.add(...interactiveClassNames);
      interactiveSvg?.addEventListener('click', handleOpenModal(modalType));
      return interactiveSvg;
    }
    const humanProfileProtectionSvg = addSvgInteractivity({
      element: '#human_profile_svg__Layer_39',
      modalType: 'protection',
    });
    const soilProfileProtectionSvg = addSvgInteractivity({
      element: '#soil_profile_svg__Layer_28',
      modalType: 'protection',
    });

    const humanProfileRespirationSvg = addSvgInteractivity({
      element: '#human_profile_svg__Layer_37',
      modalType: 'respiration',
    });
    const soilProfileRespirationSvg = addSvgInteractivity({
      element: '#soil_profile_svg__Layer_27',
      modalType: 'respiration',
    });

    const humanProfileFiltrationSvg = addSvgInteractivity({
      element: '#human_profile_svg__Layer_39',
      modalType: 'filtration',
    });
    const soilProfileFiltrationSvg = addSvgInteractivity({
      element: '#soil_profile_svg__Layer_24',
      modalType: 'filtration',
    });

    const humanProfileCirculationSvg = addSvgInteractivity({ element: '#a', modalType: 'circulation' });
    const soilProfileCirculationSvg = addSvgInteractivity({
      element: '#soil_profile_svg__Layer_26',
      modalType: 'circulation',
    });

    const humanProfileBiodegradationSvg = addSvgInteractivity({
      element: '#ecosystem_services_svg__Layer_6',
      modalType: 'biodegradation',
    });
    const soilProfileBiodegradationSvg = addSvgInteractivity({
      element: '#soil_profile_svg__Layer_25',
      modalType: 'biodegradation',
    });

    const humanProfilePhysicalSvg = addSvgInteractivity({
      element: '#human_profile_svg__Layer_35',
      modalType: 'physical',
    });
    const soilProfilePhysicalSvg = addSvgInteractivity({
      element: '#soil_profile_svg__Layer_28',
      modalType: 'physical',
    });

    return () => {
      humanProfileProtectionSvg?.removeEventListener('click', handleOpenModal('protection'));
      soilProfileProtectionSvg?.removeEventListener('click', handleOpenModal('protection'));

      humanProfileRespirationSvg?.removeEventListener('click', handleOpenModal('respiration'));
      soilProfileRespirationSvg?.removeEventListener('click', handleOpenModal('respiration'));

      humanProfileFiltrationSvg?.removeEventListener('click', handleOpenModal('filtration'));
      soilProfileFiltrationSvg?.removeEventListener('click', handleOpenModal('filtration'));

      humanProfileCirculationSvg?.removeEventListener('click', handleOpenModal('circulation'));
      soilProfileCirculationSvg?.removeEventListener('click', handleOpenModal('circulation'));

      humanProfileBiodegradationSvg?.removeEventListener('click', handleOpenModal('biodegradation'));
      soilProfileBiodegradationSvg?.removeEventListener('click', handleOpenModal('biodegradation'));

      humanProfilePhysicalSvg?.removeEventListener('click', handleOpenModal('physical'));
      soilProfilePhysicalSvg?.removeEventListener('click', handleOpenModal('physical'));
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
        className='space-y-4 sm:space-y-8'
      >
        <Text type='h1' weight='light' size='4xl' className='text-blue-500 mb-20'>
          what is soil health?
        </Text>
        <Text type='p' weight='light' size='md'>
          soil health is the capacity of soil to{' '}
          <Text type='span' weight='bold' size='md'>
            function as a vital, living ecosystem
          </Text>{' '}
          that sustains plants, animals, and humans. many soil properties are inherent and can’t change on a human time
          scale (i.e. texture). others are dynamic and directly influenced by management (i.e structure, organic
          matter).
        </Text>
        <WhatIsSoilHealthSvg />
        <Text type='p' weight='light' size='md'>
          just like our{' '}
          <Text type='span' weight='bold' size='md' className='text-blue-500'>
            organs
          </Text>{' '}
          provide services that keep us healthy, healthy soil provides important{' '}
          <Text type='span' weight='bold' size='md' className='text-blue-500'>
            ecosystem services
          </Text>{' '}
          to life on earth!
        </Text>

        <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:flex sm:items-center sm:gap-0 sm:space-x-8'>
          <HumanProfileSvg className='mx-auto h-[50vh] sm:h-auto' />

          <Text type='p' weight='light' size='md' className='row-start-2 col-span-2 sm:row-start-auto'>
            just like we inherit{' '}
            <Text type='span' weight='bold' size='md'>
              genetic material
            </Text>{' '}
            from our parents, soils inherit certain properties from their{' '}
            <Text type='span' weight='bold' size='md'>
              parent material
            </Text>{' '}
            that can’t easily be changed (i.e. texture, mineralogy), but just like{' '}
            <Text type='span' weight='bold' size='md'>
              diet and lifestyle
            </Text>{' '}
            have the power to modify our DNA (via epigenetics) and promote overall health, the way we manage soil has a
            major impact on soil organic matter, soil structure, and overall soil health!
          </Text>

          <SoilProfileSvg className='mx-auto col-start-2 h-[50vh] sm:col-start-auto sm:h-auto' />
        </div>

        <Text type='p' weight='light' size='md'>
          organic matter (SOM) is key to soil health, as it greatly improves most soil functions. whether sandy or
          clayey, SOM improves structure, which may be the real{' '}
          <Text type='span' weight='bold' size='md'>
            secret to soil health
          </Text>
          . while many conservation practices can improve soil structure, the ability to build and store SOM varies from
          soil to soil.
        </Text>
        <SomFunctionsSvg />

        <Text type='p' weight='light' size='md'>
          in order to build SOM, microbes must{' '}
          <Text type='span' weight='bold' size='md'>
            store more of the carbon
          </Text>{' '}
          they consume (as living biomass){' '}
          <Text type='span' weight='bold' size='md'>
            than they respire as CO2
          </Text>
          . this requires a healthy living environment (good structure!) that optimizes their health and overall
          efficiency.
        </Text>
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
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-pink-500' />
          </button>
          {modalTypeMap[modalType]}
        </ReactModal>
      )}
    </>
  );
};
