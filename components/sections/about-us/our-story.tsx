import { Section, Image, Typography } from 'components/atoms';

export function OurStorySection() {
  return (
    <Section>
      <div className='relative h-full xl:grid xl:grid-cols-5'>
        <Image className='h-1/2 xl:h-full xl:col-span-3' url='/About_Us/About_Us_Our_Story_BVF_XwsIqxs_V.jpeg' />
        <div
          className={`absolute flex flex-col items-center justify-center w-full max-w-sm p-4 mx-auto -mt-16 space-y-4 text-sm text-center transform -translate-x-1/2 -translate-y-1/2 bg-white left-1/2 top-3/4
          lg:text-2xl lg:max-w-xl xl:col-span-2
          xl:static xl:p-8 xl:space-y-10 xl:max-w-none xl:top-auto xl:left-auto xl:transform-none
          2xl:max-w-lg`}
        >
          <Typography type='subheading' className='text-teal-400'>
            Our Story
          </Typography>
          <Typography type='paragraph'>
            in 2015, graduate students at University of California, Davis were invited to a hearing on the California
            Healthy Soils Initiative. at the meeting, they witnessed first hand the power of storytelling to captivate
            an audience, but it also brought up issues on the need to communicate uncertainty and nuance regarding the
            dynamic and diverse nature of soil.
          </Typography>

          <Typography type='paragraph'>
            they decided to start a seminar where graduate students could learn about and discuss science communication.
            capitalizing on the momentum of the UN International Year of Soil, the seminar evolved into a campaign to
            raise awareness about the value and importance of soil.
          </Typography>

          <Typography type='paragraph'>
            the project caught the attention of the Natural Resource Conservation Service and ultimately, led to a
            collaboration to produce this website and the tools housed within it.
          </Typography>

          <Typography type='paragraph'>we hope you dig it!</Typography>
        </div>
      </div>
    </Section>
  );
}
