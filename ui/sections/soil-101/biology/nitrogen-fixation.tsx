import { useRef, useEffect, useState } from "react";

// helpers
import { makeSvgInteractive } from "helpers/make-svg-interactive";

// components
import { Text } from "ui/atoms";
import { FullImage } from "ui/components/soil-101-modals/full-image";

// assets
import NitrogenFixation1Svg from "public/images/soil-101/biology/nitrogen_fixation_1.svg";
import NitrogenFixation2Svg from "public/images/soil-101/biology/nitrogen_fixation_2.svg";
import NitrogenFixation3Svg from "public/images/soil-101/biology/nitrogen_fixation_3.svg";
import RootNoduleSvg from "public/images/soil-101/biology/root_nodule.svg";

import styles from "../soil-101.module.css";

export const NitrogenFixationSection = () => {
  const [modalType, setModalType] = useState<
    null | "infected" | "root nodules"
  >(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    const svgs: [string, typeof modalType][] = [
      ["#nitrogen_fixation_2_svg__Layer_43", "infected"],
      ["#nitrogen_fixation_2_svg__Layer_45", "root nodules"],
    ];

    const sectionContainer = sectionRef.current;

    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
  }

  return (
    <>
      <div ref={sectionRef} className={styles["section"]}>
        <Text
          type="h1"
          weight="light"
          size="4xl"
          color="teal"
          className={styles["heading"]}
        >
          nitrogen fixation
        </Text>
        <NitrogenFixation1Svg className="mx-auto max-h-[80vh]" />
        <NitrogenFixation2Svg className="mx-auto max-h-[80vh]" />
        <NitrogenFixation3Svg className="mx-auto" />
      </div>
      {modalType && (
        <FullImage
          title={modalType === "infected" ? '"infected" root' : ""}
          image={
            modalType === "infected"
              ? {
                  type: "imagekit",
                  url: "/images/soil-101/biology/UNADJUSTEDNONRAW_thumb_1be_kuHV5nM5s56_mKaTZ9IfFH.jpg",
                }
              : {
                  type: "svg",
                  element: <RootNoduleSvg className="h-full w-full" />,
                }
          }
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
