import { Section, Image, Button } from 'components/atoms';
import Link from 'next/link';

export function AboutUsSection() {
  return (
    <Section data-anchor='about-us'>
      <div className='container flex items-center justify-center h-full gap-8'>
        <div className='max-w-sm'>
          <h1 className='mb-6 text-3xl text-teal-500'>about us</h1>
          <p className='mb-6 text-lg'>
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
        <Image url='/Home_Page/grass_roots_pnwdrMGcq.jpeg' width='800' />
      </div>
    </Section>
  );
}
