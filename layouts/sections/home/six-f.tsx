import { Card6F } from 'design-system/atoms/card-six-f';
import { slides } from 'data/six-f-slides';
import { Section, Slide, Image, CarouselArrowLeft, CarouselArrowRight } from 'design-system/atoms';
import { useCarouselHandlers } from 'helpers/use-carousel-handlers';
import { useAppContext } from 'context';

export function SixFSection() {
  const {
    state: { fullpageApi },
  } = useAppContext();
  const { handleNextSlide, handlePreviousSlide } = useCarouselHandlers(fullpageApi);

  return (
    <Section className='relative section-home-six-f'>
      {slides.map(({ photoUrl, ...slide }, index) => {
        return (
          <Slide className='relative' key={index}>
            <Card6F {...slide} />
            <div className='absolute top-1/3 left-0 w-full h-full'>
              <Image key={index} url={photoUrl} className='object-cover' />
            </div>
          </Slide>
        );
      })}
      <CarouselArrowLeft className='left-0' onClick={handlePreviousSlide} />
      <CarouselArrowRight className='right-0' onClick={handleNextSlide} />
    </Section>
  );
}
