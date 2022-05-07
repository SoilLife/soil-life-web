import React, { useState } from "react";
import { useFullpageOverflow } from "helpers/use-fullpage-overflow";
import { useOrientation, useMedia } from "react-use";

// components
import Link from "next/link";
import ReactModal from "react-modal";
import { Text, Image, Icon } from "design-system/atoms";
import { SoilDiversityModal } from "design-system/components/soil-diversity-modal";

import styles from "../soil-101.module.css";

const data = {
  entisols: {
    textEmphasis: "baby",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/Entisol_surface_Killburn_WLB_9vMq_fMa1.jpg",
    modalTitle: "little to no soil development",
    label: "young and/or low weathering environment",
    features: ["shallow", "high rock content"],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Entisol_profile_Killburn_WLB_N-7Dq2xnJ5F.jpg",
  },
  inceptisols: {
    textEmphasis: "adolescent",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/Inceptisol_surface_Dellwood_WLB_PuYJjmE3V.jpg",
    modalTitle: "moderate soil development, horizons beginning to form",
    label: "occur in wide range of environments",
    features: [
      "moderate organic matter",
      "moderate rock content",
      "wide variety of characteristics",
    ],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Inceptisol_profile_Dellwood_WLB_trHwpLtL_Ls.jpg",
  },
  aridisol: {
    textEmphasis: "dry",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/Aridisol_surface_WLB_aUUD2iCB-.jpg",
    modalTitle: "little to moderate soil development, due to low precipitation",
    label: "found in deserts",
    features: [
      "very low organic matter",
      "high sand content",
      "fast infiltration, rapid drainage",
      "low water holding capacity",
    ],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Aridisol_profile_WLB_VdQDq8dLhw7.jpg",
  },
  andisol: {
    textEmphasis: "volcanic",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/Andisol_surface_WLB_bt0DvMLBvz3.jpg",
    modalTitle:
      "developed from volcanic ejecta; rapid transformation of ash to poorly crystallized minerals.",
    label: "contains volcanic material",
    features: [
      "highly fertile",
      ">5% soil organic matter",
      "in surface 18-25cm",
    ],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Andisol_profile_WLB_EqR0ctPfe.jpg",
  },
  mollisol: {
    textEmphasis: "prairie",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/Mollisol_surface_WLB_wxigXiVFyIr.jpg",
    modalTitle:
      "surface horizon contains significant amount of soil organic matter (>5% in top 18-25 cm)",
    label: "found in grasslands",
    features: [
      "high organic matter",
      "good/fast infiltration",
      "granular structure",
    ],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Mollisol_profile_WLB_pwTI1PQ1T.jpg",
  },
  vertisol: {
    textEmphasis: "shrink-well",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/vertisol_surface_jpCZk-4pEB.png",
    modalTitle:
      "high in clays that swell when wet and shrink when dry, physically churning the soil",
    label: "high in magnesium",
    features: ["very high clay", "slickensides", "wedge structure"],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Vertisols_profile_WLB_b4bmPTzpUyf.jpg",
  },
  gelisol: {
    textEmphasis: "frozen",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/Gelisol_surface_WLB_fLygyuAj0zq.jpg",
    modalTitle:
      "contains a layer of ice (permafrost) that stays frozen for at least 2 consecutive years",
    label: "found in cold environments",
    features: ["high organic matter", "frozen layer - permafrost"],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Gelisol_profile_WLB_G8sfsfI05.jpg",
  },
  histosol: {
    textEmphasis: "wetland",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/histosol_surface_KtsPucsZx.png",
    modalTitle:
      "formed from organic parent material; minimum 12-18% organic in the top 40 cm",
    label: "known as peat or muck",
    features: [
      "low pH",
      "low bulk density",
      "high infiltration rates",
      "poor/slow drainage",
    ],
    modalImage: "Soil_101/Diversity_-_Soil_Profiles/histosol_profile.jpg",
  },
  alfisol: {
    textEmphasis: "forest",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/Alfisol_surface_WLB_San_Joaquin__ehAJ_aic.jpg",
    modalTitle:
      "subsurface accumulation of clay and high concentration of Na, K, Ca, and Mg",
    label: "found in forests",
    features: ["high fertility", "moderate to high clay"],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Alfisol_profile_WLB_San_Joaquin_az_MyVd9I.jpg",
  },
  spodosol: {
    textEmphasis: "boreal",
    imageUrl: "Soil_101/Diversity_-_Soil_Profiles/Spodosols_surface.jpg",
    modalTitle:
      "has a zone of eluviation and a zone of accumulation of Fe + Al bound to organic matter",
    label: "found in temperate forests",
    features: [
      "low pH",
      "high clay",
      "low infiltration rates",
      "poor/slow drainage",
    ],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Spodosol_profile_WLB_ud2qgMPxV.jpg",
  },
  ultisol: {
    textEmphasis: "old",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/Ultisol_surface_Coxville_WLB_1__VENETQPvM.jpg",
    modalTitle:
      "highly weathered, clay accumulation at depth, low in Na, K, Ca, Mg",
    label: "highly weathered",
    features: ["low fertility", "moderate to high clay"],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/Ultisol_profile_Coxville_WLB_xGAQlyCTd.jpg",
  },
  oxisol: {
    textEmphasis: "tropical",
    imageUrl: "Soil_101/Diversity_-_Soil_Profiles/oxisol_surface_25_5R2WeW.jpg",
    modalTitle:
      "absence of important plant nutrients, predominance of iron and aluminum oxides",
    label: 'known as "red earth"',
    features: [
      "low pH",
      "high clay",
      "low infiltration rates",
      "poor/slow drainage",
    ],
    modalImage:
      "Soil_101/Diversity_-_Soil_Profiles/oxisol_Profile2_WLB_ikuceYHR1kh.png",
  },
  anthrosol: {
    textEmphasis: "human",
    imageUrl:
      "Soil_101/Diversity_-_Soil_Profiles/anthrosol_surface_NKdtUYTsVh.jpg",
    modalTitle: "",
    label: "",
    features: [],
    modalImage: "",
  },
};

export const SoilOrdersSection = (props: {
  assignRef: (el: null | HTMLDivElement) => void;
}) => {
  useFullpageOverflow();
  const orientation = useOrientation();
  const isMobile = useMedia("(max-width: 640px)");
  const isLandscape = orientation.type.includes("landscape");
  const [modalType, setModalType] = useState<null | keyof typeof data>(null);

  function handleOpenModal(type: typeof modalType) {
    return () => {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflow = "hidden";
      }
      setModalType(type);
    };
  }

  function handleCloseModal() {
    setModalType(null);
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "auto";
    }
  }

  return (
    <>
      <div ref={props.assignRef} className={styles["section"]}>
        <Text
          id="soil-orders"
          type="h1"
          weight="bold"
          size="4xl"
          className={`${styles["anchor"]} ${styles["heading"]}`}
        >
          soil orders
        </Text>
        <Text
          type="p"
          weight="light"
          size="md"
          className={`text-center ${styles["p-55"]}`}
        >
          the diversity of{" "}
          <Text type="span" weight="bold" size="md">
            soil forming factors
          </Text>{" "}
          and{" "}
          <Text type="span" weight="bold" size="md">
            pedogenic processes
          </Text>{" "}
          give rise to a diversity of soils, which are classified into 12
          distinct groups called{" "}
          <Text type="span" weight="bold" size="md">
            soil orders
          </Text>
          . the 12 soil orders can be found all over the world with{" "}
          <Text type="span" weight="bold" size="md">
            similar soils
          </Text>{" "}
          appearing under{" "}
          <Text type="span" weight="bold" size="md">
            similar climates
          </Text>{" "}
          or{" "}
          <Text type="span" weight="bold" size="md">
            ecosystems
          </Text>
          .
        </Text>

        <div className="space-y-44" style={{ marginTop: "11rem" }}>
          {Object.entries(data).map(([soilType, soilData]) => {
            return (
              <div key={soilType}>
                <Text
                  id={soilType}
                  type="h1"
                  weight="light"
                  size="4xl"
                  className="mb-8 sm:pl-10"
                >
                  {soilType}
                </Text>

                <div className="flex justify-center mb-10">
                  <Text
                    type="h1"
                    weight="light"
                    size="2xl"
                    color="pink"
                    className={styles["diversity-subheading"]}
                  >
                    the{" "}
                    <Text type="span" weight="bold" size="2xl">
                      {soilData.textEmphasis}
                    </Text>{" "}
                    soil
                  </Text>
                </div>

                <Link href={`#${soilType}`}>
                  <a onClick={handleOpenModal(soilType as typeof modalType)}>
                    <div className="max-h-full mx-auto border-2 border-solid border-gray-500 sm:w-3/4">
                      <Image url={soilData.imageUrl} className="object-cover" />
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {modalType && modalType !== "anthrosol" ? (
        <SoilDiversityModal
          title={data[modalType].modalTitle}
          label={data[modalType].label}
          features={data[modalType].features}
          imageKitUrl={data[modalType].modalImage}
          onClose={handleCloseModal}
        />
      ) : (
        modalType && (
          <ReactModal
            isOpen
            shouldCloseOnOverlayClick
            shouldCloseOnEsc
            style={{
              content: {
                padding: 40,
                height: isMobile ? "100%" : isLandscape ? "80vh" : "50vh",
                width: isMobile ? "100%" : isLandscape ? "65vw" : "80vw",
                left: isMobile ? 0 : "50%",
                top: isMobile ? "40px" : "50%",
                transform: isMobile ? undefined : "translate(-50%, -50%)",
              },
              overlay: {
                zIndex: 2,
              },
            }}
            onRequestClose={handleCloseModal}
          >
            <button
              className="absolute top-4 right-4"
              onClick={handleCloseModal}
            >
              <Icon icon="x" size={32} className="text-gray-500" />
            </button>
            <div
              className="h-full w-full grid place-items-center p-6"
              style={{ backgroundColor: "#5E5252" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
                viewBox="0 0 285.661 501.247"
              >
                <g
                  id="Group_36189"
                  data-name="Group 36189"
                  transform="translate(-851.399 -445.428)"
                >
                  <path
                    id="Path_203"
                    data-name="Path 203"
                    d="M8036.787,14782.255c-11.533,10-20.41,22.555-23.511,38.735-2.893,15.1,2.313,32.493,15.452,40.469,12.924,7.845,29.847,4.927,43.42-1.731,23.891-11.716,45.673-29.569,73.2-31.46,29.8-2.047,61.262,13.546,74.048,41.2,14.84,32.094,1.427,77.561-33.283,90.464-30.159,11.215-69.068-1.432-92.6,20.52-29.68,27.693-17.288,93.724-18.38,130.418-.336,11.229,2.429,23.738,11.7,30.094,19.582,13.418,52.27,8.221,54.3-18.6,1.989-26.28-19.549-60.977,2.316-83.855,19.625-20.526,52.543-15.044,77-25.082,27.835-11.421,47.809-37.21,60.023-63.816,23.624-51.445,15.009-116.66-22.6-159.277-35.072-39.741-90.212-52.921-141.158-43.533C8089.235,14751.865,8058.664,14763.29,8036.787,14782.255Z"
                    transform="translate(-7158.854 -14296.197)"
                    fill="#df6572"
                    stroke="#df6572"
                    stroke-miterlimit="10"
                    stroke-width="4.409"
                  />
                  <ellipse
                    id="Ellipse_79"
                    data-name="Ellipse 79"
                    cx="32.617"
                    cy="32.617"
                    rx="32.617"
                    ry="32.617"
                    transform="translate(919.967 879.441)"
                    fill="#df6572"
                    stroke="#df6572"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                </g>
              </svg>
            </div>
          </ReactModal>
        )
      )}
    </>
  );
};
