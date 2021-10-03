// components
import { Text } from 'design-system/atoms';

// assets
import MineralWeatheringSvg from 'public/images/soil-101/chemistry/microbial_weathering.svg';

import styles from '../soil-101.module.css';

export const MineralWeatheringSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className={styles['section']}>
      <Text type='h1' weight='bold' size='4xl' color='orange' className={styles['heading']}>
        mineral weathering
      </Text>
      <MineralWeatheringSvg />
    </div>
  );
};
