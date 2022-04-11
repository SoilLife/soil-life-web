import { Section, Image, Text } from 'design-system/atoms';
import { forwardRef } from 'react';

function Paragraph(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p
      className={`font-acre-thin font-[18px] leading-[28px] xl:font-[22px] 2xl:font-[28px] 2xl:leading-[36px] ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </p>
  );
}

export const OurStorySection = forwardRef<HTMLDivElement, {}>(function (_props, ref) {
  return (
    <Section ref={ref}>
      <div className='relative h-full flex flex-col lg:flex-row'>
        <div className='h-1/2 lg:h-auto'>
          <Image url='/About_Us/About_Us_Our_Story_BVF_XwsIqxs_V.jpeg' className='object-cover lg:object-right' />
        </div>
        <div
          className='
          absolute top-3/4 left-1/2
          transform -translate-y-3/4 -translate-x-1/2
          flex flex-col items-center justify-center
          w-[304px]
          sm:w-3/4
          lg:static lg:translate-y-0 lg:translate-x-0 lg:w-full lg:max-w-[543px]
          2xl:max-w-[688px]
          '
        >
          <div
            className={`p-6 lg:p-12 bg-white text-center rounded-3xl shadow-xl
          lg:shadow-none lg:rounded-none
          `}
          >
            <Text type='h1' weight='regular' size='3xl' color='teal' className='mb-4 xl:mb-10'>
              our story
            </Text>
            <div className='space-y-2 xl:space-y-8'>
              <Paragraph>
                in 2015, graduate students at University of California, Davis were invited to a hearing on the state
                Healthy Soils Initiative. listening to the various stakeholders, they witnessed first hand the power of
                storytelling to captivate an audience, but also the challenges of communicating uncertainty and nuance
                regarding the dynamic nature of soil.
              </Paragraph>
              <Paragraph className='hidden sm:block'>
                capitalizing on the momentum of the UN International Year of Soil, they started a seminar to discuss and
                develop science communication. the seminar evolved into a campaign to raise awareness about the value
                and importance of soil, which caught the attention of the Natural Resource Conservation Service and
                ultimately, led to a collaboration to produce this website and the tools housed within it.
              </Paragraph>
              <Paragraph className='hidden sm:block'>we hope you dig it!</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});
