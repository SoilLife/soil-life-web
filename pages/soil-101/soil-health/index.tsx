import { useState } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
import { Header, Footer, SectionsNavBar } from 'design-system/templates';
import { DefaultLayout } from 'layouts';

// sections
import {
  HeroSection,
  WhatIsSection,
  PrinciplesSection,
  ManagingSection,
  MeasuringSection,
  RisksSection,
} from 'layouts/sections/soil-101/health';

const sections = [
  'what is soil health?',
  'principles of soil health',
  'managing for soil health',
  'measuring soil health',
  'soils at risk',
];

export default function SoilBiologyPage() {
  const [currentSection, setCurrentSection] = useState('what is soil health?');

  function handleClick(section: string) {
    return () => {
      setCurrentSection(section);
    };
  }

  return (
    <DefaultLayout>
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-blue-500' />
      <HeroSection />
      <div className='container'>
        <SectionsNavBar sections={sections} onClick={handleClick} currentSection={currentSection} color='blue' />
        <div className='space-y-16 mb-10 sm:space-y-32 sm:px-32'>
          <WhatIsSection />
          <PrinciplesSection />
          <ManagingSection />
          <MeasuringSection />
          <RisksSection />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
