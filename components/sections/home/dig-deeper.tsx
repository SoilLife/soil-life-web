import { Section, Button, Image } from 'components/atoms';
import Link from 'next/link';

export function DigDeeperSection() {
  return (
    <Section data-anchor='dig-deeper'>
      <Image url='/Home_Page/Dig_Deeper_soil_pit_real_deal_lf55pw1nJoc.jpg' loading='lazy' />
      <div className='absolute text-white bottom-1/4 left-1/4'>
        <p className='text-4xl'>want to know more?</p>
        <p className='mb-6 text-5xl'>dig deeper</p>
        <div className='text-center'>
          <Link href='#'>
            <Button as='link' size='md' type='secondary' label='dig in' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
