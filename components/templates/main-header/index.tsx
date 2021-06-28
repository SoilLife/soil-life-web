import { useState } from 'react';

// helpers
import { useRouter } from 'next/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { createNavLinks } from '../home-header';

// components
import Link from 'next/link';
import { Icon, Typography } from 'components/atoms';

// interfaces
import { MainHeaderProps } from './main-header.interface';

export function MainHeader({ pathName, headings, className }: MainHeaderProps) {
  const route = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    const body = document.querySelector('body');

    setIsMenuOpen((isOpen) => {
      if (isOpen) {
        if (body) {
          body.style.overflowY = 'auto';
        }
        return false;
      } else {
        if (body) {
          body.style.overflowY = 'hidden';
        }
        return true;
      }
    });
  }

  return (
    <>
      <div className={`absolute top- w-full z-10 ${className}`}>
        <nav className='container'>
          <ul className='flex items-center justify-between h-16'>
            <li>
              <Icon icon={faBars} size='2x' className='text-white cursor-pointer' onClick={toggleMenu} />
            </li>
            {headings.map(({ name, slug, asset }) => {
              const href = `/${pathName}/${slug}`;
              const isActive = route.pathname === href;

              return (
                <li key={name} className='text-white cursor-pointer'>
                  <Link href={href}>
                    <a>
                      <img
                        src={asset}
                        height={50}
                        width={50}
                        className={isActive ? 'rounded-full bg-brown-400 ring-2 ring-white' : ''}
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div
        className={`absolute w-full h-full max-w-xs bg-white p-4 z-30 transition-all duration-100 ease-in-out transform shadow-lg ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <a className='relative flex items-center space-x-4'>
              <img src='/images/logo.svg' className='h-[56px]' style={{ height: 56 }} />
              <Typography type='subheading'>Soil Life</Typography>
            </a>
          </Link>
          <Icon icon={faTimes} onClick={toggleMenu} size='2x' className='cursor-pointer' />
        </div>
        <ul className='mt-10 space-y-6'>{createNavLinks()}</ul>
      </div>
      {isMenuOpen && <div className='bg-black bg-opacity-25 absolute top-0 left-0 h-full w-full z-20' />}
    </>
  );
}

MainHeader.defaultProps = {
  className: '',
};
