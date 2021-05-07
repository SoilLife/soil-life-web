import DefaultLayout from 'layouts/default';
import Image from 'next/image';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className='relative flex-grow grid grid-cols-2 grid-rows-2'>
        <div className='relative aspect-w-16 aspect-h-9'>
          <Image src='/images/desert-landscape.png' layout='fill' className='' />
        </div>
        <div className='relative aspect-w-16 aspect-h-9'>
          <Image src='/images/aerial-land-heat-map.png' layout='fill' className='' />
        </div>
        <div className='relative aspect-w-16 aspect-h-9'>
          <Image src='/images/monarch-butterflies.png' layout='fill' className='' />
        </div>
        <div className='relative aspect-w-16 aspect-h-9'>
          <Image src='/images/aerial-mountains-and-clouds.png' layout='fill' className='' />
        </div>
        <div className='absolute inset-0 flex gap-4 items-center justify-center text-white'>
          <div>
            <p className='text-5xl mb-2'>atmosphere</p>
            <p className='text-5xl mt-2'>biosphere</p>
          </div>
          <div
            className='h-64 w-64 rounded-full border-2 border-solid border-white flex flex-col items-center justify-center bg-center bg-cover'
            style={{
              backgroundImage: "url('/images/aerial-land-heat-map.png')",
            }}
          >
            <p className='text-5xl'>soil</p>
            <p className='text-4xl'>is the</p>
            <p className='text-5xl'>nexus</p>
          </div>
          <div>
            <p className='text-5xl mb-2'>hydrosphere</p>
            <p className='text-5xl mt-2'>lithosphere</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
