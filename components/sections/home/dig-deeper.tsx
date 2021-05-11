import { Button } from 'components/atoms/button';
import Link from 'next/link';

export function DigDeeperSection() {
  return (
    <section
      className='h-screen overflow-hidden bg-cover'
      style={{
        backgroundImage: `url("https://ik.imagekit.io/q9koofhilw/Home_Page/Dig_Deeper_soil_pit_real_deal_lf55pw1nJoc.jpg")`,
      }}
    >
      <div className='container h-full text-white z-10 relative'>
        <div className='absolute bottom-1/4 left-1/4'>
          <p className='text-4xl'>want to know more?</p>
          <p className='text-5xl mb-6'>dig deeper</p>
          <div className='text-center'>
            <Link href='#'>
              <Button as='link' size='md' type='secondary' label='dig in' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
