import {
  FoodSlide,
  FiberSlide,
  FilterSlide,
  Filter2Slide,
  FarmaceuticalSlide,
  FoundationSlide,
  FunSlide,
} from './_slides';

export function SixFSection() {
  return (
    <section className='h-screen flex overflow-y-hidden overflow-x-auto'>
      <FoodSlide />
      <FiberSlide />
      <FilterSlide />
      <Filter2Slide />
      <FoundationSlide />
      <FarmaceuticalSlide />
      <FunSlide />
    </section>
  );
}
