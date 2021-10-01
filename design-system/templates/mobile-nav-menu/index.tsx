import { Text } from 'design-system/atoms';
import Link from 'next/link';

const navLinks = [
  { name: 'home', slug: '/' },
  { name: 'soil 101', slug: '/soil-101/soil-nexus' },
  { name: 'web of soil', slug: '/web-of-soil' },
  { name: 'media', slug: '/media' },
  { name: 'get involved', slug: '/get-involved' },
  { name: 'about us', slug: '/about-us' },
];

function createNavLinks() {
  return navLinks.map(({ name, slug }) => {
    return (
      <li key={name} className='text-center cursor-pointer'>
        <Link href={slug}>
          <a>
            <Text
              type='h3'
              weight='light'
              size='lg'
              className='py-5 whitespace-nowrap hover:text-gray-300 active:text-gray-600'
            >
              {name}
            </Text>
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
      w-full h-full z-50 min-w-[320px]
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
