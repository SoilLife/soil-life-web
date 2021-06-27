// helpers
import { useAppContext } from 'helpers/app-context';
import { useCarouselHandlers } from 'helpers/use-carousel-handlers';

// components
import Link from 'next/link';
import { FullPage } from 'components/fullpage';
import { Section, Image, Typography, Slide, CarouselArrowRight, CarouselArrowLeft } from 'components/atoms';
import { GetInvolvedSection } from 'components/sections/get-involved';

// data
import { getInvolvedHeadings } from 'data/main-headings';

import { getInvolvedPageData } from 'data/page-get-involved';

const mergedData = getInvolvedHeadings.map((heading, index) => ({
  ...heading,
  ...getInvolvedPageData.mainImages[index],
}));

export default function GetInvolvedPage() {
  const { fullpage } = useAppContext();

  const { handleNextSlide, handlePreviousSlide } = useCarouselHandlers(fullpage);

  return (
    <FullPage
      type='main'
      mainHeaderProps={{
        headings: getInvolvedHeadings,
        pathName: 'get-involved',
        backgroundColor: 'var(--pink-500)',
      }}
    >
      <Section>
        <Slide>
          <div className='grid h-full grid-cols-2 sm:grid-cols-3 auto-rows-fr'>
            {mergedData.map(({ asset, name, slug, imageUrl = '', twBgColor = 'bg-pink-400' }) => {
              return (
                <div className='relative w-full h-full' key={name}>
                  <Image url={imageUrl} className='object-cover' />
                  <Link href={`/get-involved/${slug}`}>
                    <div
                      className={`absolute z-10 w-16 h-16 md:w-24 md:h-24 lg:w-40 lg:h-40 text-white transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 cursor-pointer ${twBgColor}`}
                    >
                      <div className='relative w-full h-full'>
                        <img className='sm:w-24 sm:h-24 mx-auto' src={asset} />
                        <Typography type='paragraph' className='absolute w-full text-center md:top-24 lg:top-20'>
                          {name}
                        </Typography>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </Slide>
        <Slide>
          <GetInvolvedSection title='at home' color='pink' cards={getInvolvedPageData.homeSectionCards} />
        </Slide>
        <Slide>
          <GetInvolvedSection
            title='in your community'
            color='yellow'
            cards={getInvolvedPageData.communitySectionCards}
          />
        </Slide>
        <Slide>
          <GetInvolvedSection
            title='on social media'
            color='blue'
            cards={getInvolvedPageData.socialMediaSectionCards}
          />
        </Slide>
        <Slide>
          <GetInvolvedSection
            title='with your legislators'
            color='teal'
            cards={getInvolvedPageData.legislationSectionCards}
          />
        </Slide>
        <Slide>
          <GetInvolvedSection
            title='for your education'
            color='brown'
            cards={getInvolvedPageData.educationSectionCards}
          />
        </Slide>
        <Slide>
          <GetInvolvedSection
            title='through donations'
            color='orange'
            cards={getInvolvedPageData.donationsSectionCards}
          />
        </Slide>

        <CarouselArrowLeft onClick={handlePreviousSlide} />
        <CarouselArrowRight onClick={handleNextSlide} />
      </Section>
    </FullPage>
  );
}
