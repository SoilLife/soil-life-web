// components
import { Text } from 'design-system/atoms';

// assets
import SoilFormation from 'public/images/soil-101/nexus/soil_formation.svg';
import styles from '../soil-101.module.css';

export const FormationSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className={styles['section']}>
      <Text type='h1' weight='bold' size='4xl' color='pink' className={styles['heading']}>
        soil formation
      </Text>
      <SoilFormation className='max-h-[668px] mx-auto' />
    </div>
  );
};
