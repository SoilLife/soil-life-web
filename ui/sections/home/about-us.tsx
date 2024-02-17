import { Button, Text } from "ui/atoms";
import Link from "next/link";
import Image from "next/image";

// assets
import grassRoots from "public/images/home/grass_roots_pnwdrMGcq.jpeg";

export function AboutUsSection() {
  return (
    <div className="relative container h-screen snap-start overflow-hidden">
      <div className="text-center py-6 grid place-items-center h-full lg:py-0 lg:max-w-4xl lg:mx-auto xl:hidden">
        <Text type="h1" weight="regular" size="4xl" color="teal">
          about us
        </Text>
        <Text type="p" weight="light" size="md" className="leading-normal">
          we are on a mission to change the way the world looks at soil-digging
          into what's dirty and calling into question what's clean.
        </Text>
        <div className="relative w-full h-[320px]">
          <Image
            fill
            src={grassRoots}
            alt="a patch of uprooted grass"
            className="object-contain"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <Text type="p" weight="light" size="md" className="leading-normal">
          we believe in change from the ground up! by starting at the root of
          some of our most pressing global issues, we aim to promote
          environmental and human health across the globe!
        </Text>
        <Link href="/about-us">
          <Button size="md" type="danger" label="learn more" />
        </Link>
      </div>

      <div className="hidden text-left h-full w-full xl:flex">
        <div className="w-1/2 pl-[10%] flex-grow flex flex-col justify-center space-y-10">
          <Text
            type="h1"
            weight="regular"
            size="4xl"
            color="teal"
            className="w-full"
          >
            about us
          </Text>
          <Text type="p" weight="light" size="md" className="leading-normal">
            we are on a mission to change the way the world looks at
            soil-digging into what's dirty and calling into question what's
            clean.
          </Text>
          <Text type="p" weight="light" size="md" className="leading-normal">
            we believe in change from the ground up! by starting at the root of
            some of our most pressing global issues, we aim to promote
            environmental and human health across the globe!
          </Text>
          <div className="text-center">
            <Link href="/about-us">
              <Button size="md" type="danger" label="learn more" />
            </Link>
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
            fill
            src={grassRoots}
            alt="a patch of uprooted grass"
            className="object-contain"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
