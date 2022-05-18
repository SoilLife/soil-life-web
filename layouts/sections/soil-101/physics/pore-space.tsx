import { useRef, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

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
    text: 'when all pores are full of water; the excess water lost to gravity',
  },
  plant: {
    title: 'plant available water',
    image: <PlantAvailableWaterSvg className='mx-auto max-h-[35vh]' />,
    heading: 'field capacity',
    text: 'this is the water available for plant uptake/growth',
  },
  hygroscopic: {
    title: 'hygroscopic water',
    image: <HygroscopicWaterSvg className='mx-auto max-h-[35vh]' />,
    heading: 'wilting point',
    text: 'only water remaining is bound to clays; not available for plants',
  },
};

export const PoreSpaceSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  useFullpageOverflow();
  const isMobile = useMedia('(max-width: 640px)');
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    function showPopup(popupSvg: SVGGElement | null) {
      return () => {
        if (!popupSvg) return;
        popupSvg.classList.toggle('hidden');
      };
    }

    const sectionContainer = sectionRef.current;
    const modalSvgs: [string, typeof modalType][] = [
      ['#pore_space_svg__Layer_5', 'hygroscopic'],
      ['#pore_space_svg__Layer_3', 'gravitational'],
      ['#pore_space_svg__Layer_4', 'plant'],
    ];
    const popupSvgs: [string, string][] = [
      ['#pore_space_svg__Layer_2', '#pore_space_svg__Layer_10'],
      ['#pore_space_svg__Layer_9-2', '#pore_space_svg__Layer_11'],
      ['.pore_space_svg__cls-2', '#pore_space_svg__Layer_12'],
    ];

    const interactiveModalSvgs = modalSvgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );
    const interactivePopupSvgs = popupSvgs.map(([id, popupId]) => {
      const popupSvg = sectionContainer.querySelector(popupId) as SVGGElement | null;
      popupSvg?.classList?.add('hidden');
      return makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: showPopup(popupSvg),
        onKeydown: showPopup(popupSvg),
        ariaLabel: `show popup`,
        classList: ['focus:fill-pink-200', 'hover:fill-pink-200'],
      });
    });

    return () => {
      interactiveModalSvgs.forEach((svg) => svg?.unmount());
      interactivePopupSvgs.forEach((svg) => svg?.unmount());
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
          id='pore-space'
          type='h1'
          weight='bold'
          size='4xl'
          color='yellow'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          pore space
        </Text>
        <Text type='p' weight='thin' size='md' className={styles['p-60']}>
          the open space between soil particles and aggregates. the more pore space, the less dense the soil, and the easier for roots to grow and air/water to flow.
        </Text>
        <PoreSpaceSvg className='mx-auto lg:max-w-[50vw]' />
      </div>
      {modalType && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            overlay: { zIndex: 2 },
            content: {
              inset: isMobile ? '40px 0 0 0' : '10%',
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button aria-label='Close Modal' className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div className='h-full grid place-items-center text-center'>
            <div className='space-y-4'>
              <Text type='h1' weight='bold' size='2xl' color='pink'>
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
          </div>
        </ReactModal>
      )}
    </>
  );
};
