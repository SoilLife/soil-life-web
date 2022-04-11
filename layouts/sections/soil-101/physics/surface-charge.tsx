import { useState, useRef, useEffect, useCallback } from 'react';

// components
import { Text } from 'design-system/atoms';
import ReactModal from 'react-modal';
import { SurfaceChargeModal } from './modals/surface-charge';

// assets
import SurfaceAreaSvg from 'public/images/soil-101/physics/surface_area.svg';
import SurfaceAreaChargedSvg from 'public/images/soil-101/physics/surface_area_charged.svg';

import styles from '../soil-101.module.css';

const modalMap = {
  highSurfaceArea: (
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
  waterHoldingCapacity: (
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
  electricallyCharged: (
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

const classNames = ['cursor-pointer', 'hover:opacity-50', 'active:opacity-100'];

export const SurfaceChargeSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [type, setType] = useState<
    'cation exchange' | 'waterHoldingCapacity' | 'highSurfaceArea' | 'electricallyCharged' | null
  >(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(function (modalType: typeof type) {
    return () => {
      setType(modalType);
    };
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;
    const highSurfaceArea = imgRef.current.querySelector('#surface_area_charged_svg__e') as SVGGElement;
    if (highSurfaceArea) {
      highSurfaceArea.classList.add(...classNames);
      highSurfaceArea.tabIndex = 0;
      highSurfaceArea.addEventListener('click', handleClick('highSurfaceArea'));
    }

    const electricallyCharged = imgRef.current.querySelector('#surface_area_charged_svg__d') as SVGGElement;
    if (electricallyCharged) {
      electricallyCharged.classList.add(...classNames);
      electricallyCharged.tabIndex = 0;
      electricallyCharged.addEventListener('click', handleClick('electricallyCharged'));
    }

    return () => {
      highSurfaceArea?.removeEventListener('click', handleClick('highSurfaceArea'));
      electricallyCharged?.removeEventListener('click', handleClick('electricallyCharged'));
    };
  }, [handleClick]);

  function handleModalClose() {
    setType(null);
  }

  return (
    <>
      <div ref={props.assignRef} className={styles['section']}>
        <Text type='h1' weight='bold' size='4xl' color='yellow' className={`${styles['heading']}`}>
          surface charge
        </Text>
        <div className='flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-center'>
          <Text type='p' weight='thin' size='md' className={`flex-shrink-0 sm:w-3/5`}>
            the smaller the particles, the greater the surface area. the smallest particles, clays, not only have high
            surface area, but carry an electrical charge, as well.
          </Text>
          <SurfaceAreaSvg className='max-w-[834px]' />
        </div>
        <div ref={imgRef}>
          <SurfaceAreaChargedSvg />
        </div>
        <Text type='p' weight='thin' size='md' className='sm:w-1/2'>
          the large, charged surface of clays creates nutrient and water-holding capacity that can hold valuable
          resources against losses to gravity (or leaching).
        </Text>
        <div className='flex flex-col space-between gap-10 sm:gap-20 sm:flex-row'>
          <div className='flex-grow'>
            <button onClick={handleClick('cation exchange')} className='h-full w-full hover:opacity-50'>
              <img src='/images/soil-101/physics/clay_cec.svg' />
            </button>
          </div>
          <div className='flex-grow'>
            <button onClick={handleClick('waterHoldingCapacity')} className='h-full w-full hover:opacity-50'>
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
