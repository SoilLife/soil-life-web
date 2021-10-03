// components
import { Text } from 'design-system/atoms';

// assets
import SurfaceChargeSvg from 'public/images/soil-101/physics/surface_area.svg';

import styles from '../soil-101.module.css';

export const SurfaceChargeSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className={styles['section']}>
      <Text type='h1' weight='bold' size='4xl' color='yellow' className={styles['heading']}>
        surface charge
      </Text>
      <div className='flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-center'>
        <Text type='p' weight='thin' size='sm' className={`max-w-lg ${styles['p-38']}`}>
          the smaller the particles, the greater the surface area. the smallest particles, clays, not only have high
          surface area, but carry an electrical charge, as well.
        </Text>
        <SurfaceChargeSvg className='max-w-[834px]' />
      </div>
      <img src='/images/soil-101/physics/surface_areas.png' className='h-full w-full object-contain' />
    </div>
  );
};
