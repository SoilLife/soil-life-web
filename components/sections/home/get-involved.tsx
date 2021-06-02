import { Section, Button, Image } from 'components/atoms';
import Link from 'next/link';

export function GetInvolvedSection() {
  return (
    <Section data-anchor='get-involved'>
      <Image url='/Home_Page/AdobeStock_144874490_6lpeJS0jbCq.jpg' />
      <div className='container absolute left-0 flex items-center justify-between w-full text-white bottom-1/4'>
        <div>
          <p className='mb-6 text-4xl'>soil does so much for us,</p>
          <p className='text-5xl font-acre-semibold'>
            find out what you <br /> can do for soil!
          </p>
        </div>
        <div className='pr-60'>
          <Link href='/get-involved'>
            <Button as='link' size='md' type='secondary' label='get involved' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
