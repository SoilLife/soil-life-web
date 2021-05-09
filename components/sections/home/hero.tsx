import { IKImage } from 'imagekitio-react';
export function HeroSection() {
  return (
    <section className='h-screen overflow-hidden'>
      <div className='relative h-full'>
        <IKImage path='/hero-image_krcg4dlr7pr.jpg' loading='lazy' lqip={{ active: true }} />
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
