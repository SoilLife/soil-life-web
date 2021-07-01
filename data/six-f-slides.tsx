import { CardSixFProps } from 'components/atoms/card-six-f/card-six-f.interfaces';

const commonProps = {
  subtext: 'soils are the fundamental to life on earth.',
  button: {
    as: 'link' as 'link',
    size: 'md' as 'md',
    label: 'find out how',
  },
};

export const slides: (CardSixFProps & { photoUrl: string })[] = [
  {
    ...commonProps,
    icon: '/images/web-of-soil/food_white.svg',
    type: 'danger',
    text: (
      <>
        if you <span className='text-pink-500 text-xl'>eat food</span> you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'danger',
    },
    href: '/web-of-soil/food',
    photoUrl: '/6Fs/brooke-lark-08bOYnH_r_E-unsplash_Nsw5XgGxU.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/fiber_white.svg',
    type: 'warning',
    text: (
      <>
        if you <span className='text-warning-500 text-xl'>wear clothes</span> you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'warning',
    },
    href: '/web-of-soil/fiber',
    photoUrl: '/6Fs/Fiber-2-Intro_xAvzmC6CB.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/filter_white.svg',
    type: 'primary',
    text: (
      <>
        if you <span className='text-blue-500 text-xl'>drink water</span> you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'primary',
    },
    href: '/web-of-soil/filter',
    photoUrl: '/6Fs/Filter-3_YElVtnQWZ.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/filter_white.svg',
    type: 'primary',
    text: (
      <>
        if you <span className='text-blue-500 text-xl'>breathe air</span> you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'primary',
    },
    href: '/web-of-soil/filter',
    photoUrl: '/6Fs/Filter-2_qJOgH5RmKJ9.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/foundation_white.svg',
    type: 'neutral',
    text: (
      <>
        if you <span className='text-xl'>live in a shelter</span> you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'neutral',
    },
    href: '/web-of-soil/foundation',
    photoUrl: '/6Fs/Foundations-3_kT7-NUBCw.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/farmaceutical_white.svg',
    type: 'alert',
    text: (
      <>
        if you <span className='text-orange-500 text-xl'>use medicine</span> you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'alert',
    },
    href: '/web-of-soil/farmaceutical',
    photoUrl: '/6Fs/Farmaceuticals_Slide_Vw_NSlVnt.jpg',
  },
  {
    ...commonProps,
    icon: '/images/web-of-soil/fun_white.svg',
    type: 'success',
    text: (
      <>
        if you <span className='text-teal-500 text-xl'>enjoy the outdoors</span> you depend on soil
      </>
    ),
    button: {
      ...commonProps.button,
      type: 'success',
    },
    href: '/web-of-soil/fun',
    photoUrl: '/6Fs/Fun-2_NepidzuqS.jpg',
  },
];
