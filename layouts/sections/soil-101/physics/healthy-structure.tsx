// components
import { Text } from 'design-system/atoms';

// assets
import AggregationSvg from 'public/images/soil-101/physics/healthy_structure_aggregation.svg';
import RootsSvg from 'public/images/soil-101/physics/healthy_structure_roots.svg';
import MicrobesSvg from 'public/images/soil-101/physics/healthy_structure_microbes.svg';

import styles from '../soil-101.module.css';

export const HealthyStructureSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className={styles['section']}>
      <Text type='h1' weight='light' size='4xl' color='yellow' className={styles['heading']}>
        healthy structure
      </Text>
      <div className='sm:pl-20'>
        <AggregationSvg />
        <RootsSvg />
        <MicrobesSvg />
      </div>
    </div>
  );
};
