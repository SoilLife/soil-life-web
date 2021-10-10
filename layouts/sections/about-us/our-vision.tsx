import { Section, Image } from 'design-system/atoms';

function Title(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h2
      className={`text-orange-500 font-acre-regular text-[40px] leading-[39px] xl:text-[60px] 2xl:text-[70px] ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </h2>
  );
}

function Paragraph(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p
      className={`font-acre-light text-[18px] leading-[30px] xl:leading-[45px] xl:text-[30px] 2xl:text-[36px] ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </p>
  );
}

export function OurVisionSection() {
  return (
    <Section className='relative'>
      <div className='h-2/3 sm:h-1/2 lg:h-full'>
        <Image url='/About_Us/Sunset_Yellow_Farm_Crops_Agriculture_iIMzdc_Nn8v.jpg' className='object-cover' />
      </div>
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      sm:static sm:transform-none
      lg:absolute lg:transform'
      >
        <div
          className='p-5 bg-white rounded-3xl shadow-lg text-center mx-auto w-[286px]
           sm:w-auto sm:max-w-md sm:shadow-none sm:rounded-none sm:p-20
          lg:w-[712px] lg:p-8 lg:max-w-none
          xl:w-[863px] lg:py-12
        '
        >
          <Title className='mb-10'>our vision</Title>
          <Paragraph>
            a world in which people love and protect the soil upon which we all depend; a world where consumers value
            products grown in healthy soils; where agriculture regenerates, rather than degrades, the soil, and
            businesses find profitable ways to source products without external environmental costs.
          </Paragraph>
        </div>
      </div>
    </Section>
  );
}
