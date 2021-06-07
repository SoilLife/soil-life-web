import { Section, Image } from 'components/atoms';

export function OurMissionSection() {
  return (
    <Section>
      <div className='grid h-full grid-cols-5'>
        <div className='flex flex-col items-center justify-center col-span-2 p-8 space-y-10 text-center'>
          <h2 className='text-3xl text-pink-400 font-acre-regular'>Our Mission</h2>

          <div>
            <h3 className='text-2xl text-pink-400 font-acre-regular'>1</h3>
            <p className='font-acre-thin'>to inspire the next generation of soil explorers for the benefit of all</p>
          </div>

          <div>
            <h3 className='text-2xl text-pink-400 font-acre-regular'>2</h3>
            <p className='font-acre-thin'>
              to educate that soils are living bodies that harbor a diversity of life, and support and sustain life as
              we know it
            </p>
          </div>

          <div>
            <h3 className='text-2xl text-pink-400 font-acre-regular'>3</h3>
            <p className='font-acre-thin'>
              to empower young people with solutions to some of our greatest global challenges; solutions that lie right
              beneath our feet!
            </p>
          </div>
        </div>
        <Image className='col-span-3' url='/About_Us/About_Us_Our_mission_OIGaEwKm7.jpeg' />
      </div>
    </Section>
  );
}
