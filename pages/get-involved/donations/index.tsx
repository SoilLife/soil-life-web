// components
import Link from 'next/link';
import { Typography, Image, Button } from 'components/atoms';
import { MainHeader } from 'components/templates/main-header';

// data
import { getInvolvedHeadings } from 'data/main-headings';

const cards = [
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_1_Adopt_an_Acre_8EngGl7Ng.jpg',
    text: 'adopt an acre',
    links: [
      {
        name: 'Nature Conservancy',
        href: 'https://www.nature.org/en-us/membership-and-giving/donate-to-our-mission/other-ways-to-give/adopt-an-acre/',
      },
      {
        name: 'American Farmland Trust',
        href: 'https://farmland.org/donate/#:~:text=Your%20support%20allows%20American%20Farmland,all%2C%20No%20Farms%20No%20Food',
      },
      {
        name: 'National Wildlife Federation',
        href: 'https://www.nwf.org/Our-Work/Our-Lands/Adopt-a-Wildlife-Acre',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_2_Support_Future_Farmers_Zmeiu39TB.jpg',
    text: 'support future farmers',
    links: [
      {
        name: '4H',
        href: 'https://4-h.org/get-involved/donate/',
      },
      { name: 'Future Farmers of America (FFA)', href: 'https://ffa.givingfuel.com/ffadonate' },
      {
        name: 'National Young Farmers Coalition',
        href: 'https://connect.clickandpledge.com/w/Form/66f36e19-c320-4903-9c88-aa4f2ca5b7f0',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_3_Community_Gardening_2FmqLN8Aajo.jpg',
    text: 'support community garden projects',
    links: [
      { name: 'Barnraiser', href: 'https://www.barnraiser.us/' },
      { name: 'Insight Gardens', href: 'http://insightgardenprogram.org/donate/' },
      { name: 'Urban Tilth', href: 'https://www.urbantilth.org/page_id22/' },
      { name: 'Ron Finley Project', href: 'http://ronfinley.com/the-ron-finley-project/' },
    ],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/Screen_Shot_2021-05-09_at_8.18.55_PM_E75j_wlReSn.png',
    imageContain: true,
    text: 'support BIPOC farmers',
    links: ['https://www.soulfirefarm.org/get-involved/reparations/'],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_Sustenance_Farmer_JycCq3NXv-U.jpg',
    text: 'support a sustenance farmer',
    links: ['https://www.kiva.org/lend/agriculture'],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/support_farmer_veteran_7D4Nj8bSl.jpeg',
    text: 'support veteran farmers',
    links: ['https://farmvetco.org/'],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_4_Fund_Research_InfzvDXhZ.jpg',
    text: 'fund soil health research',
    links: [
      {
        name: 'Russel Ranch',
        href: 'http://asi.ucdavis.edu/programs/rr/support-russell-ranch',
      },
      { name: 'Soil Health Institute', href: 'https://soilhealthinstitute.org/support-shi/' },
      { name: 'FFAR', href: 'https://foundationfar.org/donate/' },
    ],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/Support_our_Work_N2LJ-eI5lRD.png',
    text: 'support our work',
    links: ['#'],
  },
];

export default function DonationsPage() {
  return (
    <>
      <MainHeader headings={getInvolvedHeadings} backgroundColor='var(--orange-500)' pathName='get-involved' />
      <Typography type='heading' className='text-orange-500 text-center py-6'>
        through donations
      </Typography>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-5xl 2xl:max-w-7xl mx-auto'>
        {cards.map(({ imageUrl, imageContain, text, links }, index) => (
          <div key={index} className='shadow-lg p-4'>
            <div className='aspect-h-1 aspect-w-1'>
              <Image url={imageUrl} className={imageContain ? 'object-contain' : ''} />
            </div>
            <Typography type='paragraph' className='text-orange-500 text-center pb-2 pt-4'>
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
          <Button label='Return Home' type='alert' size='md' as='link' />
        </Link>
      </div>
    </>
  );
}
