import { useState } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
import { Header, Footer, SectionsNavBar } from 'design-system/templates';
import { DefaultLayout } from 'layouts';

// sections
import {
  HeroSection,
  CircleOfLifeSection,
  SeedGerminationSection,
  PhotosynthesisSection,
  NutrientUptakeSection,
  NutrientCyclingSection,
  CarbonicAcidSection,
  RootIonExchangeSection,
  NutrientAvailabilitySection,
  MetabolismSection,
  DecompositionSection,
  MicrobialWeatheringSection,
  AnimalInputsSection,
} from 'layouts/sections/soil-101/chemistry';

const sections = ['plant growth', 'metabolism', 'nutrient cycling', 'cation exchange capacity', 'chemistry'];

export default function SoilChemistryPage() {
  const [currentSection, setCurrentSection] = useState('plant growth');

  function handleClick(section: string) {
    return () => {
      setCurrentSection(section);
    };
  }

  return (
    <DefaultLayout>
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-orange-500' />
      <HeroSection />
      <div className='container'>
        <SectionsNavBar sections={sections} onClick={handleClick} currentSection={currentSection} color='orange' />
        <div className='space-y-16 mb-10 sm:space-y-32 sm:px-32'>
          <CircleOfLifeSection />
          <SeedGerminationSection />
          <PhotosynthesisSection />
          <NutrientUptakeSection />
          <NutrientCyclingSection />
          <CarbonicAcidSection />
          <RootIonExchangeSection />
          <NutrientAvailabilitySection />
          <MetabolismSection />
          <DecompositionSection />
          <MicrobialWeatheringSection />
          <AnimalInputsSection />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
