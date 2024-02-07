// components
import { Text } from "ui/atoms";

// assets
import DecompositionSvg from "public/images/soil-101/chemistry/decomposition.svg";

import styles from "../soil-101.module.css";

export const DecompositionSection = () => {
  return (
    <div className={styles["section"]}>
      <Text
        type="h1"
        weight="light"
        size="4xl"
        color="orange"
        className={styles["heading"]}
      >
        decomposition
      </Text>
      <Text
        type="p"
        weight="light"
        size="md"
        className={`text-center ${styles["p-48"]}`}
      >
        plant residues fall to the surface, roots slough off, and the soil food
        web eats and is eaten; cycling carbon and nutrients throughout the soil
        system.
      </Text>
      <DecompositionSvg />
    </div>
  );
};
