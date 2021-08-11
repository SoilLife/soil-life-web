import { Section, Button, Image, Text } from 'design-system/atoms';
import Link from 'next/link';

export function GetInvolvedSection() {
  return (
    <Section>
      <Image url='/Home_Page/AdobeStock_144874490_6lpeJS0jbCq.jpg' className='object-cover' />
      <div className='px-10 absolute bottom-10 w-full flex flex-col lg:items-center lg:flex-row lg:space-x-10 2xl:space-x-20'>
        <div className='text-white tw-space-y-6'>
          <Text type='h2' weight='light' size='3xl'>
            soil does so
          </Text>
          <Text type='h2' weight='light' size='3xl'>
            much for us,
          </Text>
          <Text type='h2' weight='bold' size='3xl'>
            find out what you
          </Text>
          <Text type='h2' weight='bold' size='3xl'>
            can do for soil!
          </Text>
        </div>
        <Link href='/get-involved'>
          <Button as='link' size='lg' type='secondary' label='get involved' />
        </Link>
      </div>
    </Section>
  );
}
