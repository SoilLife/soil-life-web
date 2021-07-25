import { kebabCase } from 'helpers/kebab-case';
import Link from 'next/link';

const navLinks = [
  { name: 'home' },
  { name: 'soils 101' },
  { name: 'web of soil' },
  { name: 'media' },
  { name: 'get involved' },
  { name: 'about us' },
];

function createNavLinks() {
  return navLinks.map(({ name }) => {
    const link = kebabCase(name);
    return (
      <li key={link} className='text-center cursor-pointer'>
        <Link href={link === 'home' ? '/' : `/${link}`}>
          <a className='p-4 text-[30px] font-acre-light hover:text-gray-300 active:text-gray-600 whitespace-nowrap'>
            {name}
          </a>
        </Link>
      </li>
    );
  });
}

export function MobileNavMenu({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <>
      <ul
        className={`
      fixed top-10 left-0 pt-10 bg-white shadow-md
      w-full h-full z-50 space-y-10
      transform transition-all duration-200 ease-in-out
      sm:top-16 sm:w-auto
      ${isMenuOpen ? '' : '-translate-x-full'}
     `}
      >
        {createNavLinks()}
      </ul>
      {isMenuOpen && <div className={`bg-gray-900 bg-opacity-25 absolute top-0 left-0 h-full w-full z-10`} />}
    </>
  );
}