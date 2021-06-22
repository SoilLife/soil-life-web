import { useState } from 'react';

// components
import Link from 'next/link';
import { Typography, Image, Button } from 'components/atoms';
import { MainHeader } from 'components/templates/main-header';

// data
import { getInvolvedHeadings } from 'data/main-headings';

const cards = [
  {
    imageUrl: '/Get_Involved/At_Home/sincerely-media-Agr1YTrzYPI-unsplash_mKofVduh0.jpg',
    text: 'start a garden',
    links: [
      {
        name: 'Climate Victory Gardens',
        href: 'https://www.greenamerica.org/climate-victory-gardens',
      },
      { name: 'Old Farmers Almanac', href: 'https://www.almanac.com/vegetable-gardening-for-beginners' },
      {
        name: 'Urban Harvest',
        href: 'https://www.urbanharvest.org/gardening-advice/',
      },
      {
        name: 'NPR',
        href: 'https://www.npr.org/2020/04/17/837300800/this-is-a-good-time-to-start-a-garden-heres-how',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/heather-ford-nHTZLszh2No-unsplash_0xT3Y7NSHa8.jpg',
    text: 'start a worm bin',
    links: [
      { name: 'LAWFC', href: 'http://lawormfarmcollective.com/index.php/about-worm-castings/' },
      { name: 'Cal Recylce', href: 'http://www.calrecycle.ca.gov/organics/Worms/Default.htm' },
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/1_At_Home_3_Green_Bin_EqbtOxfBZ.jpg',
    text: 'compost your waste',
    links: [
      { name: 'EPA', href: 'https://www.epa.gov/recycle/composting-home' },
      { name: 'NPR', href: 'https://www.npr.org/2020/04/07/828918397/how-to-compost-at-home' },
      { name: 'Cal Recycle', href: 'http://www.calrecycle.ca.gov/organics/HomeCompost/default.htm' },
      { name: 'Mind Body Green', href: 'https://www.mindbodygreen.com/articles/how-to-make-a-diy-compost-bin' },
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/Get_Involved_Native_Plants_WAjgrzNgsbb.jpg',
    text: 'convert your lawn to native plants',
    links: [
      {
        name: 'Native Again Landscape',
        href: 'http://www.native-again-landscape.com/lawn-to-drought-resistant-perennials.html',
      },
      {
        name: 'DIY Network',
        href: 'https://www.diynetwork.com/how-to/outdoors/gardening/replacing-your-lawn-with-landscaping',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/1_At_Home_6_Leaves_bjw078rtK_J.jpg',
    text: 'leave the leaves',
    links: 'https://www.consumerreports.org/lawn-care/for-the-greenest-yard-leave-the-leaves-behind/',
  },
  {
    imageUrl: '/Get_Involved/At_Home/1_At_Home_7_Mulch_DtuGIfUMS.jpg',
    text: 'mulch your plants',
    links: 'https://getchipdrop.com/',
  },
  {
    imageUrl: '/Get_Involved/At_Home/Get_Involved_Plant_Veggies_AaDbAubXT.jpeg',
    text: 'paint with soils',
    links: 'https://www.fortheloveofsoil.org/pigment-process',
  },
  {
    imageUrl: '/Get_Involved/At_Home/Get_Involved_Plant_Veggies_AaDbAubXT.jpeg',
    text: 'find your soil!',
    links: 'https://casoilresource.lawr.ucdavis.edu/gmap/',
  },
];

export default function AtHomePage() {
  const [isOpen, setIsOpen] = useState<{ [index: number]: boolean }>({});

  function handleIsLinksOpen(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    };
  }

  return (
    <>
      <MainHeader headings={getInvolvedHeadings} backgroundColor='var(--pink-500)' pathName='get-involved' />
      <Typography type='heading' className='text-pink-500 text-center py-6'>
        at home
      </Typography>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-5xl 2xl:max-w-7xl mx-auto'>
        {cards.map(({ imageUrl, text, links }, index) => (
          <div key={index} className='shadow-lg p-4'>
            <div className={`relative aspect-h-1 aspect-w-1`}>
              {isOpen[index] && (
                <div className='absolute h-full w-full bg-gradient-to-t from-pink-900 to-transparent z-10 p-4'>
                  {Array.isArray(links) && (
                    <ul className='space-y-4 flex flex-col justify-end h-full'>
                      {links.map((link, index) => {
                        return (
                          <li key={index} className='text-white text-center hover:text-pink-400 active:text-pink-500'>
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
            <Typography type='paragraph' className='text-pink-500 text-center mt-4'>
              {text}
            </Typography>
            <div className='flex items-center justify-center my-4'>
              <Button
                label='find out how'
                type='danger'
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
        <Link href='/get-involved'>
          <Button label='Return Home' type='danger' size='md' as='link' />
        </Link>
      </div>
    </>
  );
}
