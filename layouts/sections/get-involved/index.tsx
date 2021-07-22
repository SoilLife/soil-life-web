// components
import Link from 'next/link';
import { Text, CardGetInvolved } from 'design-system/atoms';
import { Header } from 'design-system/templates';

// helpers
import { getColor } from 'helpers/get-color';

// interfaces
import { CardGetInvolvedProps } from 'design-system/atoms/card-get-involved/card-get-involved.interfaces';
import { getInvolvedHeadings } from 'data/main-headings';

function ReturnHomeButton({ color }: { color: 'pink' | 'blue' | 'orange' | 'yellow' | 'teal' | 'gray' }) {
  return (
    <div className='relative left-1/2 transform -translate-x-1/2 inline-flex justify-center my-20'>
      <Link href='/get-involved'>
        <a
          className={`
          ${getColor({ color, type: 'text', state: 'idle' })}
          ${getColor({ color, type: 'text', state: 'hover' })}
          ${getColor({ color, type: 'text', state: 'active' })}
          ${getColor({ color, type: 'border', state: 'idle' })}
          relative py-3 w-[362px] text-center text-[36px]
          `}
        >
          <img
            src='/images/worm.png'
            alt='illustration of an earth worm'
            className='absolute top-1/2 right-[80%] transform -rotate-6 -translate-y-1/2 w-[200px]'
          />
          <p className='leading-none'>return to</p>
          <p className='leading-none'>home page</p>
        </a>
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
  color: 'pink' | 'blue' | 'orange' | 'yellow' | 'teal' | 'gray';
}) {
  let textColor = getColor({ color, type: 'text', state: 'idle' });

  return (
    <>
      <Header.Sub
        headings={getInvolvedHeadings}
        pathName='get-involved'
        className={getColor({ color, type: 'bg', state: 'idle' })}
      />
      <div className='container relative pt-16'>
        <Text type='h1' weight='bold' className={`text-center py-6 ${textColor}`}>
          {title}
        </Text>
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
