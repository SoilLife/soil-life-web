// components
import { Text } from 'design-system/atoms';

// assets
import WaterDynamicsSvg from 'public/images/soil-101/physics/water_dynamics.svg';

import styles from '../soil-101.module.css';

export const WaterDynamicsSection = () => {
  return (
    <div className={styles['section']}>
      <Text type='h1' weight='light' size='4xl' color='yellow' className={styles['heading']}>
        water dynamics
      </Text>
      <WaterDynamicsSvg />
    </div>
  );
};
