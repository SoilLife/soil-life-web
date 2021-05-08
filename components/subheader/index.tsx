import { SubheaderProps } from './subheader.interface';
import Link from 'next/link';
import Image from 'next/image';

export function Subheader({ pathName, subheadings, backgroundColor = 'var(--pink-500)' }: SubheaderProps) {
  return (
    <div className='container w-full' style={{ backgroundColor }}>
      <nav>
        <ul className='flex items-center justify-between h-16'>
          {subheadings.map(({ name, slug, asset }) => (
            <li key={name} className='text-white cursor-pointer'>
              <Link href={`/${pathName}/${slug}`}>
                <a>
                  <Image src={asset} height={50} width={50} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
