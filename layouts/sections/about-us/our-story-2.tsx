import { forwardRef } from 'react';
import { Section, Image } from 'design-system/atoms';

function Paragraph(props: React.PropsWithChildren<{ className?: string }>) {
  return <p className={`font-acre-thin font-[18px] leading-[28px] ${props.className ?? ''}`}>{props.children}</p>;
}

export const OurStory2Section = forwardRef<HTMLDivElement, {}>(function (_props, ref) {
  return (
    <Section ref={ref}>
      <div className='relative h-full flex flex-col'>
        <div className='h-1/2'>
          <Image
            url='Get_Involved/With_Your_Legislators/3_With_Your_Legislators_4_Cap_and_Trade_WDBr6qc7U.jpg'
            className='object-cover lg:object-right'
          />
        </div>
        <div
          className='
          absolute top-3/4 left-1/2
          transform -translate-y-3/4 -translate-x-1/2
          flex flex-col items-center justify-center
          w-[304px] sm:w-3/4'
        >
          <div className={`p-6 bg-white text-center rounded-3xl shadow-xl`}>
            <div className='space-y-2'>
              <Paragraph>
                capitalizing on the momentum of the UN International Year of Soil, they started a seminar to discuss and
                develop science communication. the seminar evolved into a campaign to raise awareness about the value
                and importance of soil, which caught the attention of the Natural Resource Conservation Service and
                ultimately, led to a collaboration to produce this website and the tools housed within it.
              </Paragraph>
              <Paragraph>we hope you dig it!</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});
