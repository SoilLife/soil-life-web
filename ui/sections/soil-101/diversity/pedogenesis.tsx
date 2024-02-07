// components
import { Text } from "ui/atoms";

// assets
import PedogenesisSvg from "public/images/soil-101/diversity/pedogenesis.svg";

import styles from "../soil-101.module.css";

export const PedogenesisSection = (props: {
  assignRef: (el: null | HTMLDivElement) => void;
}) => {
  return (
    <div ref={props.assignRef} className={styles["section"]}>
      <Text
        id="pedogenesis"
        type="h1"
        weight="bold"
        size="4xl"
        className={`${styles["anchor"]} ${styles["heading"]}`}
      >
        pedogenesis
      </Text>
      <Text
        type="p"
        weight="light"
        size="md"
        className={`text-center ${styles["p-50"]}`}
      >
        pedogenesis is the formation of{" "}
        <Text type="span" weight="bold" size="md">
          soil
        </Text>
        . over time, as energy flows through the system (in the form of heat,
        precipitation, biological activity, etc); soils{" "}
        <Text type="span" weight="bold" size="md">
          weather and evolve
        </Text>
        , forming distinct layers and other morphological features.
      </Text>
      <PedogenesisSvg />
    </div>
  );
};
