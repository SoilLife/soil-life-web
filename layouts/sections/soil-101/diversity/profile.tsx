// components
import { Text } from 'design-system/atoms';

// assets
import ProfileSvg from 'public/images/soil-101/diversity/soil_profile.svg';

export const ProfileSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='light' size='2xl' className='text-gray-500 mb-20'>
        soil profile
      </Text>
      <div className='flex items-center'>
        <Text type='p' weight='light' size='sm' className='w-1/2 text-center'>
          the distinct layers that develop are called{' '}
          <Text type='span' weight='bold' size='sm'>
            horizons
          </Text>
          , and they provide both a{' '}
          <Text type='span' weight='bold' size='sm'>
            history of the landscape
          </Text>{' '}
          and an indication of how a{' '}
          <Text type='span' weight='bold' size='sm'>
            soil might function
          </Text>{' '}
          in the present.{' '}
          <Text type='span' weight='semibold' size='sm'>
            soils are classified into 12 groups
          </Text>{' '}
          based on these similar layers, features, and behaviors.
        </Text>
        <ProfileSvg className='w-1/2' />
      </div>
    </div>
  );
};
