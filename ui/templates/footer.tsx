import { SocialMediaIcons } from "ui/templates";
import { Text } from "ui/atoms";
import { useMedia } from "react-use";
import Image from "next/image";

import soilImg from "public/images/soil-all-connected.png";

export function Footer({ className }: { className?: string }) {
  const isMobile = useMedia("(max-width: 639px)", false);
  return (
    <div className={className}>
      <footer className="h-full w-full flex items-center h-max-[612px] pb-10 sm:pb-0">
        <div className="relative flex flex-col items-center justify-between w-full lg:flex-row">
          <div className="relative">
            <Image
              src={soilImg}
              alt=""
              className="h-full ml-0 object-contain w-auto max-h-[200px] sm:max-h-[382px] lg:ml-20"
              placeholder="blur"
            />
          </div>
          <div className="w-full flex flex-col items-end lg:w-[731px]">
            <Text
              type="p"
              weight="bold"
              size="xs"
              color="white"
              className="px-1 py-2 mb-6 bg-pink-500 w-full"
            >
              stay connected.
            </Text>
            <div className="w-full first-letter:pr-4 sm:pr-8">
              <SocialMediaIcons className="flex justify-center gap-4 mb-6 sm:justify-start" />
              <div className="w-full">
                <Text
                  type="p"
                  weight="regular"
                  size="sm"
                  color="teal"
                  className="text-center lg:text-right"
                  style={{ lineHeight: isMobile ? undefined : "58px" }}
                >
                  soil life is a PhD project based out of UC Davis in
                  collaboration and with support from USDA-NRCS.
                </Text>
                <Text
                  type="p"
                  weight="bold"
                  size="sm"
                  color="teal"
                  className="text-center lg:text-right"
                  style={{ lineHeight: isMobile ? undefined : "58px" }}
                >
                  we are on a mission to change the way the world looks at soil.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.defaultProps = {
  className: "",
};
