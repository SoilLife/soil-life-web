import { Section, Button, Image } from 'components/atoms';
import Link from 'next/link';

export function GetInvolvedSection() {
  return (
    <Section>
      <Image url='/Home_Page/AdobeStock_144874490_6lpeJS0jbCq.jpg' className='object-cover' />
      <div className='absolute left-1/2 transform -translate-x-1/2 w-full max-w-5xl flex flex-col items-center justify-between text-white bottom-10 sm:flex-row sm:bottom-1/4'>
        <div>
          <p className='mb-6 text-3xl sm:text-4xl'>soil does so much for us,</p>
          <p className='mb-6 text-4xl sml:text-5xl font-acre-semibold'>
            find out what you <br /> can do for soil!
          </p>
        </div>
        <div>
          <Link href='/get-involved'>
            <Button as='link' size='md' type='secondary' label='get involved' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
