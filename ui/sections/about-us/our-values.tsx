import React, { useState } from "react";

// helpers
import { useMedia } from "react-use";

// components
import { Text } from "ui/atoms";
import Image from "next/image";

import styles from "./our-values.module.css";

// data
const valueCards: {
  imageUrl: string;
  label: string;
  content: string;
}[] = [
  {
    imageUrl: "/images/about-us/our-values/Soilutions_values_k9HolOlaLaW.jpg",
    label: "soilutions",
    content:
      "we value positivity and optimism over fear and empowering people with solutions, rather than focusing on the problems. rather than fighting against broken systems, we strive to create new models that make old paradigms obsolete.",
  },
  {
    imageUrl: "/images/about-us/our-values/Leaves_Hands_4otrtMnq3.jpg",
    label: "the dirty truth",
    content:
      "with fake news and misinformation on the rise, we value accuracy, scientific rigor, and integrity in everything we do. truth is power.",
  },
  {
    imageUrl: "/images/about-us/our-values/CommonGround_values_LUl2VhAGle4.jpg",
    label: "common ground",
    content:
      "in an increasingly black and white world, we value the spectrum of gray that lies in the middle, as well as the ability to nd alignment amongst disparate groups. far more unites us than divides us.",
  },
  {
    imageUrl:
      "/images/about-us/our-values/Plants_Leaves_Green_2x_X1E_kzkTZ.png",
    label: "aggregation",
    content:
      "we value the interconnectedness of all things. just as fungal threads and plant roots bring soil particles together to form aggregates, we believe in bringing together consumers, farmers, and businesses with shared values. strength in numbers.",
  },
  {
    imageUrl:
      "/images/about-us/our-values/jacob-stone-rUO43lCcVMg-unsplash_Fr-T6A0J6.jpg",
    label: "groundedness",
    content:
      "in a cloud-driven world, we strive to bring people back down-to-earth. we value balance in our agricultural systems, businesses, and individual lives, as well as holistic, place based thinking.",
  },
  {
    imageUrl:
      "/images/about-us/our-values/Soil_Trees_Forest_Green_2x_XNilD-tPkN6.png",
    label: "deep roots",
    content:
      "while we all need wings to fly, we value investing in deep roots. now, more than ever, we must build stable, resilient, relocalized agriculture and food systems. cultivate you inner and outer garden.",
  },
  {
    imageUrl:
      "/images/about-us/our-values/kyle-johnson-387021-unsplash_2x_9jrssPs7F.png",
    label: "explore new depths",
    content:
      "space may be the final frontier, but some argue we know less about the soil underfoot then the celestial bodies overhead. we value exploration and inquiry to discover what lies beneath!",
  },
  {
    imageUrl: "/images/about-us/our-values/Grit_6ctWj_YuvhLE.jpg",
    label: "grit",
    content:
      "we value the courage and resolve to stand up to naysayers and fight for what's right; the strength of character to never give up on what we believe in; and the tenacity to pursue our vision relentlessly.",
  },
  {
    imageUrl: "/images/about-us/our-values/Organic_growth_values_4SJcoYuvI.jpg",
    label: "organic growth",
    content:
      "we value the courage and resolve to stand up to naysayers and fight for what's right; the strength of character to never give up on what we believe in; and the tenacity to pursue our vision relentlessly.",
  },
];

function ValueText(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h2
      className={`text-white font-acre-medium leading-[25px] lg:leading-[35px] lg:text-[36px] ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </h2>
  );
}

function ValueDetailsText(
  props: React.PropsWithChildren<{ className?: string }>
) {
  return (
    <p
      className={`text-white font-acre-light leading-[21px] lg:text-[15px] ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </p>
  );
}

export function OurValuesSection() {
  const isMobile = useMedia("(max-width: 639px)", false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleMouseEnter(index: number) {
    return (_e: React.MouseEvent<HTMLDivElement>) => {
      setActiveIndex(index);
    };
  }
  function handleMouseLeave() {
    setActiveIndex(null);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center snap-start overflow-hidden">
      <div>
        <Text
          type="h1"
          weight="regular"
          size="3xl"
          color="yellow"
          className="mb-4"
        >
          our values
        </Text>
        {
          <div className={`${styles["grid-container"]}`}>
            {valueCards.map(({ content, imageUrl, label }, index) => {
              const isActive = activeIndex === index;
              if (isMobile && isActive) {
                return (
                  <div className="relative col-span-2 h-40 order-last">
                    <Image
                      fill
                      src={imageUrl}
                      alt=""
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-br from-teal-600 to-transparent`}
                    >
                      <div className="flex space-x-2 mb-1">
                        <ValueText>{index + 1}</ValueText>
                        <ValueText>{label}</ValueText>
                      </div>
                      <ValueDetailsText>{content}</ValueDetailsText>
                    </div>
                  </div>
                );
              }
              const isOneActive = valueCards.some(
                (_, index) => index === activeIndex
              );
              return (
                <div
                  key={index}
                  className={`relative ${styles["grid-item"]} ${
                    !isOneActive && isMobile && label === "organic growth"
                      ? "transform translate-x-1/2"
                      : ""
                  }`}
                  onMouseEnter={handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image fill src={imageUrl} alt="" className="object-cover" />
                  <div
                    className={`absolute inset-0 w-full h-full flex text-center items-center justify-center p-1 xl:p-8 ${
                      isActive
                        ? "bg-gradient-to-br from-teal-600 to-transparent"
                        : ""
                    }`}
                  >
                    {isActive ? (
                      <ValueDetailsText>{content}</ValueDetailsText>
                    ) : (
                      <div>
                        <ValueText>{index + 1}</ValueText>
                        <ValueText>{label}</ValueText>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
}
