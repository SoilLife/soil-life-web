import { CardSixFProps } from 'design-system/atoms/card-six-f/card-six-f.interfaces';
import { Text } from 'design-system/atoms';
import { ButtonProps } from 'design-system/atoms/button/button.interfaces';

const commonProps: {
  subtext: string;
  button: ButtonProps;
} = {
  subtext: 'soils are fundamental to life on earth.',
  button: {
    as: 'link',
    size: 'md',
    type: 'primary',
    label: 'find out how',
  },
};

export const slides: (CardSixFProps & { photoUrl: string; position?: 'bottom' | 'left-bottom' })[] = [
  {
    ...commonProps,
    icon: '/images/web-of-soil/food_white.svg',
    type: 'danger',
    text: (
      <>
        if you{' '}
        <Text type='span' weight='light' size='lg' className='text-pink-500'>
          eat food
        </Text>{' '}
        you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'danger',
    },
    href: '/web-of-soil?section=food',
    photoUrl: '/6Fs/brooke-lark-08bOYnH_r_E-unsplash_Nsw5XgGxU.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/fiber_white.svg',
    type: 'warning',
    text: (
      <>
        if you{' '}
        <Text type='span' weight='light' size='lg' className='text-yellow-500'>
          wear clothes
        </Text>{' '}
        you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'warning',
    },
    href: '/web-of-soil?section=fiber',
    photoUrl: '/6Fs/Fiber-2-Intro_xAvzmC6CB.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/filter_white.svg',
    type: 'primary',
    text: (
      <>
        if you{' '}
        <Text type='span' weight='light' size='lg' className='text-blue-500'>
          drink water
        </Text>{' '}
        you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'primary',
    },
    href: '/web-of-soil?section=filter',
    photoUrl: '/6Fs/Filter-3_YElVtnQWZ.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/filter_white.svg',
    type: 'primary',
    text: (
      <>
        if you{' '}
        <Text type='span' weight='light' size='lg' className='text-blue-500'>
          breathe air
        </Text>{' '}
        you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'primary',
    },
    href: '/web-of-soil?section=filter',
    photoUrl: '/6Fs/Filter-2_qJOgH5RmKJ9.jpg',
    position: 'bottom',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/foundation_white.svg',
    type: 'neutral',
    text: (
      <>
        if you{' '}
        <Text type='span' weight='light' size='lg'>
          live in a shelter
        </Text>{' '}
        you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'neutral',
    },
    href: '/web-of-soil?section=foundation',
    photoUrl: '/6Fs/Foundations-3_kT7-NUBCw.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/farmaceutical_white.svg',
    type: 'alert',
    text: (
      <>
        if you{' '}
        <Text type='span' weight='light' size='lg' className='text-orange-500'>
          use medicine
        </Text>{' '}
        you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'alert',
    },
    href: '/web-of-soil?section=farmaceutical',
    photoUrl: '/6Fs/cup_of_pills_ioFvZZ0lo.png',
    position: 'left-bottom',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/fun_white.svg',
    type: 'success',
    text: (
      <>
        if you{' '}
        <Text type='span' weight='light' size='lg' className='text-teal-500'>
          enjoy the outdoors
        </Text>{' '}
        you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'success',
    },
    href: '/web-of-soil?section=fun',
    photoUrl: '/6Fs/Fun-2_NepidzuqS.jpg',
  },
];
