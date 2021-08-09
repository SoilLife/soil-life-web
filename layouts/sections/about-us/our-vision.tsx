import { Section, Image, Text } from 'design-system/atoms';

export function OurVisionSection() {
  return (
    <Section>
      <Image
        url='/About_Us/Sunset_Yellow_Farm_Crops_Agriculture_iIMzdc_Nn8v.jpg'
        className={`h-2/3 sm:h-1/2 object-cover
      xl:h-full
      `}
      />
      <div
        className={`sm:flex sm:items-center sm:justify-center sm:h-1/2 sm:w-full
      xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2`}
      >
        <div
          className={`p-4 bg-white rounded-3xl shadow-lg text-center max-w-xs mx-auto transform -translate-y-28
        sm:translate-y-0 sm:max-w-lg sm:shadow-none sm:rounded-none
        xl:max-w-2xl xl:p-10
        2xl:max-w-5xl`}
        >
          <Text type='h1' weight='regular' size='2xl' className='text-orange-500 mb-4 sm:mb-10'>
            our vision
          </Text>
          <Text type='p' weight='light' size='md'>
            a world in which people love and protect the soil upon which we all depend; a world where consumers value
            products grown in healthy soils; where agriculture regenerates, rather than degrades, the soil, and
            businesses find profitable ways to source products without external environmental costs.
          </Text>
        </div>
      </div>
    </Section>
  );
}
