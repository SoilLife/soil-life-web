import { useEffect, useState } from 'react';

// helpers
import { kebabCase } from 'helpers/kebab-case';

// components
import Link from 'next/link';
import { SocialMediaIcons } from 'design-system/templates';
import { Icon, Text } from 'design-system/atoms';

export function createNavLinks() {
  const navLinks = [
    { name: 'soils 101', anchorTag: '#soil-101' },
    { name: 'web of soil', anchorTag: '#web-of-soil' },
    { name: 'media', anchorTag: '#media' },
    { name: 'get involved', anchorTag: '#get-involved' },
    { name: 'about us', anchorTag: '#about-us' },
  ];

  return navLinks.map(({ name, anchorTag: _anchorTag }) => {
    const link = kebabCase(name);
    return (
      <li key={link} className='p-10 text-center cursor-pointer xl:text-center xl:p-2 xl:py-0'>
        <Link href={`/${link}`}>
          <a className='text-[30px] font-acre-light hover:text-gray-300 active:text-gray-600 whitespace-nowrap'>
            {name}
          </a>
        </Link>
      </li>
    );
  });
}

export function HomeHeader({
  hideHeader,
  fullpageRef,
}: {
  fullpageRef: React.MutableRefObject<any | null>;
  hideHeader: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      <header
        className={`fixed overflow-hidden top-0 w-full bg-white z-20 transition-all ease-out transform ${
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
              <Text type='h2' weight='light' className='uppercase text-[20px] xl:hidden'>
                Soil
              </Text>
              <img src='/images/logo.svg' className='h-6 xl:h-[56px]' />
              <Text type='h2' weight='light' className='uppercase text-[20px] xl:hidden'>
                Life
              </Text>
            </a>
          </Link>
          <ul className='hidden gap-16 w-full xl:flex xl:justify-center'>{createNavLinks()}</ul>
          <SocialMediaIcons className='absolute top-1/2 right-2 transform -translate-y-1/2 flex gap-2 md:gap-4' />
        </nav>
      </header>
      <ul
        className={`fixed flex flex-col justify-center items-center w-full sm:w-auto h-full left-0 z-10 top-0 bg-white shadow-md p ${
          isMenuOpen ? 'translate-x-0' : 'hidden'
        } xl:hidden`}
      >
        {createNavLinks()}
      </ul>
    </>
  );
}
