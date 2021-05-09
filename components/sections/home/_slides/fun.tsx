import { Card6F } from 'components/atoms/card-six-f';

export function FunSlide() {
  return (
    <div className='w-full flex-shrink-0'>
      <Card6F
        className='top-32'
        icon='/images/web-of-soil/fun_white.svg'
        type='success'
        subtext='soils are the fundamental to life on earth.'
        text={
          <>
            if you <span className='text-teal-500 text-xl'>enjoy the outdoors</span> you depend on soil
          </>
        }
        href='/web-of-soil/fun'
        button={{
          as: 'link',
          size: 'md',
          type: 'success',
          label: 'find out how',
        }}
      />
      <img src='/images/home/6f-fun.png' />
    </div>
  );
}
