import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button } from "ui/atoms";

// assets
import foodBg from "public/images/home/6fs/brooke-lark-08bOYnH_r_E-unsplash_Nsw5XgGxU.jpg";
import fiberBg from "public/images/home/6fs/Fiber-2-Intro_xAvzmC6CB.jpg";
import filterBg from "public/images/home/6fs/Filter-3_YElVtnQWZ.jpg";
import filterBg2 from "public/images/home/6fs/Filter-2_qJOgH5RmKJ9.jpg";
import foundationBg from "public/images/home/6fs/Foundations-3_kT7-NUBCw.jpg";
import farmeceuticalBg from "public/images/home/6fs/cup_of_pills_ioFvZZ0lo.png";
import funBg from "public/images/home/6fs/Fun-2_NepidzuqS.jpg";
import FoodIcon from "public/images/web-of-soil/food_white.svg";
import FiberIcon from "public/images/web-of-soil/fiber_white.svg";
import FilterIcon from "public/images/web-of-soil/filter_white.svg";
import FoundationIcon from "public/images/web-of-soil/foundation_white.svg";
import FarmeceuticalIcon from "public/images/web-of-soil/farmaceutical_white.svg";
import FunIcon from "public/images/web-of-soil/fun_white.svg";
import CarouselLeftArrow from "public/images/left_arrow_pink_thick.svg";
import CarouselRightArrow from "public/images/right_arrow_pink_thick.svg";

export function SixFSection() {
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
    <div className="relative h-screen snap-start overflow-hidden">
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
        className="h-full overflow-x-auto snap-x snap-mandatory flex"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div className="relative h-full w-full flex-shrink-0 snap-start overflow-hidden">
          <div
            className={`relative top-1/2 -translate-y-1/2 mx-8 rounded-2xl px-6 pb-6 sm:top-1/4 bg-white w-fit sm:mx-auto sm:rounded-none sm:px-20 shadow-lg sm:translate-y-0`}
          >
            <div
              className={`absolute -top-16 sm:-top-36 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bg-pink-500 bottom-[90%] sm:bottom-[80%] sm:h-[160px] sm:w-[160px]`}
            >
              <FoodIcon />
            </div>
            <div className="flex flex-col items-center justify-end pt-8 text-center">
              <Text type="p" weight="medium" size="md" className="mb-4">
                soils are fundamental to life on earth.
              </Text>
              <Text type="p" weight="light" size="lg" className="mb-4 sm:mb-10">
                if you{" "}
                <Text type="span" weight="light" size="lg" color="pink">
                  eat food
                </Text>{" "}
                you depend on soil
              </Text>
              <Link href="/web-of-soil/food">
                <Button size="md" type="danger" label="find out how" />
              </Link>
            </div>
          </div>
          <div className="absolute h-full w-full top-1/2 sm:top-1/3 -z-10">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                fill
                src={foodBg}
                alt="an aesthetic arrangement of red fruits and flowers"
                className="object-cover object-left sm:scale-[2] sm:object-[300px,40%]"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full flex-shrink-0 snap-start overflow-hidden">
          <div className="relative top-1/2 -translate-y-1/2 mx-8 rounded-2xl px-6 pb-6 sm:top-1/4 bg-white w-fit sm:mx-auto sm:rounded-none sm:px-20 shadow-lg sm:translate-y-0">
            <div
              className={`absolute -top-16 sm:-top-36 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bg-yellow-500 bottom-[90%] sm:bottom-[80%] sm:h-[160px] sm:w-[160px]`}
            >
              <FiberIcon />
            </div>
            <div className="flex flex-col items-center justify-end pt-8 text-center">
              <Text type="p" weight="medium" size="md" className="mb-4">
                soils are fundamental to life on earth.
              </Text>
              <Text type="p" weight="light" size="lg" className="mb-4 sm:mb-10">
                if you{" "}
                <Text type="span" weight="light" size="lg" color="yellow">
                  wear clothes
                </Text>{" "}
                you depend on soil
              </Text>
              <Link href="/web-of-soil/fiber">
                <Button size="md" type="warning" label="find out how" />
              </Link>
            </div>
          </div>
          <div className="absolute h-full w-full top-1/2 sm:top-1/3 -z-10">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                fill
                src={fiberBg}
                alt="a plant laid on a gray fabric"
                className="object-cover object-[17%] sm:object-[300px] sm:scale-[1.75]"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full flex-shrink-0 snap-start overflow-hidden">
          <div className="relative top-1/2 -translate-y-1/2 mx-8 rounded-2xl px-6 pb-6 sm:top-1/4 bg-white w-fit sm:mx-auto sm:rounded-none sm:px-20 shadow-lg sm:translate-y-0">
            <div
              className={`absolute -top-16 sm:-top-36 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bg-blue-500 bottom-[90%] sm:bottom-[80%] sm:h-[160px] sm:w-[160px]`}
            >
              <FilterIcon />
            </div>
            <div className="flex flex-col items-center justify-end pt-8 text-center">
              <Text type="p" weight="medium" size="md" className="mb-4">
                soils are fundamental to life on earth.
              </Text>
              <Text type="p" weight="light" size="lg" className="mb-4 sm:mb-10">
                if you{" "}
                <Text type="span" weight="light" size="lg" color="blue">
                  drink water
                </Text>{" "}
                you depend on soil
              </Text>
              <Link href="/web-of-soil/filter">
                <Button size="md" type="primary" label="find out how" />
              </Link>
            </div>
          </div>
          <div className="absolute h-full w-full top-1/2 sm:top-1/3 -z-10">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                fill
                src={filterBg}
                alt="a clear view underwater of the ocean floor"
                className="object-bottom object-cover"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full flex-shrink-0 snap-start overflow-hidden">
          <div className="relative top-1/2 -translate-y-1/2 mx-8 rounded-2xl px-6 pb-6 sm:top-1/4 bg-white w-fit sm:mx-auto sm:rounded-none sm:px-20 shadow-lg sm:translate-y-0">
            <div
              className={`absolute -top-16 sm:-top-36 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bg-blue-500 bottom-[90%] sm:bottom-[80%] sm:h-[160px] sm:w-[160px]`}
            >
              <FilterIcon />
            </div>
            <div className="flex flex-col items-center justify-end pt-8 text-center">
              <Text type="p" weight="medium" size="md" className="mb-4">
                soils are fundamental to life on earth.
              </Text>
              <Text type="p" weight="light" size="lg" className="mb-4 sm:mb-10">
                if you{" "}
                <Text type="span" weight="light" size="lg" color="blue">
                  breathe air
                </Text>{" "}
                you depend on soil
              </Text>
              <Link href="/web-of-soil/filter">
                <Button size="md" type="primary" label="find out how" />
              </Link>
            </div>
          </div>
          <div className="absolute h-full w-full top-1/2 sm:top-1/3 -z-10">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                fill
                src={filterBg2}
                alt="a glass building sitting alone in a backdrop of clouds"
                className="object-cover object-[-300px,-400px] sm:object-[0,-300px]"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full flex-shrink-0 snap-start overflow-hidden">
          <div className="relative top-1/2 -translate-y-1/2 mx-8 rounded-2xl px-6 pb-6 sm:top-1/4 bg-white w-fit sm:mx-auto sm:rounded-none sm:px-20 shadow-lg sm:translate-y-0">
            <div
              className={`absolute -top-16 sm:-top-36 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bg-gray-500 bottom-[90%] sm:bottom-[80%] sm:h-[160px] sm:w-[160px]`}
            >
              <FoundationIcon />
            </div>
            <div className="flex flex-col items-center justify-end pt-8 text-center">
              <Text type="p" weight="medium" size="md" className="mb-4">
                soils are fundamental to life on earth.
              </Text>
              <Text type="p" weight="light" size="lg" className="mb-4 sm:mb-10">
                if you{" "}
                <Text type="span" weight="light" size="lg" color="gray">
                  live in a shelter
                </Text>{" "}
                you depend on soil
              </Text>
              <Link href="/web-of-soil/foundation">
                <Button size="md" type="neutral" label="find out how" />
              </Link>
            </div>
          </div>
          <div className="absolute h-full w-full top-1/2 sm:top-1/3 -z-10">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                fill
                src={foundationBg}
                alt="a building with plants and trees on every level"
                className="object-cover"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full flex-shrink-0 snap-start overflow-hidden">
          <div className="relative top-1/2 -translate-y-1/2 mx-8 rounded-2xl px-6 pb-6 sm:top-1/4 bg-white w-fit sm:mx-auto sm:rounded-none sm:px-20 shadow-lg sm:translate-y-0">
            <div
              className={`absolute -top-16 sm:-top-36 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bg-orange-500 bottom-[90%] sm:bottom-[80%] sm:h-[160px] sm:w-[160px]`}
            >
              <FarmeceuticalIcon />
            </div>
            <div className="flex flex-col items-center justify-end pt-8 text-center">
              <Text type="p" weight="medium" size="md" className="mb-4">
                soils are fundamental to life on earth.
              </Text>
              <Text type="p" weight="light" size="lg" className="mb-4 sm:mb-10">
                if you{" "}
                <Text type="span" weight="light" size="lg" color="orange">
                  use medicine
                </Text>{" "}
                you depend on soil
              </Text>
              <Link href="/web-of-soil/farmaceutical">
                <Button size="md" type="alert" label="find out how" />
              </Link>
            </div>
          </div>
          <div className="absolute h-full w-full top-1/2 sm:top-1/3 -z-10">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                fill
                src={farmeceuticalBg}
                alt="a cup of medical pills"
                className="object-cover object-[-200px,-300px] sm:object-[-100px,-300px]"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full flex-shrink-0 snap-start overflow-hidden">
          <div className="relative top-1/2 -translate-y-1/2 mx-8 rounded-2xl px-6 pb-6 sm:top-1/4 bg-white w-fit sm:mx-auto sm:rounded-none sm:px-20 shadow-lg sm:translate-y-0">
            <div
              className={`absolute -top-16 sm:-top-36 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bg-teal-500 bottom-[90%] sm:bottom-[80%] sm:h-[160px] sm:w-[160px]`}
            >
              <FunIcon />
            </div>
            <div className="flex flex-col items-center justify-end pt-8 text-center">
              <Text type="p" weight="medium" size="md" className="mb-4">
                soils are fundamental to life on earth.
              </Text>
              <Text type="p" weight="light" size="lg" className="mb-4 sm:mb-10">
                if you{" "}
                <Text type="span" weight="light" size="lg" color="teal">
                  enjoy the outdoors
                </Text>{" "}
                you depend on soil
              </Text>
              <Link href="/web-of-soil/fun">
                <Button size="md" type="success" label="find out how" />
              </Link>
            </div>
          </div>
          <div className="absolute h-full w-full top-1/2 sm:top-1/3 -z-10">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                fill
                src={funBg}
                alt="a man running in a dry hillside"
                className="object-cover object-[-200px,-200px] sm:object-center"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
