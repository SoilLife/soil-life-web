import { Section, Image, Text } from 'design-system/atoms';

export function OurMissionSection() {
  return (
    <Section>
      <div className={`h-full w-full sm:flex sm:flex-col-reverse xl:flex-row`}>
        <div
          className={`absolute h-full w-full flex items-center justify-center
        sm:static`}
        >
          <div
            className={`rounded-3xl shadow-lg bg-white max-w-xs mx-auto p-4 text-center transform translate-y-20
          sm:translate-y-0 sm:max-w-lg sm:shadow-none
          2xl:max-w-3xl`}
          >
            <Text type='h1' weight='regular' size='3xl' className={`text-pink-500 mb-4 sm:mb-10`}>
              our mission
            </Text>
            <div className='space-y-10'>
              <div>
                <Text type='h2' weight='regular' size='xl' className='text-pink-500 mb-4'>
                  1
                </Text>
                <Text type='p' weight='light' size='sm'>
                  to inspire the next generation of soil explorers for the benefit of all
                </Text>
              </div>

              <div>
                <Text type='h2' weight='regular' size='xl' className='text-pink-500 mb-4'>
                  2
                </Text>
                <Text type='p' weight='light' size='sm'>
                  to educate that soils are living bodies that harbor a diversity of life, and support and sustain life
                  as we know it
                </Text>
              </div>

              <div>
                <Text type='h2' weight='regular' size='xl' className='text-pink-500 mb-4'>
                  3
                </Text>
                <Text type='p' weight='light' size='sm'>
                  to empower young people with solutions to some of our greatest global challenges; solutions that lie
                  right beneath our feet!
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Image
          className={`h-1/3 sm:h-1/2 object-cover
        xl:h-full xl:w-1/2`}
          url='/About_Us/About_Us_Our_mission_OIGaEwKm7.jpeg'
        />
      </div>
    </Section>
  );
}
