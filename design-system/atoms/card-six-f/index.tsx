import Link from 'next/link';
import { Button } from 'design-system/atoms/button';
import { CardSixFProps } from './card-six-f.interfaces';
import { cardSixFTypeMap } from './card-six-f.utils';

export function Card6F({ type, href, icon, subtext, text, className, button }: CardSixFProps) {
  return (
    <div
      className={`relative z-10 bg-white max-w-[824px] h-[297px] w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full shadow-2xl ${className}`}
    >
      <div
        className={`absolute bottom-[80%] left-1/2 transform -translate-x-1/2 h-[160px] w-[160px] rounded-full ${cardSixFTypeMap[type]}`}
      >
        <img src={icon} />
      </div>
      <div className='flex flex-col h-full items-center justify-end p-6 pt-8'>
        <p className='font-acre-medium text-[30px] leading-none text-center mb-4'>{subtext}</p>
        <p className='font-acre-light text-[40px] leading-none text-center mb-10'>{text}</p>
        <Link href={href}>
          <Button {...button} />
        </Link>
      </div>
    </div>
  );
}

Card6F.defaultProps = {
  className: '',
};
