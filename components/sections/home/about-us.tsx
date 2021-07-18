import { Section, Image, Button } from 'components/atoms';
import Link from 'next/link';

export function AboutUsSection() {
  return (
    <Section>
      <div className='h-full'>
        <div className='flex flex-col-reverse items-center justify-center w-full h-full p-6 lg:space-x-8 lg:flex-row'>
          <div className='w-[615px]'>
            <h1 className='font-acre-regular text-teal-500 text-[80px] mb-10'>about us</h1>
            <p className='text-4xl'>
              we are on a mission to change the way the world looks at soil-digging into what’s dirty and calling into
              question what’s clean.
            </p>
            <br />
            <p className='text-4xl'>
              we believe in change from the ground up! by starting at the root of some of our most pressing global
              issues, we aim to promote environmental and human health across the globe!
            </p>
            <div className='text-center mt-40'>
              <Link href='/about-us'>
                <Button as='link' size='md' type='danger' label='learn more' className='text-[34px]' />
              </Link>
            </div>
          </div>
          <div className='w-full lg:w-[1000px]'>
            <Image url='/Home_Page/grass_roots_pnwdrMGcq.jpeg' className='object-cover' />
          </div>
        </div>
      </div>
    </Section>
  );
}
