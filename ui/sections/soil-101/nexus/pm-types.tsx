import { useRef, useEffect, useState } from "react";

// helpers
import { makeSvgInteractive } from "helpers/make-svg-interactive";

// components
import { Text } from "ui/atoms";
import { FullImage } from "ui/components/soil-101-modals/full-image";

// assets
import PmTypesSvg from "public/images/soil-101/nexus/pm_types.svg";
import styles from "../soil-101.module.css";

const modalTypeMap = {
  "coarse-mafic": {
    title: "coarse mafic",
    imageUrl: "/images/soil-101/nexus/coarse_mafic_Rv4nOXIvr.png",
    text: "gabbro",
  },
  "coarse-intermediate": {
    title: "coarse intermediate",
    imageUrl: "/images/soil-101/nexus/coarse_intermediate_Z-FsFw9N5.png",
    text: "diorite",
  },
  "coarse-felsic": {
    title: "coarse felsic",
    imageUrl: "/images/soil-101/nexus/coarse_felsic_V9NkPZRBq.png",
    text: "granite",
  },
  "fine-mafic": {
    title: "fine mafic",
    imageUrl: "/images/soil-101/nexus/fine_mafic_E-ZoDPW3t.png",
    text: "basalt",
  },
  "fine-intermediate": {
    title: "fine intermediate",
    imageUrl: "/images/soil-101/nexus/fine_intermediate_Lk-PMOrcJ.png",
    text: "andesite",
  },
  "fine-felsic": {
    title: "fine felsic",
    imageUrl: "/images/soil-101/nexus/fine_felsic_GB5ktT7qZPq.png",
    text: "rhyolite",
  },
};

export const PmTypesSection = () => {
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(
    null
  );
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    const svgs: [string, typeof modalType][] = [
      ["#pm_types_svg__Layer_31", "coarse-mafic"],
      ["#pm_types_svg__Layer_33", "coarse-intermediate"],
      ["#pm_types_svg__Layer_34", "coarse-felsic"],
      ["#pm_types_svg__Layer_30", "fine-mafic"],
      ["#pm_types_svg__Layer_29", "fine-intermediate"],
      ["#pm_types_svg__Layer_28", "fine-felsic"],
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
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "auto";
    }
  }

  return (
    <>
      <div ref={sectionRef} className={styles["section"]}>
        <div className="flex flex-col space-x-4 sm:flex-row sm:items-end sm:pl-20">
          <Text type="p" weight="light" size="2xl" color="pink">
            types
          </Text>
          <Text type="p" weight="thin" size="xs" className={styles["p-60"]}>
            - rocks are composed of different types of minerals that{" "}
            <Text type="span" weight="bold" size="xs">
              weather
            </Text>{" "}
            at different rates
          </Text>
        </div>
        <PmTypesSvg className="mx-auto h-full max-h-[683px]" />
      </div>
      {modalType && (
        <FullImage
          image={{
            type: "imagekit",
            url: modalTypeMap[modalType].imageUrl,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
