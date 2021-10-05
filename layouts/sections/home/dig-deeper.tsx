import { Section, Button, Image, Text } from 'design-system/atoms';
import Link from 'next/link';

import styles from './dig-deeper.module.css';

export function DigDeeperSection() {
  return (
    <Section className='relative'>
      <Image
        url='/Home_Page/Dig_Deeper_soil_pit_real_deal_lf55pw1nJoc.jpg'
        loading='lazy'
        className={`scale-150 object-cover sm:scale-100 ${styles['bg__img']}`}
        transformation={[{ fo: 'auto' }]}
      />
      <div className='container absolute top-0 left-0 h-full w-full'>
        <div className='p-12 flex flex-col justify-between h-full w-full sm:h-auto sm:w-max sm:p-0 sm:block sm:relative sm:left-[32%] sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-10'>
          <Text type='h2' weight='regular' size='3xl' color='white'>
            want to know more?
          </Text>
          <Text
            type='h1'
            weight='medium'
            size='5xl'
            color='white'
            className='relative text-center left-20 sm:static sm:text-left sm:left-0 sm:mb-10'
          >
            dig deeper
          </Text>
          <div className='mx-auto sm:mx-0 sm:pl-[30%]'>
            <Link href='/soil-101/soil-nexus'>
              <Button as='link' size='lg' type='secondary' label='dig in' />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
