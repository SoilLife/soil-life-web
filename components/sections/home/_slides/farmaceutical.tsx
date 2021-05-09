import { Card6F } from 'components/atoms/card-six-f';

export function FarmaceuticalSlide() {
  return (
    <div className='w-full flex-shrink-0'>
      <Card6F
        className='top-32'
        icon='/images/web-of-soil/farmaceutical_white.svg'
        type='alert'
        subtext='soils are the fundamental to life on earth.'
        text={
          <>
            if you <span className='text-orange-500 text-xl'>use medicine</span> you depend on soil
          </>
        }
        href='/web-of-soil/farmaceutical'
        button={{
          as: 'link',
          size: 'md',
          type: 'alert',
          label: 'find out how',
        }}
      />
      <img src='/images/home/6f-farmaceutical.png' />
    </div>
  );
}
