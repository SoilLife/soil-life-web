import { Button, Text } from "ui/atoms";
import Link from "next/link";
import Image from "next/image";

// assets
import styles from "./get-involved.module.css";
import bgImg from "public/images/home/AdobeStock_144874490_6lpeJS0jbCq.jpg";

export function GetInvolvedSection() {
  return (
    <div className="relative min-h-screen snap-start overflow-hidden">
      <Image
        fill
        src={bgImg}
        alt="dirty soles of the feet from walking in the dirt"
        className={`absolute scale-150 object-cover sm:scale-100 ${styles["bg__img"]}`}
        placeholder="blur"
        loading="lazy"
      />
      <div className="container h-full w-full">
        <div
          className="px-10 absolute bottom-10 left-0 w-full flex flex-col
        md:bottom-20 md:space-y-10 md:items-center md:justify-center
        xl:space-y-0 xl:justify-between xl:flex-row"
        >
          <div className="mb-6 lg:mb-0 xl:w-full">
            <Text
              type="h2"
              weight="light"
              color="white"
              size="4xl"
              className={`mb-4 max-w-[220px] sm:mb-0 sm:max-w-none sm:whitespace-nowrap ${styles["text"]}`}
            >
              soil does so much for us,
            </Text>
            <Text
              type="h2"
              weight="bold"
              color="white"
              size="4xl"
              className={styles["text"]}
            >
              find out what you
            </Text>
            <Text
              type="h2"
              weight="bold"
              color="white"
              size="4xl"
              className={styles["text"]}
            >
              can do for soil!
            </Text>
          </div>
          <div className="xl:w-full">
            <div className="text-center lg:text-left lg:pl-[15%]">
              <Link href="/get-involved">
                <Button size="lg" type="secondary" label="get involved" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
