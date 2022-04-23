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

import styles from '../soil-101.module.css';

const modalTypeMap = {
  gravitational: {
    title: 'gravitational water',
    image: <GravitationalWaterSvg className='mx-auto max-h-[35vh]' />,
    heading: 'saturation',
    text: 'all pores are full of water. lost to gravity',
  },
  plant: {
    title: 'plant available water',
    image: <PlantAvailableWaterSvg className='mx-auto max-h-[35vh]' />,
    heading: 'field capacity',
    text: 'available water for plant growth',
  },
  hygroscopic: {
    title: 'hygroscopic water',
    image: <HygroscopicWaterSvg className='mx-auto max-h-[35vh]' />,
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
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function handleOpenGraphicModalClick(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    function handleOpenGraphicModalKeydown(type: typeof modalType) {
      return (event: KeyboardEvent) => {
        if (event.code === 'Enter') {
          setModalType(type);
        }
      };
    }

    function makeInteractive(svg: SVGGElement | null, type: keyof typeof modalTypeMap) {
      if (!svg) return;
      svg.classList.add('cursor-pointer', 'focus:opacity-50', 'hover:opacity-50', 'active:opacity-100');
      svg.tabIndex = 0;
      svg.addEventListener('click', handleOpenGraphicModalClick(type));
      svg.addEventListener('keydown', handleOpenGraphicModalKeydown(type));
      return {
        unmount() {
          svg.removeEventListener('click', handleOpenGraphicModalClick(type));
          svg.removeEventListener('keydown', handleOpenGraphicModalKeydown(type));
        },
      };
    }

    function handlePopupClick(popupSvg: SVGGElement | null) {
      return () => {
        if (!popupSvg) return;
        popupSvg.classList.toggle('hidden');
      };
    }

    function handlePopupKeydown(popupSvg: SVGGElement | null) {
      return (event: KeyboardEvent) => {
        if (!popupSvg) return;
        if (event.code === 'Enter') {
          popupSvg.classList.toggle('hidden');
        }
      };
    }

    function handleShowPopup(svg: SVGGElement | null, popupSvg: SVGGElement | null) {
      if (!svg) return;
      svg.classList?.add(
        'cursor-pointer',
        'focus:fill-pink-100',
        'focus:opacity-50',
        'hover:fill-pink-100',
        'hover:opacity-50',
        'active:opacity-100'
      );
      svg.tabIndex = 0;
      svg.addEventListener('click', handlePopupClick(popupSvg));
      svg.addEventListener('keydown', handlePopupKeydown(popupSvg));
      return {
        unmount() {
          svg.removeEventListener('click', handlePopupClick(popupSvg));
          svg.removeEventListener('keydown', handlePopupKeydown(popupSvg));
        },
      };
    }

    const sectionContainer = sectionRef.current;

    const liquidSvg = sectionContainer.querySelector('#pore_space_svg__Layer_10') as SVGGElement | null;
    const solidSvg = sectionContainer.querySelector('#pore_space_svg__Layer_11') as SVGGElement | null;
    const gasSvg = sectionContainer.querySelector('#pore_space_svg__Layer_12') as SVGGElement | null;

    // initially hide popup
    liquidSvg?.classList?.add('hidden');
    solidSvg?.classList?.add('hidden');
    gasSvg?.classList?.add('hidden');

    const waterAreaSvg = handleShowPopup(sectionContainer.querySelector('#pore_space_svg__Layer_2'), liquidSvg);
    const solidAreaSvg = handleShowPopup(sectionContainer.querySelector('#pore_space_svg__Layer_9-2'), solidSvg);
    const gasAreaSvg = handleShowPopup(sectionContainer.querySelector('.pore_space_svg__cls-2'), gasSvg);

    const hygroscopicSvg = makeInteractive(sectionContainer.querySelector('#pore_space_svg__Layer_5'), 'hygroscopic');
    const gravitationalSvg = makeInteractive(
      sectionContainer.querySelector('#pore_space_svg__Layer_3'),
      'gravitational'
    );
    const plantAvailableSvg = makeInteractive(sectionContainer.querySelector('#pore_space_svg__Layer_4'), 'plant');
    return () => {
      waterAreaSvg?.unmount();
      solidAreaSvg?.unmount();
      gasAreaSvg?.unmount();

      hygroscopicSvg?.unmount();
      gravitationalSvg?.unmount();
      plantAvailableSvg?.unmount();
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
        <Text
          id='pore-space'
          type='h1'
          weight='bold'
          size='4xl'
          color='yellow'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          pore space
        </Text>
        <PoreSpaceSvg />
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
            overlay: {
              zIndex: 2,
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div className='space-y-4 text-center'>
            <Text type='h1' weight='light' size='xl' color='pink'>
              {modalTypeMap[modalType].title}
            </Text>

            <div className='w-1/2 mx-auto'>{modalTypeMap[modalType].image}</div>

            <Text type='p' weight='medium' size='lg' color='pink'>
              {modalTypeMap[modalType].heading}
            </Text>
            <Text type='p' weight='light' size='lg'>
              {modalTypeMap[modalType].text}
            </Text>
          </div>
        </ReactModal>
      )}
    </>
  );
};
