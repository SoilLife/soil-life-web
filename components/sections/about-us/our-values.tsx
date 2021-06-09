// components
import { Section, Typography, CardFlip } from 'components/atoms';

// data
import { flipCards } from 'data/values-flip-cards';

export function OurValuesSection() {
  return (
    <Section>
      <div className='flex flex-col items-center justify-center h-full p-4 mx-auto text-center sm:px-16 sm:py-8 sm:space-y-10'>
        <Typography type='subheading' className='mb-4 text-teal-400'>
          Our Values
        </Typography>
        <div className='grid w-full grid-cols-3 grid-rows-3 gap-6'>
          {flipCards.map((card, index) => (
            <div key={index} className='relative h-40 md:h-60 lg:h-96 xl:h-52 2xl:h-64'>
              <CardFlip {...card} order={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
