import { useState } from 'react';

// components
import Link from 'next/link';
import { Typography, Image, Button } from 'components/atoms';
import { MainHeader } from 'components/templates/main-header';

// data
import { getInvolvedHeadings } from 'data/main-headings';

const cards = [
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/start_healthy_soils_initiative_SpH3kfQBd.png',
    text: 'start a healthy soil initiative',
    links: 'https://www.cdfa.ca.gov/oefi/healthysoils/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/3_With_Your_Legislators_2_Write_to_Your_Legislators_xG6M6vDM2qf.jpg',
    text: 'write to your legislator',
    links: 'https://openstates.org/find_your_legislator/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/3_With_Your_Legislators_3_Submit_Resolution_cacAyoH_X.jpg',
    text: 'submit a soils resolution',
    links:
      'http://notillveggies.org/2015/03/12/maine-is-the-first-state-to-pay-tribute-to-soils-during-the-international-year-of-soils/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/wolfgang-hasselmann-P7SjXA2hxMY-unsplash__T9TDAtvz.jpg',
    text: 'track healthy soils legislation',
    links: [
      { name: 'Nerds for Earth', href: 'https://nerdsforearth.com/state-healthy-soils-policy/' },
      {
        name: 'Land Core Bill Tracker',
        href: 'https://docs.google.com/spreadsheets/d/1XwdVfZO2SxqPJ4c6oYq-9CpsLf-6qn-4VUgeo7hih3E/edit#gid=508030997',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/3_With_Your_Legislators_4_Cap_and_Trade_WDBr6qc7U.jpg',
    text: 'learn more about Land Core',
    links: 'https://landcore.org/',
  },
  {
    imageUrl:
      '/Get_Involved/With_Your_Legislators/3_With_Your_Legislators_5_Resource_Conservation_District_E3qlosWp8Dc.jpg',
    text: 'increase funding for technical assistance',
    links: 'https://www.nacdnet.org/about-nacd/about-districts/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/christian-wiediger-v3lA7GROOHg-unsplash_lvGiS0qOR.jpg',
    text: 'request green waste programs',
    links:
      'https://www.google.com/search?ei=lAukW9-OMtTq9AOFs474Dw&q=request+a+compost+bin&oq=request+a+compost+bin&gs_l=psy-ab.3..0i30l2.14435.15187..17124...0.0..0.80.145.2......0....1..gws-wiz.......0i71.stLlaipX2oM',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/ales-krivec-976-unsplash_21_hVO8UiZni.jpg',
    text: 'support the conversation reserve program',
    links: 'https://www.fsa.usda.gov/programs-and-services/conservation-programs/conservation-reserve-program/',
  },
];

export default function WithYourLegislatorsPage() {
  const [isOpen, setIsOpen] = useState<{ [index: number]: boolean }>({});

  function handleIsLinksOpen(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    };
  }

  return (
    <>
      <MainHeader headings={getInvolvedHeadings} backgroundColor='var(--teal-500)' pathName='get-involved' />
      <Typography type='heading' className='text-teal-500 text-center py-24'>
        with your legislators
      </Typography>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-5xl 2xl:max-w-7xl mx-auto'>
        {cards.map(({ imageUrl, text, links }, index) => (
          <div key={index} className='shadow-lg p-4'>
            <div className={`relative aspect-h-1 aspect-w-1`}>
              {isOpen[index] && (
                <div className='absolute h-full w-full bg-gradient-to-t from-teal-900 to-transparent z-10 p-4'>
                  {Array.isArray(links) && (
                    <ul className='space-y-4 flex flex-col justify-end h-full'>
                      {links.map((link, index) => {
                        return (
                          <li key={index} className='text-white text-center hover:text-teal-400 active:text-teal-500'>
                            <a href={link.href} target='_blank' rel='noreferrer noopener'>
                              {link.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              )}
              <Image url={imageUrl} className='object-cover' />
            </div>
            <Typography type='paragraph' className='text-teal-500 text-center mt-4'>
              {text}
            </Typography>
            <div className='flex items-center justify-center my-4'>
              <Button
                label='find out how'
                type='success'
                size='sm'
                {...(Array.isArray(links)
                  ? {
                      as: 'button',
                      onClick: handleIsLinksOpen(index),
                    }
                  : {
                      as: 'link',
                      external: links,
                    })}
              />
            </div>
          </div>
        ))}
      </div>

      <div className='relative left-1/2 transform -translate-x-1/2 inline-flex justify-center my-8'>
        <img
          src='/images/worm.png'
          alt='illustration of an earth worm'
          width='192px'
          className='absolute -left-3/4 transform -rotate-6'
        />
        <Link href='/'>
          <Button label='Return Home' type='success' size='md' as='link' />
        </Link>
      </div>
    </>
  );
}
