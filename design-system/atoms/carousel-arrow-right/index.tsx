export function CarouselArrowRight({ className, ...props }: { onClick: () => void; className?: string }) {
  return (
    <button
      className={`absolute top-1/2 transition-transform ease-out duration-300 transform -translate-y-1/2 z-50 cursor-pointer hover:scale-105 ${className}`}
      {...props}
    >
      <img src='/images/right_arrow_pink_thick.svg' className='w-full h-16' />
    </button>
  );
}

CarouselArrowRight.defaultProps = {
  className: '',
};
