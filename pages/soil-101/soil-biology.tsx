import { useState, useRef, useEffect } from "react";

// components
import { Footer, SectionsNavBar } from "ui/templates";
import { DefaultLayout } from "layouts";
import { Soil101Header } from "ui/components/soil-101/header";

// sections
import {
  HeroSection,
  RhizosphereSection,
  FoodWebSection,
  SymbiosesSection,
  NitrogenFixationSection,
  FungalNetworksSection,
  BiocyclingSection,
  BiodegradationSection,
  FinalFrontierSection,
} from "ui/sections/soil-101/biology";

import styles from "./soil-101.module.css";

const sections = [
  "rhizosphere",
  "symbioses",
  "biocycling",
  "biodegradation",
  "final frontier",
];

export default function SoilBiologyPage() {
  const [currentSection, setCurrentSection] = useState("rhizosphere");
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

  function handleDownArrowClick() {
    const headerOffsetTop = 141;
    if (refs.current["rhizosphere"]) {
      window.scrollTo({
        behavior: "smooth",
        top: refs.current["rhizosphere"].offsetTop - headerOffsetTop,
      });
    }
  }

  return (
    <DefaultLayout title="Soil Biology">
      <Soil101Header className="bg-teal-500" />
      <HeroSection onDownArrowClick={handleDownArrowClick} />
      <div className="container">
        <SectionsNavBar
          sections={sections}
          currentSection={currentSection}
          color="teal"
        />
        <div className={styles["sections-container"]}>
          <RhizosphereSection assignRef={assignRefs("rhizosphere")} />
          <FoodWebSection />
          <SymbiosesSection assignRef={assignRefs("symbioses")} />
          <NitrogenFixationSection />
          <FungalNetworksSection />
          <BiocyclingSection assignRef={assignRefs("biocycling")} />
          <BiodegradationSection assignRef={assignRefs("biodegradation")} />
          <FinalFrontierSection assignRef={assignRefs("final frontier")} />
        </div>
      </div>
      <Footer className="border-t border-solid border-gray-500" />
    </DefaultLayout>
  );
}
