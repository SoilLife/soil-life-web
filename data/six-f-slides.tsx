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

export const slides: (CardSixFProps & {
  photoUrl: string;
  imageClassname?: string;
})[] = [
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
    imageClassname:
      'transform object-left scale-[2] translate-x-[10%] translate-y-[30%] sm:scale-[1.75] sm:translate-x-[25%]',
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
    imageClassname: 'object-[10%40%] sm:transform sm:scale-[2] sm:translate-x-1/2 sm:object-[25%] xl:translate-x-1/4]',
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
    imageClassname: 'object-top',
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
    imageClassname: 'scale-125 translate-y-[-20%] lg:translate-y-[-10%]',
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
    imageClassname: 'object-[10%50%] sm:object-[50%80%]',
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
    imageClassname: 'scale-125 translate-x-[-10%]',
  },
];
