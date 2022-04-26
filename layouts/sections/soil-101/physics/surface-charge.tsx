import { useState, useRef, useEffect, useCallback } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import ReactModal from 'react-modal';
import { SurfaceChargeModal } from './modals/surface-charge';

// assets
import SurfaceAreaSvg from 'public/images/soil-101/physics/surface_area.svg';
import SurfaceAreaChargedSvg from 'public/images/soil-101/physics/surface_area_charged.svg';

import styles from '../soil-101.module.css';

const modalMap = {
  'high surface area': (
    <div className='h-full flex flex-col justify-between text-center gap-10'>
      <div>
        <Text type='h2' weight='light' size='2xl' color='teal'>
          surface area
        </Text>
        <Text type='p' weight='thin' size='md'>
          the smaller the particles, the greater the surface area. the smallest particles, clays, not only have high
          surface area, but carry an electrical charge, as well.
        </Text>
      </div>
      <SurfaceAreaSvg className='mx-auto max-h-[457px]' />
    </div>
  ),
  'water holding capacity': (
    <div className='h-full flex flex-col justify-between text-center'>
      <Text type='h2' weight='light' size='2xl' color='yellow'>
        water-holding capacity
      </Text>

      <Text type='p' weight='thin' size='md'>
        the amount of water that a soil can hold against gravity, driven by clay and organic matter content -- water
        molecules attracted to negatively charged particles
      </Text>
    </div>
  ),
  'electrically charged': (
    <div className='h-full flex flex-col justify-between text-center'>
      <Text type='h2' weight='light' size='2xl' color='teal'>
        clay minerals
      </Text>

      <Text type='p' weight='thin' size='md'>
        in addition to the clay particle size and clay textural class, clay also refers to the minerals that soils are
        made up of. clay minerals are composed of the following compounds organized as
      </Text>

      <div className='flex justify-between gap-10'>
        <Text type='p' weight='thin' size='md'>
          silica bound to 4 oxygen atoms. tetrahedra link up in chains, sheets, or frameworks to form minerals that make
          up much of the earth's crust (~90%).
        </Text>

        <Text type='p' weight='thin' size='md'>
          aluminum surrounded by 6 oxygen or hydroxyls (OH). combine in sheets with silica tetrahedra to form clay
          minerals{' '}
        </Text>
      </div>
    </div>
  ),
};

export const SurfaceChargeSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [type, setType] = useState<'cation exchange' | keyof typeof modalMap | null>(null);
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

      {type === 'cation exchange' ? (
        <SurfaceChargeModal onClose={handleModalClose} type={type} />
      ) : (
        type && (
          <ReactModal
            isOpen
            preventScroll
            shouldCloseOnOverlayClick
            shouldCloseOnEsc
            onRequestClose={handleModalClose}
            style={{ content: { inset: '15%' } }}
          >
            {modalMap[type]}
          </ReactModal>
        )
      )}
    </>
  );
};
