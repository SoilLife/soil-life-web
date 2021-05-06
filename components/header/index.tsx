import Image from 'next/image';
import Link from 'next/link';
import Icon from 'components/atoms/icon';
import { kebabCase } from 'helpers/kebab-case';

const navLinks = ['soil 101', 'web of soil', 'media', 'get involved', 'about us'];

export default function Header(props: {}) {
  return (
    <header>
      <nav className='container mx-auto flex items-center justify-between py-2 px-4'>
        <Link href='/'>
          <Image
            src='/assets/logo.jpg'
            layout='fixed'
            width='40'
            height='40'
            className='cursor-pointer'
            alt='soil life logo'
          />
        </Link>
        <ul className='flex gap-12'>
          {navLinks.map((nav) => {
            const link = kebabCase(nav);
            return (
              <li key={link} className='p-2 cursor-pointer'>
                <Link href={`${link}`}>
                  <span className='text-lg'>{nav}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className='flex gap-4'>
          <li>
            <Link href='https://www.facebook.com/TheSoilLife/'>
              <Icon icon={['fab', 'facebook']} size='lg' className='text-red-400 cursor-pointer' />
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/soil.life'>
              <Icon icon={['fab', 'instagram']} size='lg' className='text-red-400 cursor-pointer' />
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/the_Soil_Life'>
              <Icon icon={['fab', 'twitter']} size='lg' className='text-red-400 cursor-pointer' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
