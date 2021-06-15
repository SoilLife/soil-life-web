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
    links: ['https://www.ams.usda.gov/local-food-directories/farmersmarkets'],
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/join_a_csa_JVR7ApOsb.jpeg',
    text: 'join a CSA',
    links: ['https://www.localharvest.org/csa/'],
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/14681038_1199679813408915_1486697207914271783_o_zsnPCa0bTkn.jpg',
    text: 'join a community garden',
    links: [
      { name: 'Claim Victory Garden', href: 'https://www.greenamerica.org/climate-victory-gardens' },
      { name: 'Community Garden Association', href: 'https://www.communitygarden.org/garden' },
      {
        name: 'Create the Good',
        href: 'https://createthegood.aarp.org/content/dam/aarp/ctg/pdf/guides/community-garden.pdf',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/2_In_Your_Community_5_Farm_to_Fork_AyHl6mQNG.jpg',
    text: 'eat a farm-to-fork restaurant',
    links: ['https://www.eatwellguide.org/'],
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/local_grocery_e3a7oQlPAHb.jpeg',
    text: 'join a food co-op',
    links: ['http://www.coopdirectory.org/'],
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/you-pick_91UDWJAy2.jpeg',
    text: 'visit a u-pick-farm',
    links: ['https://upickfarmlocator.com/'],
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/Go_for_a_hike_Pl7SbQmhn.jpg',
    text: 'go for a hike',
    links: ['https://www.alltrails.com/'],
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/Go_for_a_hike_Pl7SbQmhn.jpg',
    text: 'visit a national park',
    links: ['https://findyourpark.com/'],
  },
];

export default function InYourCommunityPage() {
  return (
    <>
      <MainHeader headings={getInvolvedHeadings} backgroundColor='var(--yellow-500)' pathName='get-involved' />
      <Typography type='heading' className='text-yellow-500 text-center py-6'>
        in your community
      </Typography>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-5xl 2xl:max-w-7xl mx-auto'>
        {cards.map(({ imageUrl, text }, index) => (
          <div key={index} className='shadow-lg p-4'>
            <div className='aspect-h-1 aspect-w-1'>
              <Image url={imageUrl} />
            </div>
            <Typography type='paragraph' className='text-yellow-500 text-center pb-2 pt-4'>
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
          <Button label='Return Home' type='warning' size='md' as='link' />
        </Link>
      </div>
    </>
  );
}
