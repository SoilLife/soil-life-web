import { useState } from 'react';

import { IKImage } from 'imagekitio-react';
import Link from 'next/link';
import Icon from 'components/atoms/icon';

import { kebabCase } from 'helpers/kebab-case';

function createNavLinks() {
  const navLinks = ['soils 101', 'web of soil', 'media', 'get involved', 'about us'];

  return navLinks.map((nav) => {
    const link = kebabCase(nav);
    return (
      <li key={link} className='text-right px-2 py-4 md:text-center md:p-2 md:py-0 cursor-pointer'>
        <Link href={`/${link}`}>
          <a className='text-xl font-acre-medium'>{nav}</a>
        </Link>
      </li>
    );
  });
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <nav className='container flex items-center justify-between'>
        <Link href='/'>
          <a className='relative'>
            <IKImage path='/home/logo_oZlDnyvtjC.svg' className='cursor-pointer' alt='soil life logo' />
          </a>
        </Link>
        <ul className='hidden md:flex gap-16'>{createNavLinks()}</ul>
        <ul className='hidden lg:flex gap-4'>
          <li>
            <Link href='https://www.facebook.com/TheSoilLife/'>
              <a>
                <Icon icon={['fab', 'facebook']} size='lg' className='text-pink-500 cursor-pointer' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/soil.life'>
              <a>
                <Icon icon={['fab', 'instagram']} size='lg' className='text-pink-500 cursor-pointer' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/the_Soil_Life'>
              <a>
                <Icon icon={['fab', 'twitter']} size='lg' className='text-pink-500 cursor-pointer' />
              </a>
            </Link>
          </li>
        </ul>
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
