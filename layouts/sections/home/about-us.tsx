import { Section, Image, Button } from 'design-system/atoms';
import Link from 'next/link';

export function AboutUsSection() {
  return (
    <Section className='relative max-w-app-full mx-auto'>
      <div className='text-center space-y-4 flex flex-col items-center justify-center h-full xl:max-w-[615px] xl:space-y-10'>
        <h1 className='font-acre-regular text-teal-500 text-[40px] sm:text-[80px] xl:text-left xl:w-full'>about us</h1>
        <p className='text-lg sm:text-4xl  xl:text-left'>
          we are on a mission to change the way the world looks at soil-digging into what’s dirty and calling into
          question what’s clean.
        </p>
        <Image
          url='/Home_Page/grass_roots_pnwdrMGcq.jpeg'
          className='max-h-[320px] w-full object-cover sm:object-contain xl:absolute xl:right-0 xl:object-cover xl:max-h-full xl:max-w-[50%]'
        />
        <p className='text-lg sm:text-4xl  xl:text-left'>
          we believe in change from the ground up! by starting at the root of some of our most pressing global issues,
          we aim to promote environmental and human health across the globe!
        </p>
        <div className='text-center'>
          <Link href='/about-us'>
            <Button as='link' size='md' type='danger' label='learn more' className='text-[34px]' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
