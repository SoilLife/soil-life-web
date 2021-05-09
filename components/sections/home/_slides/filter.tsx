import { Card6F } from 'components/atoms/card-six-f';

export function FilterSlide() {
  return (
    <div className='w-full flex-shrink-0'>
      <Card6F
        className='top-32'
        icon='/images/web-of-soil/filter_white.svg'
        type='primary'
        subtext='soils are the fundamental to life on earth.'
        text={
          <>
            if you <span className='text-blue-500 text-xl'>drink water</span> you depend on soil
          </>
        }
        href='/web-of-soil/filter'
        button={{
          as: 'link',
          size: 'md',
          type: 'primary',
          label: 'find out how',
        }}
      />
      <img src='/images/home/6f-filter.png' />
    </div>
  );
}
