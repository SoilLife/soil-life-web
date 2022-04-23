// components
import { Text } from 'design-system/atoms';

// assets
import FinalFrontierSvg from 'public/images/soil-101/biology/final_frontier.svg';

import styles from '../soil-101.module.css';

export const FinalFrontierSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className={styles['section']}>
      {/* <Text type='h1' weight='bold' size='4xl' color='teal' className={styles['heading']}>
        soil: the final frontier
      </Text>

      <Text type='p' weight='light' size='md' className={styles['p-80']}>
        soil is home to{' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          1/4 of the world’s biodiversity
        </Text>{' '}
        with billions of microscopic organisms in a single teaspoon.{' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          95-99%
        </Text>{' '}
        of these{' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          microorganisms
        </Text>{' '}
        have yet to be discovered, making soils a major frontier in
        <Text type='span' weight='bold' size='md' color='teal'>
          genetic discovery!
        </Text>{' '}
        they{' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          decompose
        </Text>{' '}
        waste,{' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          recycle
        </Text>{' '}
        nutrients,{' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          detoxify
        </Text>{' '}
        contaminants,{' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          store
        </Text>{' '}
        carbon, and{' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          build
        </Text>{' '}
        structure that resists flooding and drought.
      </Text> */}
      <Text
        id='final-frontier'
        type='h1'
        weight='bold'
        size='4xl'
        color='teal'
        className={`${styles['anchor']} ${styles['heading']}`}
      >
        soil: the final frontier
      </Text>
      <FinalFrontierSvg />

      {/* <Text type='p' weight='light' size='md' className={`text-center ${styles['p-80']}`}>
        "essentially,{' '}
        <Text type='span' weight='bold' size='md' color='pink'>
          all life depends upon the soil...
        </Text>{' '}
        there can be no life without soil and{' '}
        <Text type='span' weight='bold' size='md' color='pink'>
          no soil without life;
        </Text>{' '}
        they have evolved together."{' '}
        <Text type='span' weight='light' size='md' color='pink'>
          - charles kellogg
        </Text>
      </Text> */}
    </div>
  );
};
