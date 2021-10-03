// components
import { Text } from 'design-system/atoms';

// assets
import DecompositionSvg from 'public/images/soil-101/chemistry/decomposition.svg';

import styles from '../soil-101.module.css';

export const DecompositionSection = () => {
  return (
    <div className={styles['section']}>
      <Text type='h1' weight='light' size='4xl' color='orange' className={styles['heading']}>
        decomposition
      </Text>
      <DecompositionSvg />
    </div>
  );
};
