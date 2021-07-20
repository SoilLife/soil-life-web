import { Section, Button, Image } from 'design-system/atoms';
import Link from 'next/link';

export function GetInvolvedSection() {
  return (
    <Section>
      <Image url='/Home_Page/AdobeStock_144874490_6lpeJS0jbCq.jpg' className='object-cover' />
      <div className='px-10 absolute bottom-10 w-full flex flex-col lg:items-center lg:flex-row 2xl:space-x-20'>
        <div className='text-white'>
          <p className='font-acre-light text-[80px] leading-none'>soil does so much for us,</p>
          <p className='mb-6 font-acre-bold text-[80px] leading-none'>
            find out what you <br /> can do for soil!
          </p>
        </div>
        <Link href='/get-involved'>
          <Button
            as='link'
            size='md'
            type='secondary'
            label='get involved'
            className='font-acre-semibold text-[50px] h-[85px] w-max inline-flex items-center whitespace-nowrap'
          />
        </Link>
      </div>
    </Section>
  );
}
