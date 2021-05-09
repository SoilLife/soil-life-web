import { Card6F } from 'components/atoms/card-six-f';

export function FoundationSlide() {
  return (
    <div className='w-full flex-shrink-0'>
      <Card6F
        className='top-32'
        icon='/images/web-of-soil/foundation_white.svg'
        type='neutral'
        subtext='soils are the fundamental to life on earth.'
        text={
          <>
            if you <span className='text-brown-500 text-xl'>live in a shelter</span> you depend on soil
          </>
        }
        href='/web-of-soil/foundation'
        button={{
          as: 'link',
          size: 'md',
          type: 'neutral',
          label: 'find out how',
        }}
      />
      <img src='/images/home/6f-foundation.png' />
    </div>
  );
}
