import { Section, Button, Image, Text } from 'design-system/atoms';
import Link from 'next/link';
import { useMedia } from 'react-use';

import styles from './get-involved.module.css';

export function GetInvolvedSection() {
  const isMobile = useMedia('(max-width: 640px)');
  return (
    <Section>
      <Image
        url='/Home_Page/AdobeStock_144874490_6lpeJS0jbCq.jpg'
        className={`scale-150 object-cover sm:scale-100 ${styles['bg__img']}`}
      />
      <div className='px-10 absolute bottom-10 w-full flex flex-col lg:items-center lg:flex-row lg:justify-between'>
        <div className='mb-6 w-full lg:mb-0'>
          <Text
            type='h2'
            weight='light'
            color='white'
            size={isMobile ? 'xl' : '4xl'}
            className='mb-4 max-w-[220px] sm:mb-0 sm:max-w-none sm:whitespace-nowrap'
          >
            soil does so much for us,
          </Text>
          <Text type='h2' weight='bold' color='white' size={isMobile ? 'xl' : '4xl'}>
            find out what you
          </Text>
          <Text type='h2' weight='bold' color='white' size={isMobile ? 'xl' : '4xl'}>
            can do for soil!
          </Text>
        </div>
        <div className='w-full'>
          <div className='text-center lg:text-left lg:pl-[15%]'>
            <Link href='/get-involved'>
              <Button as='link' size='lg' type='secondary' label='get involved' />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
