// components
import Link from 'next/link';
import { Typography, CardGetInvolved, Button } from 'components/atoms';
import { MainHeader } from 'components/templates';

// helpers
import { getColor, getButtonType } from 'helpers/get-color';

// interfaces
import { CardGetInvolvedProps } from 'components/atoms/card-get-involved/card-get-involved.interfaces';
import { getInvolvedHeadings } from 'data/main-headings';

function ReturnHomeButton({ color }: { color: 'pink' | 'blue' | 'orange' | 'yellow' | 'teal' | 'brown' }) {
  return (
    <div className='relative left-1/2 transform -translate-x-1/2 inline-flex justify-center my-8'>
      <img
        src='/images/worm.png'
        alt='illustration of an earth worm'
        className='absolute -left-1/2 md:-left-3/4 transform -rotate-6 w-32 md:w-48'
      />
      <Link href='/'>
        <Button label='Return Home' type={getButtonType(color)} size='md' as='link' />
      </Link>
    </div>
  );
}

export function GetInvolvedSection({
  title,
  cards,
  color,
}: {
  title: string;
  cards: Omit<CardGetInvolvedProps, 'index' | 'color'>[];
  color: 'pink' | 'blue' | 'orange' | 'yellow' | 'teal' | 'brown';
}) {
  let textColor = getColor({ color, type: 'text', state: 'idle' });

  return (
    <>
      <MainHeader
        headings={getInvolvedHeadings}
        pathName='get-involved'
        className={getColor({ color, type: 'bg', state: 'idle' })}
      />
      <div className='relative pt-16'>
        <Typography type='heading' className={`text-center py-6 ${textColor}`}>
          {title}
        </Typography>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-app-full mx-auto'>
          {cards.map((card, index) => (
            <CardGetInvolved key={index} index={index} color={color} {...card} />
          ))}
        </div>
        <ReturnHomeButton color={color} />
      </div>
    </>
  );
}
