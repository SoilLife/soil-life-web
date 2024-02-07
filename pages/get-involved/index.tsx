// components
import Link from "next/link";
import { Text } from "ui/atoms";
import Image from "next/image";
import { DefaultLayout } from "layouts";

// data
import { getInvolvedPageData } from "data/page-get-involved";

// assets
import BackArrowSvg from "public/images/back_arrow.svg";
import styles from "./get-involved.module.css";

const getInvolvedHeadings = [
  {
    name: "at home",
    slug: "at-home",
    asset: "/images/get-involved/home_white.svg",
    iconWithText: "/images/get-involved/at_home_text.svg",
  },
  {
    name: "in your community",
    slug: "community",
    asset: "/images/get-involved/community_white.svg",
    iconWithText: "/images/get-involved/community_text.svg",
  },
  {
    name: "on social media",
    slug: "social-media",
    asset: "/images/get-involved/social_media_white.svg",
    iconWithText: "/images/get-involved/social_media_text.svg",
  },
  {
    name: "with your legislation",
    slug: "legislation",
    asset: "/images/get-involved/legislation_white.svg",
    iconWithText: "/images/get-involved/legislation_text.svg",
  },
  {
    name: "for your education",
    slug: "education",
    asset: "/images/get-involved/education_white.svg",
    iconWithText: "/images/get-involved/education_text.svg",
  },
  {
    name: "through donations",
    slug: "donations",
    asset: "/images/get-involved/donations_white.svg",
    iconWithText: "/images/get-involved/donations_text.svg",
  },
].map((heading, index) => ({
  ...heading,
  ...getInvolvedPageData.mainImages[index],
}));

export default function GetInvolvedPage() {
  return (
    <DefaultLayout title="Get Involved">
      <Link href="/" className="absolute top-4 left-4 z-20">
        <BackArrowSvg className="h-12 w-12 sm:h-20 sm:w-20 xl:h-24 w:h-24" />
      </Link>
      <div
        className={`${styles["cta-message"]} fixed bg-white bg-opacity-80 px-28 py-6 z-20 whitespace-nowrap border border-solid border-gray-500 sm:block`}
      >
        <Text type="h1" weight="thin" size="4xl">
          how do you like to get involved?
        </Text>
      </div>
      <div className="min-h-screen grid grid-cols-2 sm:grid-cols-3 auto-rows-fr">
        {getInvolvedHeadings.map(
          ({ name, slug, iconWithText, imageUrl = "" }) => {
            return (
              <div className="relative w-full h-full" key={name}>
                <Image fill src={imageUrl} alt="" className="object-cover" />
                <div
                  className={`absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2`}
                >
                  <Link href={`/get-involved/${slug}`}>
                    <div className="relative h-32 w-32 lg:h-60 lg:w-60">
                      <Image fill src={iconWithText} alt="" />
                    </div>
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </div>
    </DefaultLayout>
  );
}
