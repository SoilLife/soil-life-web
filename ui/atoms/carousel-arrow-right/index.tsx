import Image from "next/image";

export function CarouselArrowRight({
  className,
  ...props
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={`absolute top-1/2 transition-transform ease-out duration-300 transform -translate-y-1/2 z-50 cursor-pointer hover:scale-105 ${className}`}
      {...props}
    >
      <Image
        width={16}
        height={64}
        src="/images/right_arrow_pink_thick.svg"
        alt="arrow right"
      />
    </button>
  );
}

CarouselArrowRight.defaultProps = {
  className: "",
};
