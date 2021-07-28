// helpers
import { useCarouselHandlers } from 'helpers/use-carousel-handlers';
import { useAppContext } from 'context';

// components
import Link from 'next/link';
import { Section, Slide, Button, Image, CarouselArrowLeft, CarouselArrowRight, Text } from 'design-system/atoms';

// data
import { healthySoilsSlides } from 'data/healthy-soils-slides';

export function HealthySoilsSection() {
  const {
    state: { fullpageApi },
  } = useAppContext();
  const { handleNextSlide, handlePreviousSlide } = useCarouselHandlers(fullpageApi);

  return (
    <Section>
      <Slide>
        <div className='relative container flex flex-col justify-evenly h-full'>
          <div className='relative max-h-full max-w-full'>
            <img
              className='max-h-[900px] h-full w-full object-contain'
              src='/images/home/healthy-soils/healthy-soil-wheel.png'
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
              <div className='space-y-4'>
                <Text type='p' weight='light' size='lg' className='text-teal-500'>
                  we believe
                </Text>
                <Text type='p' weight='light' size='lg' className='text-teal-500'>
                  a healthy life starts
                </Text>
                <Text type='p' weight='light' size='lg' className='text-teal-500'>
                  with healthy soil
                </Text>
              </div>
              <div className='mt-20 text-center hidden sm:block'>
                <Button as='button' label='find out how' type='neutral' size='md' />
              </div>
            </div>
          </div>
          <div className='text-center sm:hidden'>
            <Link href='/web-of-soil'>
              <Button as='button' label='find out how' type='neutral' size='md' />
            </Link>
          </div>
        </div>
      </Slide>

      {healthySoilsSlides.map(({ name, content, photoUrl, arrowsImage, nameColor }) => (
        <Slide key={name}>
          <div className='flex flex-col-reverse h-full sm:grid sm:grid-cols-3'>
            <div className='flex-grow py-10 sm:px-10 sm:py-4 text-center md:p-8'>
              <img src={arrowsImage} className='block mb-4' />
              <Text type='h1' weight='medium' size='lg' className={`mb-4 sm:mb-10 ${nameColor}`}>
                {name}
              </Text>

              <div>
                <Image url={photoUrl} loading='lazy' className='sm:hidden object-cover' />
              </div>
              <Text type='p' weight='light' size='md' className='p-4 sm:p-0'>
                {content}
              </Text>
            </div>
            <div className='col-span-2 hidden sm:block sm:h-full'>
              <Image url={photoUrl} loading='lazy' className='object-cover' />
            </div>
          </div>
        </Slide>
      ))}
      <CarouselArrowLeft className='left-1' onClick={handlePreviousSlide} />
      <CarouselArrowRight className='right-1' onClick={handleNextSlide} />
    </Section>
  );
}
