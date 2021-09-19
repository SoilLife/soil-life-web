import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import PoreSpaceSvg from 'public/images/soil-101/physics/pore_space.svg';
import GravitationalWaterSvg from 'public/images/soil-101/physics/gravitational_water.svg';
import HygroscopicWaterSvg from 'public/images/soil-101/physics/hygroscopic_water.svg';
import PlantAvailableWaterSvg from 'public/images/soil-101/physics/plant_available_water.svg';
import SolidPhaseSvg from 'public/images/soil-101/physics/solid_phase.svg';
import LiquidPhaseSvg from 'public/images/soil-101/physics/liquid_phase.svg';
import GasPhaseSvg from 'public/images/soil-101/physics/gas_phase.svg';

const modalTypeMap = {
  gravitational: {
    title: 'gravitational water',
    image: <GravitationalWaterSvg />,
    heading: 'saturation',
    text: 'all pores are full of water. lost to gravity',
  },
  plant: {
    title: 'plant available water',
    image: <PlantAvailableWaterSvg />,
    heading: 'field capacity',
    text: 'available water for plant growth',
  },
  hygroscopic: {
    title: 'hygroscopic water',
    image: <HygroscopicWaterSvg />,
    heading: 'wilting point',
    text: 'no more water available for plants',
  },
};

export const PoreSpaceSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  useFullpageOverflow();
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const [popup, setPopup] = useState({
    gas: false,
    solid: false,
    liquid: false,
  });
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function handleOpenGraphicModal(type: typeof modalType) {
      return (_e: MouseEvent) => {
        const body = document.querySelector('body');
        if (body) {
          body.style.overflow = 'hidden';
        }
        setModalType(type);
      };
    }

    function handlePopupModal(phase: keyof typeof popup) {
      return (_e: MouseEvent) => {
        setPopup((prevState) => {
          return {
            ...prevState,
            [phase]: !prevState[phase],
          };
        });
      };
    }

    const sectionContainer = sectionRef.current;
    const gasSvg = sectionContainer.querySelector('#pore_space_svg__Layer_133') as SVGGElement | null;
    gasSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    gasSvg?.addEventListener('click', handlePopupModal('gas'));

    const liquidSvg = sectionContainer.querySelector('#pore_space_svg__Layer_132') as SVGGElement | null;
    liquidSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    liquidSvg?.addEventListener('click', handlePopupModal('liquid'));

    const solidSvg = sectionContainer.querySelector('#pore_space_svg__Layer_127') as SVGGElement | null;
    solidSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    solidSvg?.addEventListener('click', handlePopupModal('solid'));

    const hygroscopicSvg = sectionContainer.querySelector('#pore_space_svg__Layer_128') as SVGGElement | null;
    hygroscopicSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    hygroscopicSvg?.addEventListener('click', handleOpenGraphicModal('hygroscopic'));

    const gravitationalSvg = sectionContainer.querySelector('#pore_space_svg__Layer_130') as SVGGElement | null;
    gravitationalSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    gravitationalSvg?.addEventListener('click', handleOpenGraphicModal('gravitational'));

    const plantSvg = sectionContainer.querySelector('#pore_space_svg__Layer_129') as SVGGElement | null;
    plantSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    plantSvg?.addEventListener('click', handleOpenGraphicModal('plant'));

    return () => {
      gasSvg?.removeEventListener('click', handlePopupModal('gas'));
      liquidSvg?.removeEventListener('click', handlePopupModal('liquid'));
      solidSvg?.removeEventListener('click', handlePopupModal('solid'));
      hygroscopicSvg?.removeEventListener('click', handleOpenGraphicModal('hygroscopic'));
      gravitationalSvg?.removeEventListener('click', handleOpenGraphicModal('gravitational'));
      plantSvg?.removeEventListener('click', handleOpenGraphicModal('plant'));
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
      >
        <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-20'>
          pore space
        </Text>
        <div className='relative overflow-hidden'>
          <PoreSpaceSvg />
          {popup.gas && (
            <GasPhaseSvg className='absolute top-[11%] left-[10%] transform -translate-y-1/4 w-[120%] pointer-events-none' />
          )}
          {popup.solid && (
            <SolidPhaseSvg className='absolute top-1/4 left-1/2 transform -translate-y-1/4 w-1/4 pointer-events-none' />
          )}
          {popup.liquid && <LiquidPhaseSvg className='absolute top-[31%] left-[15%] w-[30%] pointer-events-none' />}
        </div>
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
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div className='space-y-4'>
            <Text type='h1' weight='light' size='xl' className='text-pink-500 text-center'>
              {modalTypeMap[modalType].title}
            </Text>

            <div className='w-1/2 mx-auto'>{modalTypeMap[modalType].image}</div>

            <Text type='p' weight='medium' size='lg' className='text-pink-500 text-center'>
              {modalTypeMap[modalType].heading}
            </Text>
            <Text type='p' weight='light' size='lg' className='text-center'>
              {modalTypeMap[modalType].text}
            </Text>
          </div>
        </ReactModal>
      )}
    </>
  );
};
