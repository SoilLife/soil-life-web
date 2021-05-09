import { IKImage } from 'imagekitio-react';
import { Button } from 'components/atoms/button';
import Link from 'next/link';

export function SixFSection() {
  return (
    <section className='h-screen flex overflow-y-hidden overflow-x-auto'>
      <div className='w-full flex-shrink-0 relative flex flex-col justify-between'>
        <div className='relative w-96 h-40 shadow-lg top-32 z-10 mx-auto bg-white'>
          <div className='h-full text-center grid place-items-center p-6'>
            <p>soils are the fundamental to life on earth.</p>
            <p className='mb-8'>
              if you <span className='text-pink-500 text-xl'>eat food</span> you depend on soil
            </p>
            <Link href='/web-of-soil'>
              <Button type='danger' label={'find out more'} />
            </Link>
          </div>
        </div>
        <IKImage path='/6f-food_em6W4ZDdAUl.jpg' loading='lazy' lqip={{ active: true }} />
      </div>
      <div className='w-full flex-shrink-0'></div>
      <div className='w-full flex-shrink-0'></div>
      <div className='w-full flex-shrink-0'></div>
      <div className=' w-full flex-shrink-0'></div>
      <div className=' w-full flex-shrink-0'></div>
    </section>
  );
}
