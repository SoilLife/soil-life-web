import { IKImage } from 'imagekitio-react';
import { Card6F } from 'components/atoms/card-six-f';

export function FoodSlide() {
  return (
    <div className='w-full flex-shrink-0'>
      <Card6F
        className='top-32'
        icon='/images/web-of-soil/food_white.svg'
        type='danger'
        subtext='soils are the fundamental to life on earth.'
        text={
          <>
            if you <span className='text-pink-500 text-xl'>eat food</span> you depend on soil
          </>
        }
        href='/web-of-soil/food'
        button={{
          as: 'link',
          size: 'md',
          type: 'danger',
          label: 'find out how',
        }}
      />
      <IKImage path='/6f-food_em6W4ZDdAUl.jpg' loading='lazy' lqip={{ active: true }} />
    </div>
  );
}
