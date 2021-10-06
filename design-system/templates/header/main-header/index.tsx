import { useEffect, useState } from 'react';

// helpers
import { useMedia } from 'react-use';

// components
import Link from 'next/link';
import { SocialMediaIcons } from 'design-system/templates';
import { Icon, Text } from 'design-system/atoms';
import { MobileNavMenu } from '../../mobile-nav-menu';

const navLinks = [
  { name: 'soil 101', slug: '/soil-101/soil-nexus' },
  { name: 'web of soil', slug: '/web-of-soil' },
  { name: 'media', slug: '/media' },
  { name: 'get involved', slug: '/get-involved' },
  { name: 'about us', slug: '/about-us' },
];

function createNavLinks() {
  return navLinks.map(({ name, slug }) => {
    return (
      <li key={name} className='text-center cursor-pointer xl:text-center xl:p-2 xl:py-0'>
        <Link href={slug}>
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
        className={`fixed overflow-hidden h-10 sm:h-16 top-0 w-full bg-white z-20 transition-all ease-out transform flex items-center ${
          hideHeader ? 'translate-y-[-105%]' : ''
        } `}
      >
        <nav className='container relative flex items-center justify-center py-2 xl:py-4 xl:justify-between'>
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
