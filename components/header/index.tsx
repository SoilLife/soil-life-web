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
          <span className='text-lg'>{nav}</span>
        </Link>
      </li>
    );
  });
}

export default function Header(props: {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='relative'>
      <nav className='container flex items-center justify-between py-2'>
        <Link href='/'>
          <div className='grid place-items-center'>
            <Image
              src='/assets/logo.jpg'
              layout='fixed'
              width='40'
              height='40'
              className='cursor-pointer'
              alt='soil life logo'
            />
          </div>
        </Link>
        <ul className='hidden md:flex gap-12'>{createNavLinks()}</ul>
        <ul className='hidden lg:flex gap-4'>
          <li>
            <Link href='https://www.facebook.com/TheSoilLife/'>
              <span>
                <Icon icon={['fab', 'facebook']} size='lg' className='text-red-400 cursor-pointer' />
              </span>
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/soil.life'>
              <span>
                <Icon icon={['fab', 'instagram']} size='lg' className='text-red-400 cursor-pointer' />
              </span>
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/the_Soil_Life'>
              <span>
                <Icon icon={['fab', 'twitter']} size='lg' className='text-red-400 cursor-pointer' />
              </span>
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
