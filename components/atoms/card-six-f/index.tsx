import Link from 'next/link';
import { Button } from 'components/atoms/button';
import { CardSixFProps } from './card-six-f.interfaces';
import { cardSixFTypeMap } from './card-six-f.utils';

export function Card6F({ type, href, icon, subtext, text, className, button }: CardSixFProps) {
  return (
    <div
      className={`absolute top-40 left-1/2 transform -translate-x-1/2 w-96 min-h-40 shadow-lg z-10 mx-auto bg-white 2xl:w-[600px] 2xl:min-h-[300px] 2xl:top-72 ${className}`}
    >
      <div
        className={`absolute -top-1/4 left-1/2 transform -translate-x-1/2 h-16 w-16 rounded-full ${cardSixFTypeMap[type]}`}
      >
        <img src={icon} />
      </div>
      <div className='h-full text-center grid place-items-center p-6 pt-8'>
        <p>{subtext}</p>
        <p className='mb-8'>{text}</p>
        <Link href={href}>
          <Button {...button} />
        </Link>
      </div>
    </div>
  );
}
