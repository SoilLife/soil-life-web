import { Section, Image } from 'components/atoms';

export function OurStorySection() {
  return (
    <Section>
      <div className='grid h-full grid-cols-5'>
        <Image className='col-span-3' url='/About_Us/About_Us_Our_Story_BVF_XwsIqxs_V.jpeg' />
        <div className='flex flex-col items-center justify-center col-span-2 p-8 space-y-10 text-center'>
          <h2 className='text-3xl text-teal-400 font-acre-regular'>Our Story</h2>
          <p className='font-acre-thin'>
            in 2015, graduate students at University of California, Davis were invited to a hearing on the California
            Healthy Soils Initiative. at the meeting, they witnessed first hand the power of storytelling to captivate
            an audience, but it also brought up issues on the need to communicate uncertainty and nuance regarding the
            dynamic and diverse nature of soil.
          </p>

          <p className='font-acre-thin'>
            they decided to start a seminar where graduate students could learn about and discuss science communication.
            capitalizing on the momentum of the UN International Year of Soil, the seminar evolved into a campaign to
            raise awareness about the value and importance of soil.
          </p>

          <p className='font-acre-thin'>
            the project caught the attention of the Natural Resource Conservation Service and ultimately, led to a
            collaboration to produce this website and the tools housed within it.
          </p>

          <p className='font-acre-thin'>we hope you dig it!</p>
        </div>
      </div>
    </Section>
  );
}
