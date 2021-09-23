// components
import { Text } from 'design-system/atoms';

// assets
import NitrogenFixation1Svg from 'public/images/soil-101/biology/nitrogen_fixation_1.svg';
import NitrogenFixation2Svg from 'public/images/soil-101/biology/nitrogen_fixation_2.svg';
import NitrogenFixation3Svg from 'public/images/soil-101/biology/nitrogen_fixation_3.svg';

export const NitrogenFixationSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
        nitrogen fixation
      </Text>
      <NitrogenFixation1Svg />
      <NitrogenFixation2Svg />
      <NitrogenFixation3Svg />
    </div>
  );
};
