// components
import { Text } from 'design-system/atoms';

// assets
import MineralWeatheringSvg from 'public/images/soil-101/chemistry/microbial_weathering.svg';

import styles from '../soil-101.module.css';

export const MineralWeatheringSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className={styles['section']}>
      <Text
        id='weathering'
        type='h1'
        weight='bold'
        size='4xl'
        color='orange'
        className={`${styles['anchor']} ${styles['heading']}`}
      >
        mineral weathering
      </Text>
      <MineralWeatheringSvg className='mx-auto lg:max-w-[75vw]' />
    </div>
  );
};
