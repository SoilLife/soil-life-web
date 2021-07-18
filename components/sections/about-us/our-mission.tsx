import { Section, Image } from 'components/atoms';

export function OurMissionSection() {
  return (
    <Section>
      <div className='flex flex-col-reverse h-full sm:grid sm:grid-cols-5'>
        <div className='flex flex-col items-center justify-center p-4 text-center sm:p-8 sm:col-span-2 sm:space-y-10'>
          <h1 className='mb-4 text-pink-500 text-[70px] font-acre-regular'>our mission</h1>
          <div className='space-y-10 sm:space-x-0 2xl:max-w-md'>
            <div className='flex space-x-4 text-left sm:space-x-0 sm:text-center sm:flex-col'>
              <h3 className='text-pink-500 font-acre-regular text-[50px]'>1</h3>
              <p className='font-acre-light text-[30px]'>
                to inspire the next generation of soil explorers for the benefit of all
              </p>
            </div>

            <div className='flex space-x-4 text-left sm:space-x-0 sm:text-center sm:flex-col'>
              <h3 className='text-pink-500 font-acre-regular text-[50px]'>2</h3>
              <p className='font-acre-light text-[30px]'>
                to educate that soils are living bodies that harbor a diversity of life, and support and sustain life as
                we know it
              </p>
            </div>

            <div className='flex space-x-4 text-left sm:space-x-0 sm:text-center sm:flex-col'>
              <h3 className='text-pink-500 font-acre-regular text-[50px]'>3</h3>
              <p className='font-acre-light text-[30px]'>
                to empower young people with solutions to some of our greatest global challenges; solutions that lie
                right beneath our feet!
              </p>
            </div>
          </div>
        </div>
        <Image
          className='origin-top-left transform sm:col-span-3 object-cover'
          url='/About_Us/About_Us_Our_mission_OIGaEwKm7.jpeg'
        />
      </div>
    </Section>
  );
}
