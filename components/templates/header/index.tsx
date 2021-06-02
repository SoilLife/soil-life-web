import { useState } from 'react';

// helpers
import { kebabCase } from 'helpers/kebab-case';

// components
import Link from 'next/link';
import { SocialMediaIcons } from 'components/templates';
import { Icon, Image } from 'components/atoms';

function createNavLinks() {
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
      <li key={link} className='px-2 py-4 text-right cursor-pointer md:text-center md:p-2 md:py-0'>
        <Link href={`/${link}`}>
          <a className='text-xl font-acre-medium'>{name}</a>
        </Link>
      </li>
    );
  });
}

export function Header({ hideHeader }: { fullpageRef: React.MutableRefObject<any>; hideHeader: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full bg-white z-10 transition-all ease-out transform ${
        hideHeader ? 'translate-y-[-105%]' : ''
      } `}
    >
      <nav className='container flex items-center justify-between'>
        <Link href='/'>
          <a className='relative'>
            <Image url='/logo_uQKRRnvk7wo.svg' className='cursor-pointer' alt='soil life logo' />
          </a>
        </Link>
        <ul className='hidden gap-16 md:flex'>{createNavLinks()}</ul>
        <SocialMediaIcons className='hidden gap-4 lg:flex' />
        <div className='relative md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Icon icon='bars' size='2x' />
          </button>
        </div>
      </nav>
      <ul
        className={`absolute w-56 right-0 z-10 bg-white shadow-md transition duration-300 ease-in-out transform translate-x-full ${
          isMenuOpen ? 'translate-x-0' : ''
        } md:hidden `}
      >
        {createNavLinks()}
      </ul>
    </header>
  );
}
