import { Button } from 'components/atoms/button';
import Link from 'next/link';

export function GetInvolvedSection() {
  return (
    <section
      className='h-screen overflow-hidden bg-cover'
      style={{
        backgroundImage: 'url("/images/home/get-involved.jpg")',
      }}
    >
      <div className='h-full relative text-white'>
        <div className='container flex justify-between items-center w-full absolute left-0 bottom-1/4'>
          <div>
            <p className='text-5xl mb-6'>soil does so much for us,</p>
            <p className='text-6xl font-acre-semibold'>
              find out what you <br /> can do for soil!
            </p>
          </div>
          <div className='pr-60'>
            <Link href='/get-involved'>
              <Button type='secondary' label='get involved' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
