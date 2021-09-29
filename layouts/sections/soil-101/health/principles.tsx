// components
import { Text } from 'design-system/atoms';

// assets

export const PrinciplesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='bold' size='4xl' className='text-blue-500 mb-8 sm:mb-20'>
        principles of soil health
      </Text>
      <Text type='p' weight='bold' size='2xl' className='text-pink-500 text-center'>
        keep it active and well-fed!
      </Text>
    </div>
  );
};
