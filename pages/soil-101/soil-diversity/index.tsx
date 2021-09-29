import { useState, useRef, useEffect } from 'react';

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
  SoilOrdersSection,
} from 'layouts/sections/soil-101/diversity';

const sections = ['pedogenesis', 'soil profile', 'pedogenesis processes', 'soil diversity'];

export default function SoilDiversityPage() {
  const [currentSection, setCurrentSection] = useState('pedogenesis');
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
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-gray-500' />
      <HeroSection />
      <div className='container'>
        <SectionsNavBar sections={sections} onClick={handleClick} currentSection={currentSection} color='gray' />
        <div className='space-y-16 mb-10 sm:space-y-32 sm:px-32'>
          <PedogenesisSection assignRef={assignRefs('pedogenesis')} />
          <ProfileSection assignRef={assignRefs('soil profile')} />
          <PedogenicProcessesSection assignRef={assignRefs('pedogenesis processes')} />
          <SoilOrdersSection />
          <EntisolsSection />
          <InceptisolsSection />
          <AridisolSection />
          <AndisolSection />
          <MollisolSection />
          <VertisolSection />
          <GelisolSection />
          <HistosolSection />
          <AfisolSection />
          <SpodosolSection />
          <UltisolSection />
          <OxisolSection />
          <AnthrosolSection />
          <DiversitySection assignRef={assignRefs('soil diversity')} />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
