// components
import { Text } from "ui/atoms";

// assets
import AggregateFormationSvg from "public/images/soil-101/physics/aggregate_formation.svg";

import styles from "../soil-101.module.css";

export const AggregateFormationSection = () => {
  return (
    <div className={styles["section"]}>
      <Text
        type="h1"
        weight="light"
        size="3xl"
        color="yellow"
        className={styles["heading"]}
      >
        aggregate formation
      </Text>
      <AggregateFormationSvg />
    </div>
  );
};
