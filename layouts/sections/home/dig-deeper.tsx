import { Section, Button, Image } from 'design-system/atoms';
import Link from 'next/link';

export function DigDeeperSection() {
  return (
    <Section className='relative'>
      <Image url='/Home_Page/Dig_Deeper_soil_pit_real_deal_lf55pw1nJoc.jpg' loading='lazy' className='object-cover' />
      <div className='container absolute text-white flex flex-col justify-evenly top-0 left-0 h-full w-full sm:block sm:top-1/4 sm:left-4 xl:top-auto xl:left-1/4 xl:bottom-1/4 sm:h-auto sm:w-auto xl:transform xl:-translate-x-1/4'>
        <p className='font-acre-regular text-[50px] max-w-[158px] mx-auto sm:mx-0 sm:max-w-full sm:text-[70px] leading-none'>
          want to know more?
        </p>
        <p className='font-acre-medium  text-[70px] max-w-[317px] sm:max-w-full sm:text-[90px] leading-none mb-10'>
          dig deeper
        </p>
        <div className='text-center'>
          <Link href='/soils-101'>
            <Button as='link' size='md' type='secondary' label='dig in' className='text-[40px] py-1' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
