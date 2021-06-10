// helpers
import Link from 'next/link';

// components
import { FullPage } from 'components/fullpage';
import { Section, Image, Typography } from 'components/atoms';

// data
import { getInvolvedHeadings } from 'data/main-headings';

const imageData = [
  {
    imageUrl: '/Get_Involved/At_Home_Slide_nAzHm38yi.jpg',
    twBgColor: 'bg-pink-500',
  },
  {
    imageUrl: '/Get_Involved/in_your_community_slide_clearer_4NO-ohvceKo.jpeg',
    twBgColor: 'bg-yellow-500',
  },
  {
    imageUrl: '/Get_Involved/Social_Media_Slide_lswziiogO.jpg',
    twBgColor: 'bg-blue-500',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators_Slide_dmW4-JibgacR.jpg',
    twBgColor: 'bg-teal-500',
  },
  {
    imageUrl: '/Get_Involved/ForYourEducation_aaron-burden-236415_S2iS5IEYlhK.jpg',
    twBgColor: 'bg-brown-500',
  },
  {
    imageUrl: '/Get_Involved/fabian-blank-pElSkGRA2NU-unsplash_hUqHU3rqw.jpg',
    twBgColor: 'bg-orange-500',
  },
];

const mergedData = getInvolvedHeadings.map((heading, index) => ({ ...heading, ...imageData[index] }));

export default function GetInvolvedPage() {
  return (
    <FullPage
      type='main'
      mainHeaderProps={{
        headings: getInvolvedHeadings,
        pathName: 'get-involved',
        backgroundColor: 'var(--pink-400)',
      }}
    >
      <Section className='fp-auto-height'>
        <div className='grid h-full grid-cols-3 auto-rows-fr'>
          {mergedData.map(({ asset, name, slug, imageUrl = '', twBgColor = 'bg-pink-400' }) => {
            return (
              <div className='relative w-full h-full' key={name}>
                <Image url={imageUrl} />
                <Link href={`/get-involved/${slug}`}>
                  <div
                    className={`absolute z-10 w-40 h-40 text-white transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 cursor-pointer ${twBgColor}`}
                  >
                    <div className='relative w-full h-full'>
                      <img className='h-24 mx-auto' src={asset} />
                      <Typography type='paragraph' className='absolute w-full text-center top-20'>
                        {name}
                      </Typography>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Section>
    </FullPage>
  );
}
