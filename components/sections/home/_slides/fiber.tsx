import { Card6F } from 'components/atoms/card-six-f';

export function FiberSlide() {
  return (
    <div className='w-full flex-shrink-0'>
      <Card6F
        className='top-32'
        icon='/images/web-of-soil/fiber_white.svg'
        type='warning'
        subtext='soils are the fundamental to life on earth.'
        text={
          <>
            if you <span className='text-yellow-500 text-xl'>wear clothes</span> you depend on soil
          </>
        }
        href='/web-of-soil/fiber'
        button={{
          as: 'link',
          size: 'md',
          type: 'warning',
          label: 'find out how',
        }}
      />
      <img src='/images/home/6f-fiber.png' />
    </div>
  );
}
