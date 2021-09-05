import { Section, Button, Image, Text } from 'design-system/atoms';
import Link from 'next/link';

export function DigDeeperSection() {
  return (
    <Section className='relative'>
      <Image
        url='/Home_Page/Dig_Deeper_soil_pit_real_deal_lf55pw1nJoc.jpg'
        loading='lazy'
        className='object-cover'
        transformation={[{ fo: 'auto' }]}
      />
      <div className='container absolute top-0 left-0 text-white flex flex-col items-center justify-evenly h-full w-full sm:block sm:top-1/4 sm:left-4 xl:top-auto xl:left-1/4 xl:bottom-1/4 sm:h-auto sm:w-auto xl:transform xl:-translate-x-1/4'>
        <div>
          <Text type='h2' weight='regular' size='3xl' className='mb-6 max-w-[158px] sm:static sm:mx-0 sm:max-w-full'>
            want to know more?
          </Text>
          <Text type='h1' weight='medium' size='5xl' className='max-w-[317px] sm:static sm:mb-20 sm:max-w-full'>
            dig deeper
          </Text>
        </div>
        <div className='text-center sm:static'>
          <Link href='/soil-101/soil-nexus'>
            <Button as='link' size='lg' type='secondary' label='dig in' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
