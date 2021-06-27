import { useState } from 'react';

// components
import Link from 'next/link';
import { Typography, Image, Button } from 'components/atoms';
import { MainHeader } from 'components/templates/main-header';

// data
import { getInvolvedHeadings } from 'data/main-headings';

const cards = [
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_1_Watch_rpM11xFD1.jpg',
    text: 'watch',
    links: [
      { name: 'Symphony of the Soil', href: 'http://www.symphonyofthesoil.com/' },
      { name: 'Soil Solutions: Narrated by Michael Pollan', href: 'https://www.youtube.com/watch?v=NxqBzrx9yIE' },
      {
        name: 'Dirt: The Movie',
        href: 'https://www.youtube.com/watch?v=uHhhHpohglg',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_2_Read_XCx2tlQi3.jpg',
    text: 'read',
    links: [
      {
        name: 'Growing a Revolution: Bringing our Soil Back to Life by David Montgomery',
        href: 'https://www.amazon.com/Growing-Revolution-Bringing-Soil-Back/dp/0393608328',
      },
      {
        name: 'Out of the Earth by Daniel Health',
        href: 'https://www.amazon.com/Out-Earth-Civilization-Life-Soil/dp/0520080807/ref=sr_1_1?s=books&ie=UTF8&qid=1535611642&sr=1-1&keywords=out+of+the+earth',
      },
      {
        name: 'Dirt: The Erosion of Civilizations by Jared Diamond',
        href: 'https://www.amazon.com/Out-Earth-Civilization-Life-Soil/dp/0520080807/ref=sr_1_1?s=books&ie=UTF8&qid=1535611642&sr=1-1&keywords=out+of+the+earth',
      },
      {
        name: 'Know Soil, Know Life by David Lindbo',
        href: 'https://www.amazon.com/Know-Soil-Life-David-Lindbo/dp/0891189548/ref=pd_sim_14_24?_encoding=UTF8&pd_rd_i=0891189548&pd_rd_r=1c60d90f-ac20-11e8-b11d-915b29cfa4b3&pd_rd_w=YTtrW&pd_rd_wg=zj0yF&pf_rd_i=desktop-dp-sims&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a180fdfb-b54e-4904-85ba-d852197d6c09&pf_rd_r=EY1RZJR2SHDJ17WQ6YST&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&psc=1&refRID=EY1RZJR2SHDJ17WQ6YST',
      },
      {
        name: 'An Agricultural Testament by Sir Albert Howard',
        href: 'https://www.amazon.com/Agricultural-Testament-Sir-Albert-Howard/dp/1388187485/ref=pd_cp_14_1?pf_rd_m=ATVPDKIKX0DER&pf_rd_p=fcaa6d12-8b2b-4ad7-b277-864b2da79f6e&pf_rd_r=VGHHJHTBKSYH6DMHK010&pd_rd_wg=pvOHU&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&pd_rd_w=Kc2jH&pf_rd_i=desktop-dp-sims&pd_rd_r=9fe4e879-ac20-11e8-ad5d-f9d1f1abea37&pd_rd_i=1388187485&psc=1&refRID=VGHHJHTBKSYH6DMHK010',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_4_Take_a_Class_mzmSD7pnN.jpg',
    text: 'take a class',
    links: [
      {
        name: 'edX',
        href: 'https://www.edx.org/learn/soil',
      },
      { name: 'Cooperative Extension', href: 'https://mastergardener.extension.org/contact-us/find-a-program/' },
    ],
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/SoilsRevealed_Illustration_01_UdYobwDTI.jpeg',
    text: 'explore the soils revealed map',
    links: 'https://soilsrevealed.org/explore',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_5_NRCS_Resources_NHA82T4zL.jpg',
    imageContain: true,
    text: 'browse NRCS resources',
    links: 'https://www.nrcs.usda.gov/wps/portal/nrcs/site/national/home/',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_6_SSSA_Resources_9WPD4w1pj.jpg',
    imageContain: true,
    text: 'browse SSSA resources',
    links: 'https://www.soils.org/discover-soils',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/Screen_Shot_2021-05-09_at_7.27.19_PM_fqeUgjfs8.png',
    text: 'explore the UCD soil health portal',
    links: 'http://soilhealth.ucdavis.edu/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/ales-krivec-976-unsplash_21_hVO8UiZni.jpg',
    text: 'explore the soil health nexus',
    links: 'https://soilhealthnexus.org/resources/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/ales-krivec-976-unsplash_21_hVO8UiZni.jpg',
    text: 'explore "for the love of soil"',
    links: 'https://www.fortheloveofsoil.org/educate',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/citizen_soil_science_gIIoeJIcM.jpg',
    text: 'participate in citizen science',
    links: [
      {
        name: "What's in your Backyard?",
        href: 'https://whatsinyourbackyard.org/',
      },
      { name: 'Drugs from Dirt', href: 'https://www.drugsfromdirt.org/' },
      { name: 'Nat Geographic', href: 'https://www.nationalgeographic.org/idea/citizen-science-projects/?page=1' },
    ],
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/ales-krivec-976-unsplash_21_hVO8UiZni.jpg',
    text: 'learn more about soil organisms',
    links: [
      {
        name: 'Global Soil Biodiversity Atlas',
        href: 'https://www.globalsoilbiodiversity.org/atlas-introduction',
      },
      { name: 'Chaos of Delight', href: 'https://www.chaosofdelight.org/' },
      { name: "State of the World's Fungi", href: 'https://stateoftheworldsfungi.org/' },
    ],
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/ales-krivec-976-unsplash_21_hVO8UiZni.jpg',
    text: 'explore soil colors of national parks',
    links: 'https://munsell.com/color-blog/soil-colors-national-parks-anniversary/',
  },
];

export default function ForYourEducationPage() {
  const [isOpen, setIsOpen] = useState<{ [index: number]: boolean }>({});

  function handleIsLinksOpen(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    };
  }

  return (
    <>
      <MainHeader headings={getInvolvedHeadings} backgroundColor='var(--brown-500)' pathName='get-involved' />
      <Typography type='heading' className='text-brown-500 text-center py-24'>
        for your education
      </Typography>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-5xl 2xl:max-w-7xl mx-auto'>
        {cards.map(({ imageUrl, text, links, imageContain }, index) => (
          <div key={index} className='shadow-lg p-4'>
            <div className={`relative aspect-h-1 aspect-w-1`}>
              {isOpen[index] && (
                <div className='absolute h-full w-full bg-gradient-to-t from-brown-900 to-transparent z-10 p-4'>
                  {Array.isArray(links) && (
                    <ul className='space-y-4 flex flex-col justify-end h-full'>
                      {links.map((link, index) => {
                        return (
                          <li key={index} className='text-white text-center hover:text-brown-400 active:text-brown-500'>
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
              <Image url={imageUrl} className={imageContain ? 'object-contain' : 'object-cover'} />
            </div>
            <Typography type='paragraph' className='text-brown-500 text-center mt-4'>
              {text}
            </Typography>
            <div className='flex items-center justify-center my-4'>
              <Button
                label='find out how'
                type='neutral'
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

      <div className='relative left-1/2 transform -translate-x-1/2 inline-flex justify-center my-6'>
        <img
          src='/images/worm.png'
          alt='illustration of an earth worm'
          width='192px'
          className='absolute -left-3/4 transform -rotate-6'
        />
        <Link href='/'>
          <Button label='Return Home' type='neutral' size='md' as='link' />
        </Link>
      </div>
    </>
  );
}
