// components
import Image from "next/image";

// assets
import DownArrow from "public/images/down_arrow_white.svg";

export function HeroSection({
  onDownArrowClick,
}: {
  onDownArrowClick: () => void;
}) {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image
        fill
        src="/images/soil-101/nexus/nexus_header__2__841SmxC6D.png?updatedAt=1630389360286"
        alt=""
        className="min-h-screen object-cover"
      />
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hover:scale-105 active:scale-100"
        onClick={onDownArrowClick}
      >
        <DownArrow height={30} />
      </button>
    </div>
  );
}
