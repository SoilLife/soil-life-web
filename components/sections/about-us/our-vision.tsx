import { Section, Image, Typography } from 'components/atoms';

export function OurVisionSection() {
  return (
    <Section>
      <div className='h-full'>
        <Image url='/About_Us/Sunset_Yellow_Farm_Crops_Agriculture_iIMzdc_Nn8v.jpg' className='object-cover' />
        <div className='absolute w-full p-10 mx-auto space-y-10 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white sm:max-w-md top-1/2 left-1/2'>
          <Typography type='subheading' className='text-orange-400 '>
            Our Vision
          </Typography>
          <Typography type='paragraph'>
            a world in which people love and protect the soil upon which we all depend; a world where consumers value
            products grown in healthy soils; where agriculture regenerates, rather than degrades, the soil, and
            businesses find profitable ways to source products without external environmental costs.
          </Typography>
        </div>
      </div>
    </Section>
  );
}
