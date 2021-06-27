import { Card6F } from 'components/atoms/card-six-f';
import { slides } from 'data/six-f-slides';
import { Section, Slide, Image, CarouselArrowLeft, CarouselArrowRight } from 'components/atoms';
import { useCarouselHandlers } from 'helpers/use-carousel-handlers';
import { useAppContext } from 'helpers/app-context';

export function SixFSection() {
  const { fullpage } = useAppContext();
  const { handleNextSlide, handlePreviousSlide } = useCarouselHandlers(fullpage);

  return (
    <Section className='relative section-home-six-f'>
      {slides.map(({ photoUrl, ...slide }, index) => {
        return (
          <Slide className='relative' key={index}>
            <Card6F {...slide} />
            <div className='absolute top-0 left-0 w-full h-full sm:top-1/3 '>
              <Image key={index} url={photoUrl} className='object-cover' />
            </div>
          </Slide>
        );
      })}
      <CarouselArrowLeft onClick={handlePreviousSlide} />
      <CarouselArrowRight onClick={handleNextSlide} />
    </Section>
  );
}
