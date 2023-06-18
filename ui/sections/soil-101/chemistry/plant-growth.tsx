// components
import { Text } from "ui/atoms";

// assets
import PlantGrowthSvg from "public/images/soil-101/chemistry/seed_germination.svg";

import styles from "../soil-101.module.css";

export const PlantGrowthSection = (props: {
  assignRef: (el: null | HTMLDivElement) => void;
}) => {
  return (
    <div ref={props.assignRef} className={styles["section"]}>
      <Text
        id="plant-growth"
        type="h1"
        weight="bold"
        size="4xl"
        color="orange"
        className={`${styles["anchor"]} ${styles["heading"]}`}
      >
        plant growth
      </Text>
      <PlantGrowthSvg className="mx-auto lg:max-w-[75vw]" />
    </div>
  );
};
