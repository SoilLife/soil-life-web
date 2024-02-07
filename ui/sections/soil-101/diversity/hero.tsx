// components
import { Text } from "ui/atoms";
import Image from "next/image";

// assets
import DownArrow from "public/images/down_arrow_white.svg";

const imageUrls = [
  "/images/soil-101/diversity/Soil_Profile_1_H7yj6M4szGJ.jpeg",
  "/images/soil-101/diversity/Soil_Profile_12_4hnWVQBte7.jpeg",
  "/images/soil-101/diversity/Soil_Profile_3_Bjnn6JzY0.jpeg",
  "/images/soil-101/diversity/Soil_Profile_4_nwPY1ltoO3W.jpeg",
  "/images/soil-101/diversity/Soil_Profile_5_APOZdIgOH.jpeg",
  "/images/soil-101/diversity/Diversity_Last_Soil_Profile_2-nPmWgRG.png",
  "/images/soil-101/diversity/Soil_Profile_6_1F5dQkSdrP.jpeg",
  "/images/soil-101/diversity/Soil_Profile_10_KXOyznfWU4ad.jpeg",
  "/images/soil-101/diversity/Soil_Profile_7_1a-MPWo2Kh9W.jpeg",
  "/images/soil-101/diversity/Soil_Profile_8_WpiYBstRa.jpeg",
  "/images/soil-101/diversity/Soil_Profile_9_8sT5dxppd.jpeg",
  "/images/soil-101/diversity/Soil_Profile_11_UvZP_6LA0B.jpeg",
];

export function HeroSection({
  onDownArrowClick,
}: {
  onDownArrowClick: () => void;
}) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute pt-16 top-1/2 transform -translate-y-1/2 text-center text-white w-full z-10">
        <Text type="h1" weight="light" size="4xl">
          digging into the diversity:
        </Text>
        <Text type="h1" weight="bold" size="4xl">
          soil orders
        </Text>
      </div>
      <div className="max-h-screen min-h-screen grid grid-cols-2 sm:pt-20 sm:pb-4 sm:px-8 sm:grid-cols-6 sm:grid-rows-2 sm:gap-2">
        {imageUrls.map((imageUrl) => (
          <div
            key={imageUrl}
            className="overflow-hidden h-[calc(100vh/6)] sm:h-full"
          >
            <Image
              fill
              src={imageUrl}
              alt=""
              className="object-cover object-top sm:object-center"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hover:scale-105 active:scale-100"
        onClick={onDownArrowClick}
      >
        <DownArrow height={30} />
      </button>
    </div>
  );
}
