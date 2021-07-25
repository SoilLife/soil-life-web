// helpers
import { useMedia } from 'react-use';
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
  const isTablet = useMedia('(min-width: 640px)');

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
              <Text type='p' weight='light' size='lg' className='text-[22px] sm:text-[40px] text-teal-500'>
                we believe
              </Text>
              <Text type='p' weight='light' size='lg' className='text-[22px] sm:text-[40px] text-teal-500'>
                a healthy life starts
              </Text>
              <Text type='p' weight='light' size='lg' className='text-[22px] sm:text-[40px] text-teal-500'>
                with healthy soil
              </Text>
              <div className='text-center hidden sm:block sm:mt-5'>
                <Button as='button' label='find out how' type='neutral' size={isTablet ? 'lg' : 'sm'} />
              </div>
            </div>
          </div>
          <div className='text-center sm:hidden'>
            <Link href='/web-of-soil'>
              <Button as='button' label='find out how' type='neutral' size={isTablet ? 'lg' : 'sm'} />
            </Link>
          </div>
        </div>
      </Slide>

      {healthySoilsSlides.map(({ name, content, photoUrl, arrowsImage, nameColor }) => (
        <Slide key={name}>
          <div className='flex flex-col-reverse h-full sm:grid sm:grid-cols-3'>
            <div className='flex-grow py-10 sm:px-10 sm:py-4 text-center md:p-8'>
              <img src={arrowsImage} className='block mb-4' />
              <h1 className={`mb-4 sm:mb-10 font-acre-medium text-3xl sm:text-5xl xl:text-[60px] ${nameColor}`}>
                {name}
              </h1>
              <div>
                <Image url={photoUrl} loading='lazy' className='sm:hidden object-cover' />
              </div>
              <p className='font-acre-light p-4 sm:p-0 sm:text-3xl xl:text-[40px]'>{content}</p>
            </div>
            <div className='col-span-2 hidden sm:block sm:h-full'>
              <Image url={photoUrl} loading='lazy' className='object-cover' />
            </div>
          </div>
        </Slide>
      ))}
      <CarouselArrowLeft className='left-0' onClick={handlePreviousSlide} />
      <CarouselArrowRight className='right-0' onClick={handleNextSlide} />
    </Section>
  );
}
