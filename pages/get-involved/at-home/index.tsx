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
    links: ['https://www.growveg.com/garden-planner-intro.aspx'],
  },
  {
    imageUrl: '/Get_Involved/At_Home/heather-ford-nHTZLszh2No-unsplash_0xT3Y7NSHa8.jpg',
    text: 'start a worm bin',
    links: [
      'http://lawormfarmcollective.com/index.php/about-worm-castings/',
      'http://www.calrecycle.ca.gov/organics/Worms/Default.htm',
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/1_At_Home_3_Green_Bin_EqbtOxfBZ.jpg',
    text: 'compost your waste',
    links: [
      'https://www.epa.gov/recycle/composting-home',
      'https://www.npr.org/2020/04/07/828918397/how-to-compost-at-home',
      'http://www.calrecycle.ca.gov/organics/HomeCompost/default.htm',
      'https://www.mindbodygreen.com/articles/how-to-make-a-diy-compost-bin',
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/Get_Involved_Native_Plants_WAjgrzNgsbb.jpg',
    text: 'convert your lawn to native plants',
    links: [
      'http://www.native-again-landscape.com/lawn-to-drought-resistant-perennials.html',
      'https://www.diynetwork.com/how-to/outdoors/gardening/replacing-your-lawn-with-landscaping',
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/1_At_Home_6_Leaves_bjw078rtK_J.jpg',
    text: 'leave the leaves',
    links: ['https://www.consumerreports.org/lawn-care/for-the-greenest-yard-leave-the-leaves-behind/'],
  },
  {
    imageUrl: '/Get_Involved/At_Home/1_At_Home_7_Mulch_DtuGIfUMS.jpg',
    text: 'mulch your plants',
    links: ['https://getchipdrop.com/'],
  },
  {
    imageUrl: '/Get_Involved/At_Home/Get_Involved_Plant_Veggies_AaDbAubXT.jpeg',
    text: 'paint with soils',
    links: ['https://www.fortheloveofsoil.org/pigment-process'],
  },
  {
    imageUrl: '/Get_Involved/At_Home/Get_Involved_Plant_Veggies_AaDbAubXT.jpeg',
    text: 'find your soil!',
    links: ['https://casoilresource.lawr.ucdavis.edu/gmap/'],
  },
];

export default function AtHomePage() {
  return (
    <>
      <MainHeader headings={getInvolvedHeadings} backgroundColor='var(--pink-500)' pathName='get-involved' />
      <Typography type='heading' className='text-pink-500 text-center py-6'>
        At Home
      </Typography>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-5xl 2xl:max-w-7xl mx-auto'>
        {cards.map(({ imageUrl, text, links }, index) => (
          <div key={index} className='shadow-lg p-4'>
            <div className='aspect-h-1 aspect-w-1'>
              <Image url={imageUrl} />
            </div>
            <Typography type='paragraph' className='text-pink-500 text-center pb-2 pt-4'>
              {text}
            </Typography>
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
        <Link href='/get-involved'>
          <Button label='Return Home' type='danger' size='md' as='link' />
        </Link>
      </div>
    </>
  );
}
