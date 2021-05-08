import Image from 'next/image';

export function SixFSection() {
  return (
    <section className='h-screen flex overflow-x-auto'>
      <div className='w-full flex-shrink-0 relative flex flex-col justify-between'>
        <div className='relative w-1/3 h-1/4 shadow-lg top-56 z-10 mx-auto bg-white '>
          <div className='h-full text-center grid place-items-center'>
            <p>soils are the fundamental to life on earth.</p>
            <p>
              if you <span className='text-pink-500'>eat food</span> you depend on soil
            </p>
            <button>find out more</button>
          </div>
        </div>
        <Image src='/images/home/6f-food.jpg' layout='fill' />
      </div>
      <div className='bg-pink-400 w-full flex-shrink-0'></div>
      <div className='bg-blue-400 w-full flex-shrink-0'></div>
      <div className='bg-yellow-400 w-full flex-shrink-0'></div>
      <div className='bg-teal-400 w-full flex-shrink-0'></div>
      <div className='bg-brown-400 w-full flex-shrink-0'></div>
    </section>
  );
}
