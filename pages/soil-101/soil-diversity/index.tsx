import { useState } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
// import { SidePanel } from 'design-system/templates';
import { Header, Footer, SectionsNavBar } from 'design-system/templates';
import { DefaultLayout } from 'layouts';

// sections
import {
  HeroSection,
  PedogenesisSection,
  ProfileSection,
  PedogenicProcessesSection,
  EntisolsSection,
  InceptisolsSection,
  AridisolSection,
  AndisolSection,
  MollisolSection,
  VertisolSection,
  GelisolSection,
  AfisolSection,
  SpodosolSection,
  UltisolSection,
  OxisolSection,
  HistosolSection,
  AnthrosolSection,
  DiversitySection,
} from 'layouts/sections/soil-101/diversity';

const sections = [
  'pedogenesis',
  'soil profile',
  'entisol',
  'inceptisol',
  'aridisol',
  'andisol',
  'alfisol',
  'gelisol',
  'histosol',
  'mollisol',
  'spodosol',
  'vertisol',
  'oxisol',
  'ultisol',
];

export default function SoilDiversityPage() {
  const [currentSection, setCurrentSection] = useState('pedogenesis');

  function handleClick(section: string) {
    return () => {
      setCurrentSection(section);
    };
  }

  return (
    <DefaultLayout>
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-gray-500' />
      <HeroSection />
      <div className='container'>
        <SectionsNavBar sections={sections} onClick={handleClick} currentSection={currentSection} color='gray' />
        <div className='space-y-16 mb-10 sm:space-y-32 sm:px-32'>
          <PedogenesisSection />
          <ProfileSection />
          <PedogenicProcessesSection />
          <EntisolsSection />
          <InceptisolsSection />
          <AridisolSection />
          <AndisolSection />
          <MollisolSection />
          <VertisolSection />
          <GelisolSection />
          <AfisolSection />
          <SpodosolSection />
          <UltisolSection />
          <OxisolSection />
          <HistosolSection />
          <AnthrosolSection />
          <DiversitySection />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
