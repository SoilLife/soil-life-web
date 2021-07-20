// helpers
import { useMedia } from 'react-use';
import { useCarouselHandlers } from 'helpers/use-carousel-handlers';
import { useAppContext } from 'context';

// components
import { Section, Slide, Button, Image, CarouselArrowLeft, CarouselArrowRight } from 'design-system/atoms';

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
        <div className='flex items-center justify-center h-full'>
          <div className='relative inline-flex items-center justify-center w-full h-full p-10 sm:p-20'>
            <img className='h-full w-full object-contain' src='/images/home/healthy-soils/healthy-soil-wheel.png' />
            <div className='absolute text-center'>
              <p className='max-w-md mb-6 text-xl leading-tight text-teal-400 sm:text-5xl'>
                we believe
                <br />a healthy life starts
                <br />
                with healthy soil
              </p>
              <Button as='button' label='find out how' type='neutral' size={isTablet ? 'lg' : 'sm'} />
            </div>
          </div>
        </div>
      </Slide>
      {healthySoilsSlides.map(({ name, content, photoUrl, arrowsImage, nameColor }) => (
        <Slide key={name}>
          <div className='flex flex-col-reverse h-full sm:grid sm:grid-cols-3'>
            <div className='flex-grow px-10 py-4 text-center md:p-8'>
              <img src={arrowsImage} className='block mb-4' />
              <h1 className={`mb-10 font-acre-medium text-[60px] ${nameColor}`}>{name}</h1>
              <p className='font-acre-light text-[40px]'>{content}</p>
            </div>
            <div className='col-span-2 h-[33.33%] sm:h-full'>
              <Image url={photoUrl} loading='lazy' className='object-cover' />
            </div>
          </div>
        </Slide>
      ))}
      <CarouselArrowLeft className='left-0' onClick={handlePreviousSlide} />
      <CarouselArrowRight className='right-8' onClick={handleNextSlide} />
    </Section>
  );
}
