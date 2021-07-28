import { Section, Image, Button, Text } from 'design-system/atoms';
import Link from 'next/link';

export function AboutUsSection() {
  return (
    <Section className='container relative'>
      <div className='text-center space-y-4 flex flex-col items-center justify-center h-full xl:max-w-[615px] xl:space-y-10'>
        <Text type='h1' weight='regular' size='xl' className='text-teal-500 xl:text-left xl:w-full'>
          about us
        </Text>
        <Text type='p' weight='light' size='sm' className='xl:text-left'>
          we are on a mission to change the way the world looks at soil-digging into what’s dirty and calling into
          question what’s clean.
        </Text>
        <Image
          url='/Home_Page/grass_roots_pnwdrMGcq.jpeg'
          className='w-full object-cover max-h-[320px] sm:object-contain xl:absolute xl:right-0 xl:object-cover xl:max-h-full xl:max-w-[50%]'
        />
        <Text type='p' weight='light' size='sm' className='xl:text-left'>
          we believe in change from the ground up! by starting at the root of some of our most pressing global issues,
          we aim to promote environmental and human health across the globe!
        </Text>
        <div className='text-center'>
          <Link href='/about-us'>
            <Button as='link' size='md' type='danger' label='learn more' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
