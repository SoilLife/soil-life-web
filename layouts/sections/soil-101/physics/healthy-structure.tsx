// components
import { Text } from 'design-system/atoms';

// assets
import AggregationSvg from 'public/images/soil-101/physics/healthy_structure_aggregation.svg';
import RootsSvg from 'public/images/soil-101/physics/healthy_structure_roots.svg';
import MicrobesSvg from 'public/images/soil-101/physics/healthy_structure_microbes.svg';

export const HealthyStructureSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='light' size='2xl' className='text-yellow-500 mb-20'>
        healthy structure
      </Text>
      <AggregationSvg />
      <RootsSvg />
      <MicrobesSvg />
    </div>
  );
};
