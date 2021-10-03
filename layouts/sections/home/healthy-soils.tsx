// helpers
import { useCarouselHandlers } from 'helpers/use-carousel-handlers';
import { useAppContext } from 'context';

// components
import { Section, Slide, Button, Image, CarouselArrowLeft, CarouselArrowRight, Text } from 'design-system/atoms';

// data
import { healthySoilsSlides } from 'data/healthy-soils-slides';

export function HealthySoilsSection() {
  const {
    state: { fullpageApi },
  } = useAppContext();
  const { handleNextSlide, handlePreviousSlide } = useCarouselHandlers(fullpageApi);

  function handleFindOutHowClick() {
    fullpageApi.moveSlideRight();
  }

  return (
    <Section>
      <Slide>
        <div className='relative container flex flex-col justify-evenly h-full'>
          <div className='relative max-w-full max-h-[80%]'>
            <img className='h-full w-full object-contain' src='/images/home/healthy-soils/healthy-soil-wheel.png' />
            <div className='hidden absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-full text-center sm:block'>
              <Button as='button' label='find out how' type='neutral' size='md' onClick={handleFindOutHowClick} />
            </div>
          </div>
          <div className='text-center sm:hidden'>
            <Button as='button' label='find out how' type='neutral' size='md' onClick={handleFindOutHowClick} />
          </div>
        </div>
      </Slide>

      {healthySoilsSlides.map(({ name, content, photoUrl, arrowsImage, color }) => (
        <Slide key={name}>
          <div className='flex flex-col-reverse h-full sm:grid sm:grid-cols-3'>
            <div className='flex-grow py-10 sm:px-10 sm:py-4 text-center md:p-8'>
              <img src={arrowsImage} className='block mb-4' />
              <Text type='h1' weight='medium' size='2xl' color={color} className='mb-4 sm:mb-10'>
                {name}
              </Text>

              <div>
                <Image url={photoUrl} loading='lazy' className='sm:hidden object-cover' />
              </div>
              <Text type='p' weight='light' size='md' className='p-4 sm:p-0' style={{ lineHeight: '55px' }}>
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
