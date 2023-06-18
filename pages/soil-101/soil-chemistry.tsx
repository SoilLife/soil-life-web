import { useState, useEffect, useRef } from "react";

// components
import { Footer, SectionsNavBar } from "ui/templates";
import { DefaultLayout } from "layouts";

// sections
import {
  HeroSection,
  PlantGrowthSection,
  PhotosynthesisSection,
  NutrientUptakeSection,
  NutrientCyclingSection,
  CarbonicAcidSection,
  RootIonExchangeSection,
  NutrientAvailabilitySection,
  MetabolismSection,
  DecompositionSection,
  MineralWeatheringSection,
  AnimalInputsSection,
} from "ui/sections/soil-101/chemistry";

import styles from "./soil-101.module.css";
import { Soil101Header } from "ui/components/soil-101/header";

const sections = [
  "plant growth",
  "nutrient cycling",
  "metabolism",
  "weathering",
  "animal inputs",
];

export default function SoilChemistryPage() {
  const [currentSection, setCurrentSection] = useState("plant growth");
  const refs = useRef<{ [key: string]: HTMLDivElement }>({});

  useEffect(() => {
    const keys = Object.keys(refs.current);
    function handleIntersectionChange(entries: IntersectionObserverEntry[]) {
      for (const entry of entries) {
        if (
          keys.length &&
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.5
        ) {
          for (const key of keys) {
            if (entry.target === refs.current[key]) {
              setCurrentSection(key);
            }
          }
        }
      }
    }
    const intersectionObserver = new IntersectionObserver(
      handleIntersectionChange,
      {
        threshold: 1,
      }
    );

    if (keys.length) {
      for (const key of keys) {
        intersectionObserver.observe(refs.current[key] as HTMLDivElement);
      }
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [refs.current]);

  function assignRefs(section: string) {
    return (el: null | HTMLDivElement) => {
      if (el) {
        refs.current[section] = el;
      }
    };
  }

  return (
    <DefaultLayout title="Soil Chemistry">
      <Soil101Header className="bg-orange-500" />
      <HeroSection />
      <div className="container">
        <SectionsNavBar
          sections={sections}
          currentSection={currentSection}
          color="orange"
        />
        <div className={styles["sections-container"]}>
          <PlantGrowthSection assignRef={assignRefs("plant growth")} />
          <PhotosynthesisSection />
          <NutrientUptakeSection />
          <NutrientCyclingSection assignRef={assignRefs("nutrient cycling")} />
          <CarbonicAcidSection />
          <RootIonExchangeSection />
          <NutrientAvailabilitySection />
          <MetabolismSection assignRef={assignRefs("metabolism")} />
          <DecompositionSection />
          <MineralWeatheringSection assignRef={assignRefs("weathering")} />
          <AnimalInputsSection assignRef={assignRefs("animal inputs")} />
        </div>
      </div>
      <Footer className="border-t border-solid border-gray-500" />
    </DefaultLayout>
  );
}
