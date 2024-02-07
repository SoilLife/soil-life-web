// components
import { Text } from "ui/atoms";

// assets
import FinalFrontierSvg from "public/images/soil-101/biology/final_frontier.svg";

import styles from "../soil-101.module.css";

export const FinalFrontierSection = (props: {
  assignRef: (el: null | HTMLDivElement) => void;
}) => {
  return (
    <div ref={props.assignRef} className={styles["section"]}>
      {/* <Text type='h1' weight='bold' size='4xl' color='teal' className={styles['heading']}>
        soil: the final frontier 
      </Text>

      <Text type='p' weight='light' size='md' className={styles['p-80']}>
        only 1-5% of soil{' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          microorganisms
        </Text>{' '} 
        have been discovered. {' '}
        <Text type='span' weight='bold' size='md' color='teal'>
          95-99%
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
        id="final-frontier"
        type="h1"
        weight="bold"
        size="4xl"
        color="teal"
        className={`${styles["anchor"]} ${styles["heading"]}`}
      >
        soil: the final frontier
      </Text>
      <FinalFrontierSvg />
    </div>
  );
};
