// components
import Link from "next/link";
import { FullPage } from "design-system/components/fullpage";
import { Section, Image, Text } from "design-system/atoms";

// data
import { getInvolvedHeadings } from "data/main-headings";
import { getInvolvedPageData } from "data/page-get-involved";

// assets
import BackArrowSvg from "public/images/back_arrow.svg";
import styles from "./get-involved.module.css";

const mergedData = getInvolvedHeadings.map((heading, index) => ({
  ...heading,
  ...getInvolvedPageData.mainImages[index],
}));

export default function GetInvolvedPage() {
  return (
    <FullPage
      title="Get Involved"
      type="main"
      subHeaderProps={{
        headings: getInvolvedHeadings,
        pathName: "get-involved",
        className: "hidden",
      }}
    >
      <Section className="overflow-hidden">
        <Link href="/">
          <a className="absolute top-4 left-4 z-20">
            <BackArrowSvg className="h-12 w-12 sm:h-20 sm:w-20 xl:h-24 w:h-24" />
          </a>
        </Link>
        <div
          className={`${styles["cta-message"]} hidden absolute top-1/2 left-1/2 bg-white bg-opacity-80 px-28 py-6 z-20 whitespace-nowrap border border-solid border-gray-500 sm:block`}
        >
          <Text type="h1" weight="thin" size="4xl">
            how do you like to get involved?
          </Text>
        </div>
        <div className="grid h-full grid-cols-2 sm:grid-cols-3 auto-rows-fr">
          {mergedData.map(({ name, slug, iconWithText, imageUrl = "" }) => {
            return (
              <div className="relative w-full h-full" key={name}>
                <Image url={imageUrl} className={`object-cover`} />
                <div
                  className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 cursor-pointer`}
                >
                  <div className="relative w-full h-full">
                    <Link href={`/get-involved/${slug}`}>
                      <a>
                        <img src={iconWithText} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </FullPage>
  );
}
