import { MainHeaderProps } from './main-header.interface';
import Link from 'next/link';

export function MainHeader({ pathName, headings, backgroundColor = 'var(--pink-500)' }: MainHeaderProps) {
  return (
    <div className='container w-full' style={{ backgroundColor }}>
      <nav>
        <ul className='flex items-center justify-between h-16'>
          {headings.map(({ name, slug, asset }) => (
            <li key={name} className='text-white cursor-pointer'>
              <Link href={`/${pathName}/${slug}`}>
                <a>
                  <img src={asset} height={50} width={50} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
