// helpers
import { useMedia } from 'react-use';
import { useCarouselHandlers } from 'helpers/use-carousel-handlers';
import { useAppContext } from 'helpers/app-context';

// components
import { Section, Slide, Button, Image, CarouselArrowLeft, CarouselArrowRight } from 'components/atoms';

// data
import { healthySoilsSlides } from 'data/healthy-soils-slides';

export function HealthySoilsSection() {
  const { fullpage } = useAppContext();
  const { handleNextSlide, handlePreviousSlide } = useCarouselHandlers(fullpage);
  const isTablet = useMedia('(min-width: 640px)');

  return (
    <Section>
      <Slide>
        <div className='flex items-center justify-center h-full'>
          <div className='relative inline-flex items-center justify-center w-full h-full p-10 sm:p-20 text-brown-400'>
            <img className='h-full' src='/images/home/healthy-soils/healthy-soil-wheel.svg' />
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
              <h1 className={`text-3xl md:text-4xl lg:text-6xl mb-10 ${nameColor}`}>{name}</h1>
              <p className='text-lg md:text-xl lg:text-3xl text-brown-400'>{content}</p>
            </div>
            <div className='col-span-2 h-[33.33%] sm:h-full'>
              <Image url={photoUrl} loading='lazy' className='object-cover' />
            </div>
          </div>
        </Slide>
      ))}
      <CarouselArrowLeft onClick={handlePreviousSlide} />
      <CarouselArrowRight onClick={handleNextSlide} />
    </Section>
  );
}
