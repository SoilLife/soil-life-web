// components
import { Text } from "ui/atoms";
import Link from "next/link";
import Image from "next/image";

// assets
import DownArrow from "public/images/down_arrow_white.svg";

export function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center text-white w-full z-10">
        <Text type="h1" weight="light" size="4xl">
          setting the stage:
        </Text>
        <Text type="h1" weight="bold" size="4xl">
          the soil environment
        </Text>
      </div>
      <Image
        fill
        src="/images/soil-101/physics/Soil_Habitat_a4f2tAtMH.jpg?updatedAt=1630509120158"
        alt=""
        className="absolute object-cover"
      />
      <Link
        href="#texture"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hover:scale-105 active:scale-100"
      >
        <DownArrow height={30} />
      </Link>
    </div>
  );
}
