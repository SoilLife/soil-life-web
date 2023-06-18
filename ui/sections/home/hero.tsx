import Image from "next/image";
import { Text } from "ui/atoms";

// assets
import DownArrow from "public/images/down_arrow_white.svg";
import bgImg from "public/images/home/natgeo5b_H4vFWWpPA.jpg";

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden snap-start">
      <Image
        fill
        src={bgImg}
        alt=""
        className="mt-10 object-cover object-top h-full w-full"
        placeholder="blur"
      />
      <div className="absolute w-3/4 transform translate-x-1/2 bottom-[15%] right-1/2 sm:w-1/2">
        <Text
          type="h1"
          weight="medium"
          size="5xl"
          color="white"
          style={{ lineHeight: 1 }}
        >
          we all share
        </Text>
        <Text
          type="h1"
          weight="medium"
          size="5xl"
          color="white"
          style={{ lineHeight: 1 }}
        >
          common ground.
        </Text>
        <div className="mt-4 h-5 xl:h-6 2xl:h-10 w-full bg-pink-500"></div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <Text type="p" weight="light" color="white" size="sm">
          get
        </Text>
        <Text type="p" weight="light" color="white" size="sm" className="mb-1">
          connected
        </Text>
        <div className="flex justify-center">
          <DownArrow
            className="h-5 cursor-pointer hover:scale-105"
            // onClick={handleDownArrowClick}
          />
        </div>
      </div>
    </div>
  );
}
