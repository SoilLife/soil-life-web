// components
import Link from 'next/link';
import { Typography, Image, Button, Icon } from 'components/atoms';
import { MainHeader } from 'components/templates/main-header';

// data
import { getInvolvedHeadings } from 'data/main-headings';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

const cards = [
  {
    icon: ['fab', 'facebook-square'] as IconProp,
    text: 'follow us on facebook',
    links: 'https://www.facebook.com/TheSoilLife/',
  },
  {
    icon: ['fab', 'instagram-square'] as IconProp,
    text: 'follow us on instagram',
    links: 'https://www.instagram.com/soil.life/',
  },
  {
    icon: ['fab', 'twitter-square'] as IconProp,
    text: 'follow us on twitter',
    links: 'https://twitter.com/the_Soil_Life',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/Screen_Shot_2021-05-10_at_1.31.51_AM_OT8btMgFB.png',
    text: 'play the game',
    links: 'https://www.ecoliteracy.org/download/starting-soil',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/6_On_Social_Media_ShareYourStory_apmExSB1M.jpg',
    text: 'create a soil story and share!',
    links: 'http://www.coopdirectory.org/',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/Screen_Shot_2021-05-09_at_7.55.55_PM_9efUEnG9F.png',
    text: 'start an opeanteam hub',
    links: 'https://openteam.community/hub-and-network-program/f',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/Screen_Shot_2021-05-09_at_7.51.42_PM_1LWzL4cBpJv.png',
    text: 'become a fibershed affiliate',
    links: 'https://fibershed.org/programs/education-advocacy/affiliate-program/',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/Screen_Shot_2021-05-09_at_8.15.16_PM_FexuP4ixSSL.png',
    text: 'join the soil profile network',
    links: 'https://www.soilbook.info/?lang=en',
  },
];

export default function OnSocialMediaPage() {
  return (
    <>
      <MainHeader headings={getInvolvedHeadings} backgroundColor='var(--blue-500)' pathName='get-involved' />
      <Typography type='heading' className='text-blue-500 text-center py-24'>
        on social media
      </Typography>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-5xl 2xl:max-w-7xl mx-auto'>
        {cards.map(({ icon, imageUrl, text, links }, index) => (
          <div key={index} className='shadow-lg p-4'>
            <div className='aspect-h-1 aspect-w-1'>
              {icon ? (
                <Icon icon={icon} size='10x' className='mx-auto text-blue-500' />
              ) : imageUrl ? (
                <Image url={imageUrl} className='object-cover' />
              ) : null}
            </div>
            <a href={links} target='_blank' rel='noreferrer noopener'>
              <Typography type='paragraph' className='text-blue-500 text-center pb-2 pt-4'>
                {text}
              </Typography>
            </a>
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
          <Button label='Return Home' type='primary' size='md' as='link' />
        </Link>
      </div>
    </>
  );
}
