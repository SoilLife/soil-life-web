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

  // section-home-six-f
  return (
    <Section className='relative '>
      {slides.map(({ photoUrl, imageClassname = '', ...slide }, index) => {
        return (
          <Slide className='relative' key={index}>
            <Card6F {...slide} />
            <div className='absolute overflow-hidden top-1/2 left-0 w-full h-full xl:top-1/3'>
              <Image key={index} url={photoUrl} className={`h-2/3 object-cover ${imageClassname}`} />
            </div>
          </Slide>
        );
      })}
      <CarouselArrowLeft className='left-1' onClick={handlePreviousSlide} />
      <CarouselArrowRight className='right-1' onClick={handleNextSlide} />
    </Section>
  );
}
