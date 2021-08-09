import { Section, Image, Text } from 'design-system/atoms';

export function OurStorySection() {
  return (
    <Section>
      <div className='relative h-full flex flex-col xl:flex-row'>
        <Image
          className={`absolute top-0 left-0 h-1/3 object-cover
          sm:static sm:h-1/2
          xl:h-full xl:w-1/2
          `}
          url='/About_Us/About_Us_Our_Story_BVF_XwsIqxs_V.jpeg'
        />
        <div
          className={`z-10 max-w-xs mx-auto flex items-center justify-center w-full h-full transform translate-y-6 
     sm:translate-y-0 sm:max-w-lg
     xl:max-w-2xl
     2xl:max-w-3xl
          `}
        >
          <div
            className={`p-4 bg-white text-center rounded-3xl shadow-xl
          sm:shadow-none
          `}
          >
            <Text type='h1' weight='regular' size='2xl' className='text-teal-500 mb-4 xl:mb-10'>
              our story
            </Text>
            <div className='space-y-2 xl:space-y-8'>
              <Text type='p' weight='thin' size='sm'>
                in 2015, graduate students at University of California, Davis were invited to a hearing on the state
                Healthy Soils Initiative. listening to the various stakeholders, they witnessed first hand the power of
                storytelling to captivate an audience, but also the challenges of communicating uncertainty and nuance
                regarding the dynamic nature of soil.
              </Text>
              <Text type='p' weight='thin' size='sm'>
                capitalizing on the momentum of the UN International Year of Soil, they started a seminar to discuss and
                develop science communication. the seminar evolved into a campaign to raise awareness about the value
                and importance of soil, which caught the attention of the Natural Resource Conservation Service and
                ultimately, led to a collaboration to produce this website and the tools housed within it.
              </Text>
              <Text type='p' weight='thin' size='sm'>
                the project caught the attention of the Natural Resource Conservation Service and ultimately, led to a
                collaboration to produce this website and the tools housed within it.
              </Text>{' '}
              <Text type='p' weight='thin' size='sm'>
                we hope you dig it!
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
