import { Section, Image, Button, Text } from 'design-system/atoms';
import Link from 'next/link';

export function AboutUsSection() {
  return (
    <Section className='container'>
      <div className='text-center py-6 grid place-items-center h-full lg:py-0 lg:max-w-4xl lg:mx-auto xl:hidden'>
        <Text type='h1' weight='regular' size='4xl' color='teal'>
          about us
        </Text>
        <Text type='p' weight='light' size='md' className='leading-normal'>
          we are on a mission to change the way the world looks at soil-digging into what’s dirty and calling into
          question what’s clean.
        </Text>
        <Image url='/Home_Page/grass_roots_pnwdrMGcq.jpeg' className='object-contain max-h-full' />
        <Text type='p' weight='light' size='md' className='leading-normal'>
          we believe in change from the ground up! by starting at the root of some of our most pressing global issues,
          we aim to promote environmental and human health across the globe!
        </Text>
        <Link href='/about-us'>
          <Button as='link' size='md' type='danger' label='learn more' />
        </Link>
      </div>

      <div className='hidden text-left h-full w-full xl:flex'>
        <div className='w-1/2 pl-[10%] flex-grow flex flex-col justify-center space-y-10'>
          <Text type='h1' weight='regular' size='4xl' color='teal' className='w-full'>
            about us
          </Text>
          <Text type='p' weight='light' size='md' className='leading-normal'>
            we are on a mission to change the way the world looks at soil-digging into what’s dirty and calling into
            question what’s clean.
          </Text>
          <Text type='p' weight='light' size='md' className='leading-normal'>
            we believe in change from the ground up! by starting at the root of some of our most pressing global issues,
            we aim to promote environmental and human health across the globe!
          </Text>
          <div className='text-center'>
            <Link href='/about-us'>
              <Button as='link' size='md' type='danger' label='learn more' />
            </Link>
          </div>
        </div>
        <Image url='/Home_Page/grass_roots_pnwdrMGcq.jpeg' className='object-contain w-1/2' />
      </div>
    </Section>
  );
}
