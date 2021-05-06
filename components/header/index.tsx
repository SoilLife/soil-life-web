import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Icon from 'components/atoms/icon';

import { kebabCase } from 'helpers/kebab-case';

function createNavLinks() {
  const navLinks = ['soil 101', 'web of soil', 'media', 'get involved', 'about us'];

  return navLinks.map((nav) => {
    const link = kebabCase(nav);
    return (
      <li key={link} className='text-right px-2 py-4 md:text-center md:p-2 md:py-0 cursor-pointer'>
        <Link href={`${link}`}>
          <a className='text-lg'>{nav}</a>
        </Link>
      </li>
    );
  });
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='relative'>
      <nav className='container flex items-center justify-between py-2'>
        <Link href='/'>
          <a>
            <Image
              src='/images/logo.jpg'
              layout='fixed'
              width='40'
              height='40'
              className='cursor-pointer'
              alt='soil life logo'
            />
          </a>
        </Link>
        <ul className='hidden md:flex gap-12'>{createNavLinks()}</ul>
        <ul className='hidden lg:flex gap-4'>
          <li>
            <Link href='https://www.facebook.com/TheSoilLife/'>
              <a>
                <Icon icon={['fab', 'facebook']} size='lg' className='text-red-400 cursor-pointer' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/soil.life'>
              <a>
                <Icon icon={['fab', 'instagram']} size='lg' className='text-red-400 cursor-pointer' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/the_Soil_Life'>
              <a>
                <Icon icon={['fab', 'twitter']} size='lg' className='text-red-400 cursor-pointer' />
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
