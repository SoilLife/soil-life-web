import { useState, useRef } from 'react';

// helpers
import { kebabCase } from 'helpers/kebab-case';

// components
import { IKImage } from 'imagekitio-react';
import { SocialMediaIcons } from 'components/social-media-icons';
import Link from 'next/link';
import Icon from 'components/atoms/icon';

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
      <li key={link} className='text-right px-2 py-4 md:text-center md:p-2 md:py-0 cursor-pointer'>
        <Link href={`/${link}`}>
          <a className='text-xl font-acre-medium'>{name}</a>
        </Link>
      </li>
    );
  });
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header ref={headerRef} className='absolute top-0 w-full bg-white z-10'>
      <nav className='container flex items-center justify-between'>
        <Link href='/'>
          <a className='relative'>
            <IKImage path='/logo_uQKRRnvk7wo.svg' className='cursor-pointer' alt='soil life logo' />
          </a>
        </Link>
        <ul className='hidden md:flex gap-16'>{createNavLinks()}</ul>
        <SocialMediaIcons className='hidden lg:flex gap-4' />
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
