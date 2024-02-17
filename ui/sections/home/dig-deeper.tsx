import { Button, Text } from "ui/atoms";
import Link from "next/link";
import Image from "next/image";

// assets
import styles from "./dig-deeper.module.css";
import bgImg from "public/images/home/Dig_Deeper_soil_pit_real_deal_lf55pw1nJoc.jpg";

export function DigDeeperSection() {
  return (
    <div className="relative min-h-screen snap-start overflow-hidden">
      <Image
        fill
        src={bgImg}
        alt="a man watering a wall of soil and roots in a pit"
        loading="lazy"
        className={`scale-150 object-cover sm:scale-100 ${styles["bg__img"]}`}
        placeholder="blur"
      />
      <div className="container h-full w-full">
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="p-8 flex flex-col justify-between h-full w-full sm:h-auto sm:w-max sm:p-0 sm:block sm:relative sm:left-[32%] sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-10">
            <Text type="h2" weight="regular" size="3xl" color="white">
              want to know more?
            </Text>
            <Text
              type="h1"
              weight="medium"
              size="5xl"
              color="white"
              className="w-min ml-auto text-center left-20 sm:w-auto sm:ml-0 sm:static sm:text-left sm:left-0 sm:mb-10"
            >
              dig deeper
            </Text>
            <div className="mx-auto sm:mx-0 sm:pl-[30%]">
              <Link href="/soil-101/soil-nexus">
                <Button size="lg" type="secondary" label="dig in" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
