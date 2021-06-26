export function CarouselArrowLeft(props: { onClick: () => void }) {
  return (
    <button
      className='absolute left-4 top-1/2 transition-transform ease-out duration-300 transform -translate-y-1/2 z-10 cursor-pointer hover:scale-105'
      {...props}
    >
      <img src='/images/left_arrow_pink_thick.svg' className='w-full' />
    </button>
  );
}
