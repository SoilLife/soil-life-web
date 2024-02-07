// components
import { Text } from "ui/atoms";

// assets
import RhizosphereSvg from "public/images/soil-101/biology/rhizosphere.svg";
import RhizosphereDetailedSvg from "public/images/soil-101/biology/rhizosphere_detailed.svg";

import styles from "../soil-101.module.css";

export const RhizosphereSection = (props: {
  assignRef: (el: null | HTMLDivElement) => void;
}) => {
  return (
    <div ref={props.assignRef} className={styles["section"]}>
      <Text
        id="rhizosphere"
        type="h1"
        weight="bold"
        size="4xl"
        color="teal"
        className={`${styles["anchor"]} ${styles["heading"]}`}
      >
        rhizosphere
      </Text>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Text
          type="p"
          weight="light"
          size="lg"
          className={`text-center sm:w-2/5 ${styles["p-48"]}`}
        >
          the{" "}
          <Text type="span" weight="bold" size="lg" color="teal">
            rhizosphere
          </Text>{" "}
          is a bustling metropolis with billions of organisms in a single
          teaspoon! it's the area of soil that is in close contact with plant
          roots, where biological activity and turnover provides available
          nutrients right where plants needs them most!
        </Text>
        <RhizosphereSvg className="sm:w-3/5" />
      </div>
      <Text type="h1" weight="bold" size="4xl" color="teal">
        rhizosphere
      </Text>
      <RhizosphereDetailedSvg />
    </div>
  );
};
