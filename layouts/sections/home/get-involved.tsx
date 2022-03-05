import { Section, Button, Image, Text } from 'design-system/atoms';
import Link from 'next/link';

import styles from './get-involved.module.css';

export function GetInvolvedSection() {
  return (
    <Section className='relative'>
      <Image
        url='/Home_Page/AdobeStock_144874490_6lpeJS0jbCq.jpg'
        className={`absolute scale-150 object-cover sm:scale-100 ${styles['bg__img']}`}
      />
      <div className='relative container h-full w-full'>
        <div
          className='px-10 absolute bottom-10 left-0 w-full flex flex-col
        md:bottom-20 md:space-y-10 md:items-center md:justify-center
        xl:space-y-0 xl:justify-between xl:flex-row'
        >
          <div className='mb-6 lg:mb-0 xl:w-full'>
            <Text
              type='h2'
              weight='light'
              color='white'
              size='4xl'
              className={`mb-4 max-w-[220px] sm:mb-0 sm:max-w-none sm:whitespace-nowrap ${styles['text']}`}
            >
              soil does so much for us,
            </Text>
            <Text type='h2' weight='bold' color='white' size='4xl' className={styles['text']}>
              find out what you
            </Text>
            <Text type='h2' weight='bold' color='white' size='4xl' className={styles['text']}>
              can do for soil!
            </Text>
          </div>
          <div className='xl:w-full'>
            <div className='text-center lg:text-left lg:pl-[15%]'>
              <Link href='/get-involved'>
                <Button as='link' size='lg' type='secondary' label='get involved' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
