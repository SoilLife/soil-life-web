// components
import { Text } from 'design-system/atoms';

// assets
import BiodegradationSvg from 'public/images/soil-101/biology/biodegradation.svg';

export const BiodegradationSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
        biodegradation
      </Text>
      <div className='flex'>
        <div>
          <Text type='p' weight='light' size='sm' className='mb-10'>
            as with plant and animal residues, microbes in the soil have the ability to break down organic compounds,
            considered toxic to humans. they can even transform heavy metals into less toxic or less mobile forms.
          </Text>

          <Text type='p' weight='bold' size='md' className='text-teal-500 text-center'>
            so what's with all the pollution?
          </Text>
          <Text type='p' weight='light' size='sm'>
            a microbe’s ability to degrade toxic substances is controlled by:
          </Text>
        </div>
      </div>
      <BiodegradationSvg />
    </div>
  );
};
