// components
import { Text } from 'design-system/atoms';

// assets
import TriangleSvg from 'public/images/soil-101/biology/biodegradation_triangle.svg';
import ProfileSvg from 'public/images/soil-101/biology/biodegradation_profile.svg';

export const BiodegradationSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='bold' size='4xl' className='text-teal-500 mb-10 sm:mb-20'>
        biodegradation
      </Text>
      <div className='text-center grid grid-cols-3 gap-4 max-h-[950px]'>
        <div className='col-span-full sm:col-span-2'>
          <Text type='p' weight='light' size='sm' className='mb-10'>
            as with plant and animal residues, microbes in the soil have the ability to break down organic compounds,
            considered toxic to humans. they can even transform heavy metals into less toxic or less mobile forms.
          </Text>

          <Text type='p' weight='bold' size='md' className='text-teal-500'>
            so what's with all the pollution?
          </Text>
          <Text type='p' weight='light' size='sm'>
            a microbe’s ability to degrade toxic substances is controlled by:
          </Text>
        </div>

        <div className='col-span-2 grid place-items-center sm:row-start-2'>
          <TriangleSvg />
        </div>
        <div className='sm:row-span-2 sm:row-start-1 sm:col-start-3'>
          <ProfileSvg className='mx-auto max-h-[950px]' />
        </div>
      </div>
    </div>
  );
};
