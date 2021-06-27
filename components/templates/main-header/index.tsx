import { MainHeaderProps } from './main-header.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function MainHeader({ pathName, headings, backgroundColor = 'var(--pink-500)' }: MainHeaderProps) {
  const route = useRouter();
  return (
    <div className='absolute top- w-full z-10' style={{ backgroundColor }}>
      <nav className='container'>
        <ul className='flex items-center justify-between h-16'>
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
  );
}
