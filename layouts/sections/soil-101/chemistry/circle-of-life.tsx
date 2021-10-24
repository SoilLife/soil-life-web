// components
import { Text } from 'design-system/atoms';

// assets
import CircleOfLifeSvg from 'public/images/soil-101/chemistry/circle_of_life.svg';

import styles from '../soil-101.module.css';

export const CircleOfLifeSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className={styles['section']}>
      <Text type='h1' weight='bold' size='4xl' color='orange' className={styles['heading']}>
        circle of life
      </Text>

      <CircleOfLifeSvg />
    </div>
  );
};
