import { Section, Image, Typography } from 'components/atoms';

export function OurMissionSection() {
  return (
    <Section>
      <div className='flex flex-col-reverse h-full sm:grid sm:grid-cols-5'>
        <div className='flex flex-col items-center justify-center p-4 text-center sm:p-8 sm:col-span-2 sm:space-y-10'>
          <Typography type='subheading' className='mb-4 text-pink-400'>
            Our Mission
          </Typography>
          <div className='space-y-4 sm:space-x-0 2xl:max-w-md'>
            <div className='flex space-x-4 text-left sm:space-x-0 sm:text-center sm:flex-col'>
              <h3 className='text-2xl text-pink-400 font-acre-regular'>1</h3>
              <Typography type='paragraph'>
                to inspire the next generation of soil explorers for the benefit of all
              </Typography>
            </div>

            <div className='flex space-x-4 text-left sm:space-x-0 sm:text-center sm:flex-col'>
              <h3 className='text-2xl text-pink-400 font-acre-regular'>2</h3>
              <Typography type='paragraph'>
                to educate that soils are living bodies that harbor a diversity of life, and support and sustain life as
                we know it
              </Typography>
            </div>

            <div className='flex space-x-4 text-left sm:space-x-0 sm:text-center sm:flex-col'>
              <h3 className='text-2xl text-pink-400 font-acre-regular'>3</h3>
              <Typography type='paragraph'>
                to empower young people with solutions to some of our greatest global challenges; solutions that lie
                right beneath our feet!
              </Typography>
            </div>
          </div>
        </div>
        <Image
          className='origin-top-left transform sm:col-span-3'
          url='/About_Us/About_Us_Our_mission_OIGaEwKm7.jpeg'
        />
      </div>
    </Section>
  );
}
