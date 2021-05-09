import { Button } from 'components/atoms/button';
import Link from 'next/link';

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
              <Button type='danger' label='find out more' />
            </Link>
          </div>
        </div>
        <img src='/images/home/grass-roots.png' width='800' height='100%' />
      </div>
    </section>
  );
}
