import { Button } from 'components/atoms/button';
import Link from 'next/link';
import { IKImage } from 'imagekitio-react';

export function AboutUsSection() {
  return (
    <section className='h-screen overflow-hidden'>
      <div className='container h-full flex justify-center items-center gap-8'>
        <div className='max-w-sm'>
          <h1 className='text-teal-500 text-3xl mb-6'>about us</h1>
          <p className='text-lg mb-6'>
            we are on a mission to change the way the world looks at soil-digging into what’s dirty and calling into
            question what’s clean. we believe in change from the ground up! by starting at the root of some of our most
            pressing global issues, we aim to promote environmental and human health across the globe!
          </p>
          <div className='text-center'>
            <Link href='/about-us'>
              <Button as='link' size='md' type='danger' label='find out more' />
            </Link>
          </div>
        </div>
        <IKImage path='/Home_Page/grass_roots_pnwdrMGcq.jpeg' lqip={{ active: true }} loading='lazy' width='800px' />
      </div>
    </section>
  );
}
