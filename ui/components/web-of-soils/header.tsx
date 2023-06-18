import { useState, useEffect } from "react";
import { Icon } from "ui/atoms";
import Link from "next/link";
import Image from "next/image";
import { MobileNavMenu } from "ui/templates";
import { debounce } from "lodash";
import { useRouter } from "next/router";

const webOfSoilSubheadings = [
  {
    name: "food",
    slug: "food",
    asset: "/images/web-of-soil/food_white.svg",
  },
  {
    name: "fiber",
    slug: "fiber",
    asset: "/images/web-of-soil/fiber_white.svg",
  },
  {
    name: "filter",
    slug: "filter",
    asset: "/images/web-of-soil/filter_white.svg",
  },
  {
    name: "foundations",
    slug: "foundations",
    asset: "/images/web-of-soil/foundation_white.svg",
  },
  {
    name: "farmaceuticals",
    slug: "farmaceuticals",
    asset: "/images/web-of-soil/farmaceutical_white.svg",
  },
  {
    name: "fun",
    slug: "fun",
    asset: "/images/web-of-soil/fun_white.svg",
  },
] as const;

export function WebOfSoilsHeader({ className = "" }: { className: string }) {
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
        <ul
          className={`container flex justify-between items-center h-10 sm:h-16`}
        >
          <li>
            <Icon
              icon={isMenuOpen ? "x" : "menu"}
              size="20"
              className="text-white cursor-pointer h-8 w-8"
              onClick={toggleMenu}
            />
          </li>
          {webOfSoilSubheadings.map(({ name, asset, slug }) => (
            <li key={name} title={name} data-nav={name}>
              <Link href={`/web-of-soil/${slug}`}>
                <Image
                  src={asset}
                  className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
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
