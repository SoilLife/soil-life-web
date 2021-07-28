import { useState } from 'react';

// helpers
import { useRouter } from 'next/router';

// components
import Link from 'next/link';
import { Icon } from 'design-system/atoms';
import { MobileNavMenu } from '../../mobile-nav-menu';

// interfaces
import { SubHeaderProps } from './sub-header.interface';

export function SubHeader({ pathName, headings, className }: SubHeaderProps) {
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
      <div className={`absolute top-0 w-full z-20 ${className}`}>
        <nav className='container'>
          <ul className='flex items-center justify-between h-10 sm:h-16'>
            <li>
              <Icon
                icon={isMenuOpen ? 'x' : 'menu'}
                className='text-white cursor-pointer h-8 w-8'
                onClick={toggleMenu}
              />
            </li>
            {headings.map(({ name, slug, asset }) => {
              const href = `/${pathName}/${slug}`;
              const isActive = route.pathname === href;

              return (
                <li key={name} className='text-white cursor-pointer'>
                  <Link href={href}>
                    <a title={name}>
                      <img
                        src={asset}
                        className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
                          isActive ? 'rounded-full bg-gray-500 ring-2 ring-white' : ''
                        }`}
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <MobileNavMenu isMenuOpen={isMenuOpen} />
    </>
  );
}

SubHeader.defaultProps = {
  className: '',
};
