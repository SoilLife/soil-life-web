import { useEffect, useState } from 'react';

// helpers
import { useMedia } from 'react-use';

// components
import Link from 'next/link';
import { SocialMediaIcons } from 'design-system/templates';
import { Icon, Text } from 'design-system/atoms';
import { MobileNavMenu } from '../../mobile-nav-menu';

const navLinks = [
  {
    name: 'soil 101',
    slug: '/soil-101',
    submenu: [
      { name: 'soil genesis', slug: '/soil-nexus', icon: 'nexus.svg' },
      {
        name: 'soil habitat',
        slug: '/soil-physics',
        icon: 'physics.svg',
      },
      {
        name: 'soil biology',
        slug: '/soil-biology',
        icon: 'biology.svg',
      },
      {
        name: 'soil chemistry',
        slug: '/soil-chemistry',
        icon: 'chemistry.svg',
      },
      { name: 'soil diversity', slug: '/soil-diversity', icon: 'diversity.svg' },
      { name: 'soil health', slug: '/soil-health', icon: 'health.svg' },
    ],
  },
  {
    name: 'web of soil',
    slug: '/web-of-soil',
    submenu: [
      { name: 'food', slug: '?f=food', icon: 'food.svg' },
      { name: 'fiber', slug: '?f=fiber', icon: 'fiber.svg' },
      { name: 'filter', slug: '?f=filter', icon: 'filter.svg' },
      { name: 'foundations', slug: '?f=foundations', icon: 'foundations.svg' },
      { name: 'farmaceuticals', slug: '?f=farmaceuticals', icon: 'farmaceuticals.svg' },
      { name: 'fun', slug: '?f=fun', icon: 'fun.svg' },
    ],
  },
  { name: 'media', slug: '/media' },
  {
    name: 'get involved',
    slug: '/get-involved',
    submenu: [
      { name: 'at home', slug: '/at-home', icon: 'at_home.svg' },
      { name: 'in your community', slug: '/community', icon: 'community.svg' },
      { name: 'on social media', slug: '/social-media', icon: 'social_media.svg' },
      { name: 'with your legislators', slug: '/legislation', icon: 'legislators.svg' },
      { name: 'for your education', slug: '/education', icon: 'education.svg' },
      { name: 'through donations', slug: '/donations', icon: 'donations.svg' },
    ],
  },
  { name: 'about us', slug: '/about-us' },
];

function createNavLinks() {
  return navLinks.map(({ name, slug, submenu }) => {
    return (
      <li key={name} className='relative group text-center cursor-pointer xl:text-center xl:p-2 xl:py-0'>
        <Link href={slug + (submenu?.[0]?.slug ?? '')}>
          <a>
            <Text
              type='h3'
              weight='light'
              size='sm'
              className='p-4 whitespace-nowrap hover:text-gray-300 active:text-gray-600'
            >
              {name}
            </Text>
          </a>
        </Link>
        {submenu && (
          <ul
            className='w-max opacity-0 absolute top-full left-1/2 bg-white text-left shadow-2xl
            transform -translate-y-full -translate-x-1/2 transition-all duration-100 ease-in
            group-hover:translate-y-0 group-hover:opacity-100'
          >
            {submenu?.map((item) => (
              <li key={item.name} className='hover:text-pink-500 px-6 py-4'>
                <Link href={slug + item.slug}>
                  <a>
                    <div className='flex items-center space-x-8'>
                      <img src={`images/header-icons/${item.icon}`} className='h-9 w-9 fill-current' />
                      <h3 className='font-acre-regular text-[24px]'>{item.name}</h3>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  });
}

export function MainHeader({
  hideHeader,
  fullpageRef,
}: {
  fullpageRef: React.MutableRefObject<any | null>;
  hideHeader: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMedia('(max-width: 639px)');

  useEffect(() => {
    if (fullpageRef.current) {
      if (isMenuOpen) {
        const navigation = document.querySelector('#fp-nav') as HTMLDivElement;
        if (navigation) {
          navigation.style.display = 'none';
        }
        fullpageRef.current.fullpageApi.setAllowScrolling(false);
      } else {
        const navigation = document.querySelector('#fp-nav') as HTMLDivElement;
        if (navigation) {
          navigation.style.display = 'block';
        }
        fullpageRef.current.fullpageApi.setAllowScrolling(true);
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <header
        className={`fixed h-10 sm:h-16 top-0 w-full bg-white z-20 transition-all ease-out transform flex items-center ${
          hideHeader ? 'translate-y-[-105%]' : ''
        } `}
      >
        <nav className='container relative flex items-center justify-center xl:justify-between'>
          <div className='absolute top-1/2 left-2 transform -translate-y-1/2 grid place-items-center xl:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon size='32' icon={isMenuOpen ? 'x' : 'menu'} />
            </button>
          </div>
          <Link href='/'>
            <a className='flex items-center space-x-2'>
              <Text type='h2' weight='light' size='md' className='uppercase xl:hidden'>
                Soil
              </Text>
              <img src='/images/logo.png' className='h-6 xl:h-[56px]' />
              <Text type='h2' weight='light' size='md' className='uppercase xl:hidden'>
                Life
              </Text>
            </a>
          </Link>
          <ul className='hidden w-full xl:flex xl:justify-center xl:space-x-8 2xl:space-x-16'>{createNavLinks()}</ul>
          <SocialMediaIcons className='absolute top-1/2 right-2 transform -translate-y-1/2 flex space-x-3 md:space-x-4 xl:static xl:translate-y-0' />
        </nav>
      </header>
      <MobileNavMenu isMenuOpen={isMenuOpen} />
    </>
  );
}
