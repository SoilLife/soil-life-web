import { Section, Image } from 'design-system/atoms';

export function OurStorySection() {
  return (
    <Section>
      <div className='relative h-full flex'>
        <Image className='h-1/2 w-1/2 xl:h-full object-cover' url='/About_Us/About_Us_Our_Story_BVF_XwsIqxs_V.jpeg' />
        <div className={`mt-[88px] text-center p-10`}>
          <h1 className='font-acre-regular text-teal-500 text-[70px] leading-none mb-10'>our story</h1>
          <div className='font-acre-thin text-[28px] space-y-4'>
            <p>
              in 2015, graduate students at University of California, Davis were invited to a hearing on the state
              Healthy Soils Initiative. listening to the various stakeholders, they witnessed first hand the power of
              storytelling to captivate an audience, but also the challenges of communicating uncertainty and nuance
              regarding the dynamic nature of soil.
            </p>

            <p>
              capitalizing on the momentum of the UN International Year of Soil, they started a seminar to discuss and
              develop science communication. the seminar evolved into a campaign to raise awareness about the value and
              importance of soil, which caught the attention of the Natural Resource Conservation Service and
              ultimately, led to a collaboration to produce this website and the tools housed within it.
            </p>

            <p>
              the project caught the attention of the Natural Resource Conservation Service and ultimately, led to a
              collaboration to produce this website and the tools housed within it.
            </p>

            <p>we hope you dig it!</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
