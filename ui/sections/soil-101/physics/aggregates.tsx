import { useRef, useEffect, useState } from "react";

// helpers
import { makeSvgInteractive } from "helpers/make-svg-interactive";

// components
import { Text } from "ui/atoms";
import { FullImage } from "ui/components/soil-101-modals/full-image";

// assets
import AggregationSvg from "public/images/soil-101/physics/aggregation.svg";
import AggregatesSvg from "public/images/soil-101/physics/whats_an_aggregate.svg";

import styles from "../soil-101.module.css";

export const AggregatesSection = (props: {
  assignRef: (el: null | HTMLDivElement) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal() {
      setIsModalOpen(true);
    }

    const svgs = ["#aggregation_svg__Layer_94", "#aggregation_svg__Layer_91"];

    const sectionContainer = sectionRef.current;
    const interactiveSvgs = svgs.map((id) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal,
        onKeydown: openModal,
        ariaLabel: "open aggregation modal",
      })
    );

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div
        ref={(el) => {
          props.assignRef(el);
          sectionRef.current = el;
        }}
        className={styles["section"]}
      >
        <Text
          id="aggregation"
          type="h1"
          weight="bold"
          size="4xl"
          color="yellow"
          className={`${styles["anchor"]} ${styles["heading"]}`}
        >
          aggregation
        </Text>
        <AggregationSvg />
      </div>
      {isModalOpen && (
        <FullImage
          image={{
            type: "svg",
            element: <AggregatesSvg className="max-h-full" />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
