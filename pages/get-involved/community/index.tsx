import { useState } from 'react';

// components
import Link from 'next/link';
import { Typography, Image, Button } from 'components/atoms';
import { MainHeader } from 'components/templates/main-header';

// data
import { getInvolvedHeadings } from 'data/main-headings';

const cards = [
  {
    imageUrl: '/Get_Involved/In_Your_Community/2_In_Your_Community_1_Farmers_Market_6s7gIUSNp.jpg',
    text: "shop at your local farmer's market",
    links: 'https://www.ams.usda.gov/local-food-directories/farmersmarkets',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/join_a_csa_JVR7ApOsb.jpeg',
    text: 'join a CSA',
    links: 'https://www.localharvest.org/csa/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/14681038_1199679813408915_1486697207914271783_o_zsnPCa0bTkn.jpg',
    text: 'join a community garden',
    links: [
      { name: "Let's Move", href: 'https://letsmove.obamawhitehouse.archives.gov/community-garden-checklist' },
      { name: 'Community Garden Association', href: 'https://www.communitygarden.org/garden' },
      {
        name: 'Create the Good',
        href: 'https://createthegood.aarp.org/content/dam/aarp/ctg/pdf/guides/community-garden.pdf',
      },
      { name: 'Tree Hugger', href: 'https://www.treehugger.com/ever-wondered-how-start-community-garden-4858632' },
    ],
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/2_In_Your_Community_5_Farm_to_Fork_AyHl6mQNG.jpg',
    text: 'eat a farm-to-fork restaurant',
    links: 'https://www.eatwellguide.org/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/local_grocery_e3a7oQlPAHb.jpeg',
    text: 'join a food co-op',
    links: 'http://www.coopdirectory.org/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/you-pick_91UDWJAy2.jpeg',
    text: 'visit a u-pick-farm',
    links: 'https://upickfarmlocator.com/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/Go_for_a_hike_Pl7SbQmhn.jpg',
    text: 'go for a hike',
    links: 'https://www.alltrails.com/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/Go_for_a_hike_Pl7SbQmhn.jpg',
    text: 'visit a national park',
    links: 'https://findyourpark.com/',
  },
];

export default function InYourCommunityPage() {
  const [isOpen, setIsOpen] = useState<{ [index: number]: boolean }>({});

  function handleIsLinksOpen(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    };
  }

  return (
    <>
      <MainHeader headings={getInvolvedHeadings} backgroundColor='var(--yellow-500)' pathName='get-involved' />
      <Typography type='heading' className='text-yellow-500 text-center py-24'>
        in your community
      </Typography>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-5xl 2xl:max-w-7xl mx-auto'>
        {cards.map(({ imageUrl, text, links }, index) => (
          <div key={index} className='shadow-lg p-4'>
            <div className={`relative aspect-h-1 aspect-w-1`}>
              {isOpen[index] && (
                <div className='absolute h-full w-full bg-gradient-to-t from-yellow-900 to-transparent z-10 p-4'>
                  {Array.isArray(links) && (
                    <ul className='space-y-4 flex flex-col justify-end h-full'>
                      {links.map((link, index) => {
                        return (
                          <li
                            key={index}
                            className='text-white text-center hover:text-yellow-400 active:text-yellow-500'
                          >
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
            <Typography type='paragraph' className='text-yellow-500 text-center mt-4'>
              {text}
            </Typography>
            <div className='flex items-center justify-center my-4'>
              <Button
                label='find out how'
                type='warning'
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
          <Button label='Return Home' type='warning' size='md' as='link' />
        </Link>
      </div>
    </>
  );
}
