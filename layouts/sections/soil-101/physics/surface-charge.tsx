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
      'clays are the smallest particle size, but because so many more clay particles can fit in a given volume of soil, a space filled with clay has 1000x the surface area as the same amount of space filled with sand.',
    image: {
      type: 'svg',
      element: <SurfaceAreaSvg className='mx-auto max-h-[457px] sm:w-1/2' />,
    },
    reverseContent: true,
  },
  'water holding capacity': {
    title: 'water holding capacity',
    description:
      'the amount of water that a soil can hold against gravity -- water molecules are attracted to negatively charged particles on clays (and organic matter).',
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
          clay minerals are composed of <b>silica tetrahedra</b> and <b>aluminum octahedra</b> layered in sheets (1:1,
          2:1, etc.). when these minerals form, silica (4<sup>+</sup>) is often substituted for aluminum (3<sup>+</sup>)
          or aluminum (3<sup>+</sup>) is substituted for magnesium (2<sup>+</sup>) or iron (2<sup>+</sup>). this creates
          a charge imbalance, which leaves the mineral with a permanent negative charge.
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
          weight='light'
          size='4xl'
          color='yellow'
          className={styles['heading']}
         
        >
          clay properties
        </Text>
        <Text type='p' weight='thin' size='md' className='text-center'>
          clays are considered the “active” portion of soil. they have higher total surface
          area and are often electrically charged (like magnets), allowing physical and chemical reactions to occur on their surfaces.
        </Text>

        <div ref={imgRef}>
          <SurfaceAreaChargedSvg />
        </div>
        
        
        <Text type='p' weight='thin' size='md' className='text-center'>
          the large, charged surface of clays can hold onto water and nutrients; preventing their loss to gravity (or leaching). the amount and type of clays in a given soil largely determines its water and nutrient holding (or cation exchange) capacity.
        </Text>
          <div className='flex-grow'>
            <button onClick={openModal('water holding capacity')} className='h-full w-full hover:opacity-50'>
              <img src='/images/soil-101/physics/clay_whc.svg' />
            </button>
           </div>
        <div className='flex flex-col space-between gap-10 sm:gap-20 sm:flex-row'>
          <div className='flex-grow'>
            <button onClick={openModal('cation exchange')} className='h-full w-full hover:opacity-50'>
              <img src='/images/soil-101/physics/clay_cec.svg' />
            </button>
          </div>
          </div>
      </div>

      {type && <GenericModal {...modalMap[type]} onClose={handleModalClose} />}
    </>
  );
};
