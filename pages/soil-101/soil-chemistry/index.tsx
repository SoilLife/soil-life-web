import { useState, useEffect, useRef } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
import { Header, Footer, SectionsNavBar } from 'design-system/templates';
import { DefaultLayout } from 'layouts';

// sections
import {
  HeroSection,
  CircleOfLifeSection,
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
} from 'layouts/sections/soil-101/chemistry';

import styles from '../soil-101.module.css';

const sections = ['plant growth', 'nutrient cycling', 'metabolism', 'weathering', 'animal inputs'];

export default function SoilChemistryPage() {
  const [currentSection, setCurrentSection] = useState('plant growth');
  const refs = useRef<{ [key: string]: HTMLDivElement }>({});

  useEffect(() => {
    const keys = Object.keys(refs.current);
    function handleIntersectionChange(entries: IntersectionObserverEntry[]) {
      for (const entry of entries) {
        if (keys.length && entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          for (const key of keys) {
            if (entry.target === refs.current[key]) {
              setCurrentSection(key);
            }
          }
        }
      }
    }
    const intersectionObserver = new IntersectionObserver(handleIntersectionChange, {
      threshold: 1,
    });

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

  function handleClick(section: string) {
    return () => {
      if (refs.current[section]) {
        refs.current[section]?.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(section);
      }
    };
  }

  return (
    <DefaultLayout>
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-orange-500' />
      <HeroSection />
      <div className='container'>
        <SectionsNavBar sections={sections} onClick={handleClick} currentSection={currentSection} color='orange' />
        <div className={styles['sections-container']}>
          <CircleOfLifeSection />
          <PlantGrowthSection assignRef={assignRefs('plant growth')} />
          <PhotosynthesisSection />
          <NutrientUptakeSection />
          <NutrientCyclingSection assignRef={assignRefs('nutrient cycling')} />
          <CarbonicAcidSection />
          <RootIonExchangeSection />
          <NutrientAvailabilitySection />
          <MetabolismSection assignRef={assignRefs('metabolism')} />
          <DecompositionSection />
          <MineralWeatheringSection assignRef={assignRefs('weathering')} />
          <AnimalInputsSection assignRef={assignRefs('animal inputs')} />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
