import Image from 'next/image';
import Link from 'next/link';
import Icon from 'components/atoms/icon';

export default function Header(props: {}) {
  return (
    <header>
      <nav className='container mx-auto flex items-center justify-between py-2 px-4'>
        <Image src='/assets/logo.jpg' layout='fixed' width='40' height='40' />
        <ul className='flex gap-8'>
          <li>Soil 101</li>
          <li>Web of Soil</li>
          <li>Media</li>
          <li>Get Involved</li>
          <li>About Us</li>
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
