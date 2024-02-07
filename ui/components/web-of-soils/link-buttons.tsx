import Image from "next/image";
import Link from "next/link";

import foodArrowLeft from "public/images/web-of-soil/food-arrow-left.png";
import foodArrowRight from "public/images/web-of-soil/food-arrow-right.png";
import fiberArrowLeft from "public/images/web-of-soil/fiber-arrow-left.png";
import fiberArrowRight from "public/images/web-of-soil/fiber-arrow-right.png";
import filterArrowLeft from "public/images/web-of-soil/filter-arrow-left.png";
import filterArrowRight from "public/images/web-of-soil/filter-arrow-right.png";
import foundationsArrowLeft from "public/images/web-of-soil/foundations-arrow-left.png";
import foundationsArrowRight from "public/images/web-of-soil/foundations-arrow-right.png";
import farmaceuticalsArrowLeft from "public/images/web-of-soil/farmaceuticals-arrow-left.png";
import farmaceuticalsArrowRight from "public/images/web-of-soil/farmaceuticals-arrow-right.png";
import funArrowLeft from "public/images/web-of-soil/fun-arrow-left.png";
import funArrowRight from "public/images/web-of-soil/fun-arrow-right.png";

const links = {
  food: {
    prevImage: funArrowLeft,
    prevLink: "fun",
    nextImage: fiberArrowRight,
    nextLink: "fiber",
  },
  fiber: {
    prevImage: foodArrowLeft,
    prevLink: "food",
    nextImage: filterArrowRight,
    nextLink: "filter",
  },
  filter: {
    prevImage: fiberArrowLeft,
    prevLink: "fiber",
    nextImage: foundationsArrowRight,
    nextLink: "foundations",
  },
  foundations: {
    prevImage: filterArrowLeft,
    prevLink: "filter",
    nextImage: farmaceuticalsArrowRight,
    nextLink: "farmaceuticals",
  },
  farmaceuticals: {
    prevImage: foundationsArrowLeft,
    prevLink: "foundations",
    nextImage: funArrowRight,
    nextLink: "fun",
  },
  fun: {
    prevImage: farmaceuticalsArrowLeft,
    prevLink: "farmaceutical",
    nextImage: foodArrowRight,
    nextLink: "food",
  },
} as const;

export function WebOfSoilsLinkButtons({ page }: { page: keyof typeof links }) {
  const link = links[page];
  return (
    <div className="isolate hidden absolute top-1/2 -translate-y-1/2 z-[1] w-full lg:flex lg:justify-between">
      <Link href={`/web-of-soil/${link.prevLink}`}>
        <Image
          width={64}
          height={64}
          src={link.prevImage}
          alt=""
          placeholder="blur"
        />
      </Link>
      <Link href={`/web-of-soil/${link.nextLink}`}>
        <Image
          width={64}
          height={64}
          src={link.nextImage}
          alt=""
          placeholder="blur"
        />
      </Link>
    </div>
  );
}
