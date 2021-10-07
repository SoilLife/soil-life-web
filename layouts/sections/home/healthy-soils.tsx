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
        <div className='relative container flex flex-col justify-center h-full'>
          <div className='relative max-w-full max-h-[80%]'>
            <img className='h-full w-full object-contain' src='/images/home/healthy-soils/healthy-soil-wheel.png' />
            <div className='hidden absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-full text-center sm:block'>
              <Button as='button' label='find out how' type='neutral' size='md' onClick={handleFindOutHowClick} />
            </div>
          </div>
          <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 sm:hidden'>
            <Button as='button' label='find out how' type='neutral' size='md' onClick={handleFindOutHowClick} />
          </div>
          <CarouselArrowLeft className='left-1 sm:hidden' onClick={handlePreviousSlide} />
          <CarouselArrowRight className='right-1 sm:hidden' onClick={handleNextSlide} />
        </div>
      </Slide>

      {healthySoilsSlides.map(({ name, content, imageUrl, arrowsImage, color, imageClassName }) => (
        <Slide key={name}>
          <div className='flex flex-col-reverse h-full sm:grid sm:grid-cols-3'>
            <div className='flex-grow h-full w-full sm:block sm:col-span-1 sm:px-10 sm:py-4 text-center md:px-10 md:py-8'>
              <img src={arrowsImage} className='block mt-10 mx-auto h-[122px] sm:mt-0 2xl:mt-10' />
              <Text type='h1' weight='medium' size='2xl' color={color} className='mb-4 sm:mb-10'>
                {name}
              </Text>

              <div className='relative overflow-hidden w-full h-[320px] sm:hidden'>
                <Image url={imageUrl} loading='lazy' className={`object-cover ${imageClassName}`} />
                <CarouselArrowLeft className='left-1 sm:hidden' onClick={handlePreviousSlide} />
                <CarouselArrowRight className='right-1 sm:hidden' onClick={handleNextSlide} />
              </div>
              <Text
                type='p'
                weight='light'
                size='md'
                className='leading-normal h-full sm:leading-relaxed px-4 pt-4 sm:p-0'
              >
                {content}
              </Text>
            </div>
            <div className='hidden overflow-hidden sm:block sm:h-full sm:col-span-2'>
              <Image url={imageUrl} loading='lazy' className={`object-cover ${imageClassName}`} />
            </div>
          </div>
        </Slide>
      ))}
      <CarouselArrowLeft className='hidden left-1 sm:inline-block' onClick={handlePreviousSlide} />
      <CarouselArrowRight className='hidden right-1 sm:inline-block' onClick={handleNextSlide} />
    </Section>
  );
}
