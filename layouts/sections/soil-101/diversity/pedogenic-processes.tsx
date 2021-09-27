// components
import { Text } from 'design-system/atoms';

// assets
import PedogenicProcessesSvg from 'public/images/soil-101/diversity/pedogenic_processes.svg';

export const PedogenicProcessesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='light' size='4xl' className='text-gray-500 mb-20'>
        pedogenic processes
      </Text>
      <PedogenicProcessesSvg />
    </div>
  );
};
