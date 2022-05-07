// components
import { Image, Text } from "design-system/atoms";
import Link from "next/link";

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
        url="Soil_101/Soil_Physics/Soil_Habitat_a4f2tAtMH.jpg?updatedAt=1630509120158"
        className="absolute object-cover"
      />
      <Link href="#texture">
        <a className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hover:scale-105 active:scale-100">
          <DownArrow height={30} />
        </a>
      </Link>
    </div>
  );
}
