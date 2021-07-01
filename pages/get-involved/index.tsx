// components
import Link from 'next/link';
import { FullPage } from 'components/fullpage';
import { Section, Image, Typography, Icon } from 'components/atoms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// data
import { getInvolvedHeadings } from 'data/main-headings';
import { getInvolvedPageData } from 'data/page-get-involved';

// assets
import styles from './get-involved.module.css';

const mergedData = getInvolvedHeadings.map((heading, index) => ({
  ...heading,
  ...getInvolvedPageData.mainImages[index],
}));

export default function GetInvolvedPage() {
  return (
    <FullPage
      type='main'
      mainHeaderProps={{
        headings: getInvolvedHeadings,
        pathName: 'get-involved',
        className: 'hidden',
      }}
    >
      <Section className='overflow-hidden'>
        <div className='absolute flex items-center justify-center top-6 left-6 h-12 w-12 z-20 rounded-full bg-pink-500 p-2'>
          <Icon
            icon={faArrowLeft}
            size='lg'
            className='text-white hover:text-pink-300 active:text-pink-600 text-lg'
            title='back to home page'
          />
        </div>
        <div
          className={`${styles['cta-message']} absolute top-1/2 left-1/2 bg-white bg-opacity-80 px-28 py-6 z-20 text-7xl whitespace-nowrap`}
        >
          how would you like to get involved?
        </div>
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
      </Section>
    </FullPage>
  );
}
