// components
import { Text } from 'design-system/atoms';

// assets
import RhizosphereSvg from 'public/images/soil-101/biology/rhizosphere.svg';
import RhizosphereDetailedSvg from 'public/images/soil-101/biology/rhizosphere_detailed.svg';

export const RhizosphereSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='bold' size='4xl' className='text-teal-500 mb-20'>
        rhizosphere
      </Text>
      <div className='flex items-center'>
        <Text type='p' weight='light' size='lg' className='w-2/5'>
          the{' '}
          <Text type='span' weight='light' size='lg' className='text-teal-500'>
            rhizosphere
          </Text>{' '}
          is a bustling metropolis with billions of organisms in a single teaspoon! it's the area of soil that is in
          close contact with plant roots, where biological activity and turnover provides available nutrients right
          where plants needs them most!
        </Text>
        <RhizosphereSvg className='w-3/5' />
      </div>
      <Text type='h1' weight='bold' size='4xl' className='text-teal-500 mb-20'>
        rhizosphere
      </Text>
      <RhizosphereDetailedSvg />
    </div>
  );
};
