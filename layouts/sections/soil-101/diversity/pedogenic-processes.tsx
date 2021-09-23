import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import PedogenicProcessesSvg from 'public/images/soil-101/diversity/pedogenic_processes.svg';

export const PedogenicProcessesSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-gray-500 mb-20'>
        pedogenic processes
      </Text>

      <PedogenicProcessesSvg />
    </div>
  );
});
