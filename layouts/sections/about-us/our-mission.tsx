import { Section, Image } from 'design-system/atoms';

function Title(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h2
      className={`text-pink-500 font-acre-regular text-[40px] leading-[39px] xl:text-[60px] 2xl:text-[70px] ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </h2>
  );
}

function NumberItem(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h4
      className={`text-pink-500 font-acre-regular text-[24px] xl:text-[40px] 2xl:text-[50px] ${props.className ?? ''}`}
    >
      {props.children}
    </h4>
  );
}

function Paragraph(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p
      className={`font-acre-light text-[18px] leading-[30px] xl:leading-[36px] xl:text-[24px] 2xl:text-[30px] ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </p>
  );
}

export function OurMissionSection() {
  return (
    <Section>
      <div className='lg:flex lg:flex-row-reverse lg:h-full'>
        <div className='h-[50vh] overflow-hidden lg:h-auto'>
          <Image
            url='/About_Us/About_Us_Our_mission_OIGaEwKm7.jpeg'
            className='scale-125 object-cover object-center lg:scale-100 xl:scale-125'
          />
        </div>
        <div
          className='bg-white p-5 absolute bottom-6 left-1/2 -translate-x-1/2 rounded-3xl shadow-xl text-center w-[353px]
          sm:static sm:h-full sm:translate-x-0 sm:rounded-none sm:shadow-none sm:w-auto sm:flex sm:flex-col sm:items-center sm:justify-center sm:max-w-md sm:mx-auto
          lg:h-auto lg:w-[527px] lg:max-w-none lg:p-8
          xl:w-[645px]'
        >
          <Title className='lg:mb-8 xl:mb-10'>our mission</Title>
          <div className='lg:space-y-6 xl:space-y-8'>
            <div>
              <NumberItem>1</NumberItem>
              <Paragraph>to inspire the next generation of soil explorers for the benefit of all</Paragraph>
            </div>

            <div>
              <NumberItem>2</NumberItem>
              <Paragraph>
                to educate that soils are living bodies that harbor a diversity of life, and support and sustain life as
                we know it
              </Paragraph>
            </div>

            <div>
              <NumberItem>3</NumberItem>
              <Paragraph className='w-[277px] mx-auto sm:w-auto'>
                to empower young people with solutions to some of our greatest global challenges; solutions that lie
                right beneath our feet!
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
