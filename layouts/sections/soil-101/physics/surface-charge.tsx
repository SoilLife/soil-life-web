import { useState, useRef, useEffect, useCallback } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';

// assets
import SurfaceAreaSvg from 'public/images/soil-101/physics/surface_area.svg';
import SurfaceAreaChargedSvg from 'public/images/soil-101/physics/surface_area_charged.svg';
import PermanentChargeSvg from 'public/images/soil-101/physics/permanent_charge.svg';
import CationExchangeSvg from 'public/images/soil-101/physics/cation_exchange_capacity.svg';

import styles from '../soil-101.module.css';

const modalMap = {
  'cation exchange': {
    title: 'cation exchange',
    description:
      'cations are positively charged ions. cation exchange capacity is the number of negatively charged sites (on clays or organic matter) that can hold onto these ions.',
    image: {
      type: 'svg',
      element: <CationExchangeSvg className='mx-auto sm:w-1/2' />,
    },
    reverseContent: true,
  },
  'high surface area': {
    title: 'surface area',
    description:
      'the smaller the particles, the greater the surface area. the smallest particles, clays, not only have high surface area, but carry an electrical charge, as well.',
    image: {
      type: 'svg',
      element: <SurfaceAreaSvg className='mx-auto max-h-[457px] sm:w-1/2' />,
    },
    reverseContent: true,
  },
  'water holding capacity': {
    title: 'water holding capacity',
    description:
      'the amount of water that a soil can hold against gravity, driven by clay and organic matter content -- water molecules attracted to negatively charged particles.',
    image: {
      type: 'img',
      url: '/images/soil-101/physics/water_holding.png',
    },
    reverseContent: true,
  },
  'electrically charged': {
    title: '',
    description: (
      <>
        <Text type='p' weight='thin' size='xs'>
          clay minerals are composed of <b>silica tetrahedra</b> (silica bound to 4 oxygen atoms) and{' '}
          <b>aluminum octahedra</b> (aluminum surrounded by 6 oxygens or hydroxyls: OH<sup>-</sup>) layered in sheets
          (1:1, 2:1, etc.). when these minerals form, silica (4<sup>+</sup>) is often substituted for aluminum (3
          <sup>+</sup>) or aluminum (3<sup>+</sup>) is substituted for magnesium (2<sup>+</sup> or iron (2<sup>+</sup>
          ). this creates a charge imbalance, which leaves the mineral with a permanent negative charge, allowing
          positively charged cations to bind to clays.
        </Text>
      </>
    ),
    image: {
      type: 'svg',
      element: <PermanentChargeSvg className='mx-auto w-3/4' />,
    },
  },
} as const;

export const SurfaceChargeSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [type, setType] = useState<keyof typeof modalMap | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  const openModal = useCallback(function (modalType: typeof type) {
    return () => {
      setType(modalType);
    };
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;

    const svgs: [string, typeof type][] = [
      ['#surface_area_charged_svg__e', 'high surface area'],
      ['#surface_area_charged_svg__d', 'electrically charged'],
    ];

    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: imgRef.current?.querySelector(id) ?? null,
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
  }, [openModal]);

  function handleModalClose() {
    setType(null);
  }

  return (
    <>
      <div ref={props.assignRef} className={styles['section']}>
        <Text
          id='charge'
          type='h1'
          weight='bold'
          size='4xl'
          color='yellow'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          surface charge
        </Text>
        <Text type='p' weight='thin' size='md' className='text-center'>
          of the 3 particle sizes, clays are considered the “active” portion of soil. they have higher total surface
          area and, like magnets, are often electrically charged, allowing chemical reactions to occur on their large
          surfaces
        </Text>

        <div ref={imgRef}>
          <SurfaceAreaChargedSvg />
        </div>
        <Text type='p' weight='thin' size='md' className='sm:w-1/2'>
          the large, charged surface of clays creates nutrient and water-holding capacity that can hold valuable
          resources against losses to gravity (or leaching).
        </Text>
        <div className='flex flex-col space-between gap-10 sm:gap-20 sm:flex-row'>
          <div className='flex-grow'>
            <button onClick={openModal('cation exchange')} className='h-full w-full hover:opacity-50'>
              <img src='/images/soil-101/physics/clay_cec.svg' />
            </button>
          </div>
          <div className='flex-grow'>
            <button onClick={openModal('water holding capacity')} className='h-full w-full hover:opacity-50'>
              <img src='/images/soil-101/physics/clay_whc.svg' />
            </button>
          </div>
        </div>
      </div>

      {type && <GenericModal {...modalMap[type]} onClose={handleModalClose} />}
    </>
  );
};
