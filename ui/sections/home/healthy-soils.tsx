import { useRef } from "react";
import Link from "next/link";

// components
import Image from "next/image";
import { Button, Text } from "ui/atoms";

// assets
import healthySoilWheel from "public/images/home/healthy-soils/healthy-soil-wheel.png";
import SoilArrow from "/public/images/home/healthy-soils/healthy_soils_arrows.svg";
import PlantArrow from "/public/images/home/healthy-soils/healthy_plants_arrows.svg";
import PeopleArrow from "/public/images/home/healthy-soils/healthy_people_arrows.svg";
import CommunitiesArrow from "/public/images/home/healthy-soils/healthy_communities_arrows.svg";
import EconomiesArrow from "/public/images/home/healthy-soils/healthy_economies_arrows.svg";
import PlanetArrow from "/public/images/home/healthy-soils/healthy_planet_arrows.svg";
import soilBg from "/public/images/home/healthy-soils/healthy_soil_EDjnsYWrb.jpg";
import plantBg from "/public/images/home/healthy-soils/Healthy_Plants_Slide_4_cKAklPcPW.jpg";
import peopleBg from "/public/images/home/healthy-soils/celeste-horrocks-nattvZsRmkM-unsplash_B6aDkSYSqd1.jpg";
import communitiesBg from "/public/images/home/healthy-soils/healthy_communities_tGodL-sf1.jpg";
import economiesBg from "/public/images/home/healthy-soils/Healthy_Economies_Slide_GM6V39-DT.jpeg";
import planetBg from "/public/images/home/healthy-soils/Healthy_Planet_Slide_sCpQXXtZRtT.jpg";
import CarouselLeftArrow from "public/images/left_arrow_pink_thick.svg";
import CarouselRightArrow from "public/images/right_arrow_pink_thick.svg";

export function HealthySoilsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  function handleCarouselClick(dir: "prev" | "next") {
    return () => {
      const container = containerRef.current!;
      const index = Math.round(container.scrollLeft / window.innerWidth);
      container.scrollTo({
        left:
          dir === "next"
            ? index === 6
              ? 0
              : container.scrollLeft + window.innerWidth
            : index === 0
            ? container.scrollWidth
            : container.scrollLeft - window.innerWidth,
        behavior: "smooth",
      });
    };
  }

  return (
    <div
      id="healthy-soil"
      className="relative h-screen snap-start overflow-hidden"
    >
      <div className="absolute top-1/2 -translate-y-1/2 z-10 w-full flex justify-between pl-2 pr-4 max-w-[100vw]">
        <button
          className="transition-transform ease-out duration-300 transform cursor-pointer hover:scale-105"
          onClick={handleCarouselClick("prev")}
        >
          <CarouselLeftArrow width={16} height={64} />
        </button>
        <button
          className="transition-transform ease-out duration-300 transform cursor-pointer hover:scale-105"
          onClick={handleCarouselClick("next")}
        >
          <CarouselRightArrow width={16} height={64} />
        </button>
      </div>
      <div
        ref={containerRef}
        className="h-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div className="relative w-full flex-shrink-0 snap-start">
          <div className="h-full flex items-center justify-center">
            <Image
              src={healthySoilWheel}
              alt=""
              placeholder="blur"
              className="mx-auto object-contain max-h-screen h-[80%]"
              loading="lazy"
            />
          </div>
          <div className="hidden absolute top-[62%] left-1/2 -translate-x-1/2 text-center sm:block">
            <Link href="/soil-101/soil-nexus">
              <Button label="find out how" type="neutral" size="md" />
            </Link>
          </div>
        </div>
        <div className="relative w-full flex-shrink-0 flex flex-col sm:grid sm:grid-cols-3 snap-start overflow-hidden">
          <div className="col-span-1 py-10 sm:px-8">
            <SoilArrow className="max-w-full h-28 mx-auto sm:h-auto" />
            <Text
              type="h1"
              weight="medium"
              size="2xl"
              color="pink"
              className="text-center mb-4 sm:mb-10 sm:text-left"
            >
              healthy soil
            </Text>
            <div className="relative h-[300px] sm:hidden">
              <Image
                fill
                src={soilBg}
                alt="a man holding a flashlight looking at a large wall of soil"
                loading="lazy"
                className="object-cover object-right"
                placeholder="blur"
              />
            </div>
            <Text
              type="p"
              weight="light"
              size="md"
              className="leading-normal sm:leading-relaxed px-4 pt-4 sm:p-0"
            >
              as gravity, wind, and water weathered rocks into smaller and
              smaller pieces, soils began to form on Earth, supporting greater
              and greater complexity and diversity of life!
            </Text>
          </div>
          <div className="hidden relative col-span-2 sm:block">
            <Image
              fill
              src={soilBg}
              alt="a man holding a flashlight looking at a large wall of soil"
              loading="lazy"
              className="object-cover object-right"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative w-full flex-shrink-0 flex flex-col sm:grid sm:grid-cols-3 snap-start overflow-hidden">
          <div className="col-span-1 py-10 sm:px-8">
            <PlantArrow className="max-w-full h-28 mx-auto sm:h-auto" />
            <Text
              type="h1"
              weight="medium"
              size="2xl"
              color="teal"
              className="text-center mb-4 sm:mb-10 sm:text-left"
            >
              healthy plants
            </Text>
            <div className="relative h-[300px] sm:hidden">
              <Image
                fill
                src={plantBg}
                alt="a close up picture of an avocado hanging from a tree"
                loading="lazy"
                className="object-cover object-left"
                placeholder="blur"
              />
            </div>
            <Text
              type="p"
              weight="light"
              size="md"
              className="leading-normal sm:leading-relaxed px-4 pt-4 sm:p-0"
            >
              healthy soils are teeming with microbes, hard at work, making
              nutrients available to plants. water and air flows through them
              easily and they tend to be resilient in the face of disease and
              drought.
            </Text>
          </div>
          <div className="hidden relative col-span-2 sm:block">
            <Image
              fill
              src={plantBg}
              alt="a close up picture of an avocado hanging from a tree"
              loading="lazy"
              className="object-cover object-left"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative w-full flex-shrink-0 flex flex-col sm:grid sm:grid-cols-3 snap-start overflow-hidden">
          <div className="col-span-1 py-10 sm:px-8">
            <PeopleArrow className="max-w-full h-28 mx-auto sm:h-auto" />
            <Text
              type="h1"
              weight="medium"
              size="2xl"
              color="yellow"
              className="text-center mb-4 sm:mb-10 sm:text-left"
            >
              healthy people
            </Text>
            <div className="relative h-[300px] sm:hidden">
              <Image
                fill
                src={peopleBg}
                alt="a woman in front of plants playing in a water spraying in the air"
                loading="lazy"
                className="object-cover object-right"
                placeholder="blur"
              />
            </div>
            <Text
              type="p"
              weight="light"
              size="md"
              className="leading-normal sm:leading-relaxed px-4 pt-4 sm:p-0"
            >
              healthy plants and animals provide the base for a healthy human
              diet. the food we eat provides the building blocks that make up
              every cell of our bodies. you, literally, are what you eat!
            </Text>
          </div>
          <div className="hidden relative col-span-2 sm:block">
            <Image
              fill
              src={peopleBg}
              alt="a woman in front of plants playing in a water spraying in the air"
              loading="lazy"
              className="object-cover object-right"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative w-full flex-shrink-0 flex flex-col sm:grid sm:grid-cols-3 snap-start overflow-hidden">
          <div className="col-span-1 py-10 sm:px-8">
            <CommunitiesArrow className="max-w-full h-28 mx-auto sm:h-auto" />
            <Text
              type="h1"
              weight="medium"
              size="2xl"
              color="pink"
              className="text-center mb-4 sm:mb-10 sm:text-left"
            >
              healthy communities
            </Text>
            <div className="relative h-[300px] sm:hidden">
              <Image
                fill
                src={communitiesBg}
                alt="two kids smiling while they wash their hands"
                loading="lazy"
                className="object-cover object-right"
                placeholder="blur"
              />
            </div>
            <Text
              type="p"
              weight="light"
              size="md"
              className="leading-normal sm:leading-relaxed px-4 pt-4 sm:p-0"
            >
              sustainable farming can revitalize whole communities, providing
              jobs and secure access to food. gardens also bring communities
              together, empowering people with tools of self-sufficiency and
              uniting us on common ground.
            </Text>
          </div>
          <div className="hidden relative col-span-2 sm:block">
            <Image
              fill
              src={communitiesBg}
              alt="two kids smiling while they wash their hands"
              loading="lazy"
              className="object-cover object-right"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative w-full flex-shrink-0 flex flex-col sm:grid sm:grid-cols-3 snap-start overflow-hidden">
          <div className="col-span-1 py-10 sm:px-8">
            <EconomiesArrow className="max-w-full h-28 mx-auto sm:h-auto" />
            <Text
              type="h1"
              weight="medium"
              size="2xl"
              color="teal"
              className="text-center mb-4 sm:mb-10 sm:text-left"
            >
              healthy economies
            </Text>
            <div className="relative h-[300px] sm:hidden">
              <Image
                fill
                src={economiesBg}
                alt="a jar of coins with a sprout growing from it"
                loading="lazy"
                className="object-cover object-left"
                placeholder="blur"
              />
            </div>
            <Text
              type="p"
              weight="light"
              size="md"
              className="leading-normal sm:leading-relaxed px-4 pt-4 sm:p-0"
            >
              soils produce the raw materials that form the base of our global
              economy. improving soil health can reduce input costs and increase
              yields, which means more stable food prices, and more profit in
              the grower's pocket!
            </Text>
          </div>
          <div className="hidden relative col-span-2 sm:block">
            <Image
              fill
              src={economiesBg}
              alt="a jar of coins with a sprout growing from it"
              loading="lazy"
              className="object-cover object-left"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative w-full flex-shrink-0 flex flex-col sm:grid sm:grid-cols-3 snap-start overflow-hidden">
          <div className="col-span-1 py-10 sm:px-8">
            <PlanetArrow className="max-w-full h-28 mx-auto sm:h-auto" />
            <Text
              type="h1"
              weight="medium"
              size="2xl"
              color="yellow"
              className="text-center mb-4 sm:mb-10 sm:text-left"
            >
              healthy planet
            </Text>
            <div className="relative h-[300px] sm:hidden">
              <Image
                fill
                src={planetBg}
                alt="a view of the Milk Way with silhouettes of trees in the foreground"
                loading="lazy"
                className="object-cover scale-105 object-bottom"
                placeholder="blur"
              />
            </div>
            <Text
              type="p"
              weight="light"
              size="md"
              className="leading-normal sm:leading-relaxed px-4 pt-4 sm:p-0"
            >
              healthy soils silently deliver ecosystem services that support
              life as we know it. healthy soils filter our air and water;
              protect against floods, sequester carbon; reduce pest and disease
              pressure; and encourage biodiversity.
            </Text>
          </div>
          <div className="hidden relative col-span-2 sm:block">
            <Image
              fill
              src={planetBg}
              alt="a view of the Milk Way with silhouettes of trees in the foreground"
              loading="lazy"
              className="object-cover scale-105 object-bottom"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
