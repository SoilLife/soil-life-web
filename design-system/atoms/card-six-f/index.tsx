import Link from 'next/link';
import { Button, Text } from 'design-system/atoms';
import { CardSixFProps } from './card-six-f.interfaces';
import { cardSixFTypeMap } from './card-six-f.utils';

export function Card6F({ type, subtext, href, icon, text, className, button }: CardSixFProps) {
  return (
    <div
      className={`relative z-10 max-w-sm rounded-3xl bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-3/4 shadow-2xl
      sm:rounded-none sm:max-w-[600px] sm:h-[220px] sm:w-full
      md:max-w-[700px] md:h-[297px]
      ${className}`}
    >
      <div
        className={`absolute bottom-[90%] sm:bottom-[80%] left-1/2 transform -translate-x-1/2 h-24 w-24 sm:h-[160px] sm:w-[160px] rounded-full ${cardSixFTypeMap[type]}`}
      >
        <img src={icon} />
      </div>
      <div className='flex flex-col h-full items-center justify-end p-6 pt-8 text-center'>
        <Text type='p' weight='medium' size='sm' className='mb-4'>
          {subtext}
        </Text>
        <Text type='p' weight='light' size='lg' className='mb-4 sm:mb-10'>
          {text}
        </Text>
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
