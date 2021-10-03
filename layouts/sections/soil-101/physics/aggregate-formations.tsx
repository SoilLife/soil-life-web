// components
import { Text } from 'design-system/atoms';

// assets
import AggregateFormationsSvg from 'public/images/soil-101/physics/aggregate_formations.svg';

import styles from '../soil-101.module.css';

export const AggregateFormationSection = () => {
  return (
    <div className={styles['section']}>
      <Text type='h1' weight='light' size='3xl' color='yellow' className={styles['heading']}>
        aggregate formations
      </Text>
      <AggregateFormationsSvg />
    </div>
  );
};
