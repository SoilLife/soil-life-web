import { useState, useEffect } from "react";
import { Icon } from "ui/atoms";
import Link from "next/link";
import Image from "next/image";
import { MobileNavMenu } from "ui/templates";
import { debounce } from "lodash";
import { useRouter } from "next/router";

export const soil101Subheadings = [
  {
    name: "soil nexus",
    slug: "soil-nexus",
    asset: "/images/soil-101/genesis_white.svg",
  },
  {
    name: "soil physics",
    slug: "soil-physics",
    asset: "/images/soil-101/habitat_white.svg",
  },
  {
    name: "soil biology",
    slug: "soil-biology",
    asset: "/images/soil-101/biology_white.svg",
  },
  {
    name: "soil chemistry",
    slug: "soil-chemistry",
    asset: "/images/soil-101/chemistry_white.svg",
  },
  {
    name: "soil diversity",
    slug: "soil-diversity",
    asset: "/images/soil-101/nutrition_white.svg",
  },
  {
    name: "soil health",
    slug: "soil-health",
    asset: "/images/soil-101/health_white.svg",
  },
] as const;

export function Soil101Header({ className = "" }: { className: string }) {
  const { pathname } = useRouter();
  const [hideHeader, setHideHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    function handleScrollEvent(event: Event) {
      const target = event.target as Document;
      const scrollTop = target.scrollingElement?.scrollTop ?? 0;
      setHideHeader(scrollTop > lastScroll);
      lastScroll = scrollTop;
    }
    const debouncedScrollEvent = debounce(handleScrollEvent, 100);
    window.addEventListener("scroll", debouncedScrollEvent);

    return () => {
      window.removeEventListener("scroll", debouncedScrollEvent);
    };
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header
        className={`fixed z-20 w-full transition-all ease-in-out duration-200 ${
          !hideHeader ? "top-0" : "-top-24"
        } ${className}`}
      >
        <ul className="container flex justify-between items-center h-10 sm:h-16">
          <li>
            <Icon
              icon={isMenuOpen ? "x" : "menu"}
              size="20"
              className="text-white cursor-pointer h-8 w-8"
              onClick={toggleMenu}
            />
          </li>
          {soil101Subheadings.map(({ name, asset, slug }) => (
            <li key={name} title={name} data-nav={name}>
              <Link href={`/soil-101/${slug}`}>
                <Image
                  src={asset}
                  className={`sm:h-[50px] sm:w-[50px] ${
                    pathname.includes(slug)
                      ? "rounded-full bg-gray-500 ring-2 ring-white"
                      : "cursor-pointer"
                  }`}
                  alt=""
                  width={64}
                  height={64}
                />
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <MobileNavMenu isMenuOpen={isMenuOpen} />
    </>
  );
}
