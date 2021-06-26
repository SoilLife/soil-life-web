import Link from 'next/link';
import { Icon } from 'components/atoms';

import { SocialMediaIconsProps } from './social-media-icons.interfaces';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const links: { href: string; icon: IconProp }[] = [
  {
    href: 'https://www.facebook.com/TheSoilLife/',
    icon: ['fab', 'facebook'],
  },
  {
    href: 'https://www.instagram.com/soil.life',
    icon: ['fab', 'instagram'],
  },
  {
    href: 'https://twitter.com/the_Soil_Life',
    icon: ['fab', 'twitter'],
  },
];

export function SocialMediaIcons(props: SocialMediaIconsProps) {
  return (
    <ul {...props}>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>
            <a>
              <Icon icon={link.icon} size='lg' className='text-pink-500 cursor-pointer h-8 w-8' />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
