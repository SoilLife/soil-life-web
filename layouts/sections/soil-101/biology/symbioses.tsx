// components
import { Text } from 'design-system/atoms';

// assets
import BetterTogetherSvg from 'public/images/soil-101/biology/better_together.svg';

import styles from '../soil-101.module.css';

export const SymbiosesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className={styles['section']}>
      <Text
        id='symbioses'
        type='h1'
        weight='bold'
        size='4xl'
        color='teal'
        className={`${styles['anchor']} ${styles['heading']}`}
      >
        symbioses
      </Text>
      <BetterTogetherSvg className='w-1/2 mx-auto' />
    </div>
  );
};
