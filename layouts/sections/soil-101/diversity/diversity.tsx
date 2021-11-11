// components
import { Text, Image } from 'design-system/atoms';

import styles from '../soil-101.module.css';

export const DiversitySection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className={styles['section']}>
      <Text type='h1' weight='bold' size='4xl' className={styles['heading']}>
        soil diversity
      </Text>
      <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-50']}`}>
        the{' '}
        <Text type='span' weight='bold' size='sm'>
          diversity of soils
        </Text>{' '}
        beneath our feet gives rise to the diversity of{' '}
        <Text type='span' weight='bold' size='sm'>
          plants
        </Text>
        ,{' '}
        <Text type='span' weight='bold' size='sm'>
          animals
        </Text>
        , and{' '}
        <Text type='span' weight='bold' size='sm'>
          ecosystems
        </Text>{' '}
        on earth, which in turn, influence the development of soils!{' '}
        <Text type='span' weight='bold' size='sm'>
          it's all connected.
        </Text>
        .
      </Text>
      <Image url='Soil_101/Diversity_-_Soil_Profiles/soil_diversity_1_QomzKR0K5.png' className='object-fit' />
    </div>
  );
};
