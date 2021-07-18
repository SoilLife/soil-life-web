import { useEffect, useState } from 'react';

// helpers
import { kebabCase } from 'helpers/kebab-case';

// components
import Link from 'next/link';
import { SocialMediaIcons } from 'components/templates';
import { Icon } from 'components/atoms';

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
      <li key={link} className='w-full px-2 py-4 text-center cursor-pointer md:text-center md:p-2 md:py-0'>
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
        className={`fixed overflow-hidden top-0 w-full bg-white z-10 transition-all ease-out transform ${
          hideHeader ? 'translate-y-[-105%]' : ''
        } `}
      >
        <nav className='container flex items-center justify-between py-4'>
          <Link href='/'>
            <a className='relative'>
              <img src='/images/logo.svg' className='h-[56px]' style={{ height: 56 }} />
            </a>
          </Link>
          <ul className='hidden gap-16 w-full md:flex'>{createNavLinks()}</ul>
          <SocialMediaIcons className='hidden gap-4 lg:flex' />
          <div className='w-10 h-10 md:hidden'>
            <button className='w-full h-full' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon className='w-full h-full' icon={isMenuOpen ? 'x' : 'menu'} size='2x' />
            </button>
          </div>
        </nav>
      </header>
      <ul
        className={`absolute justify-center w-full h-full right-0 z-10 top-[88px] pt-16 bg-white shadow-md p ${
          isMenuOpen ? 'translate-x-0' : 'hidden'
        } md:hidden`}
      >
        {createNavLinks()}
      </ul>
    </>
  );
}
