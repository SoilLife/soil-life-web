import { Section, Button, Image } from 'design-system/atoms';
import Link from 'next/link';

export function DigDeeperSection() {
  return (
    <Section>
      <Image url='/Home_Page/Dig_Deeper_soil_pit_real_deal_lf55pw1nJoc.jpg' loading='lazy' className='object-cover' />
      <div className='absolute text-white top-1/4 left-4 xl:top-auto xl:left-80 xl:bottom-1/4 '>
        <p className='font-acre-regular text-[70px] leading-none'>want to know more?</p>
        <p className='font-acre-medium text-[90px] leading-none mb-10'>dig deeper</p>
        <div className='xl:text-center'>
          <Link href='/soils-101'>
            <Button as='link' size='md' type='secondary' label='dig in' className='text-[40px] py-1' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
