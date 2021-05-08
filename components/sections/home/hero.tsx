import Image from 'next/image';

export function HeroSection() {
  return (
    <section className='h-screen w-full'>
      <div className='relative h-full'>
        <Image src='/images/home/hero-image.jpg' layout='responsive' width='1920' height='1080' />
        <div className='absolute text-white text-6xl bottom-1/4 w-1/2 transform translate-x-1/2 right-1/2'>
          <p className='mb-6 font-acre-medium'>
            we all share <br />
            common ground.
          </p>
          <div className='bg-pink-500 text-xl p-1'>
            <p>
              <span>get dirty.</span> <span>get connected.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
