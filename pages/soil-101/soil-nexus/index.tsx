import { useRef, useState, useEffect } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
import { SectionsNavBar, Header, Footer } from 'design-system/templates';
import { DefaultLayout } from 'layouts';

// sections
import {
  HeroSection,
  IntroSection,
  EcosystemServicesSection,
  ParentMaterialSection,
  PmTypesSection,
  RockWeatheringSection,
  FormationSection,
  FormingFactorsSection,
  ProcessesSection,
} from 'layouts/sections/soil-101/nexus';

const sections = ['soil nexus', 'soil services', 'rock weathering', 'soil formation', 'soil processes'];

export default function SoilNexusPage() {
  const [currentSection, setCurrentSection] = useState('soil nexus');
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
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-pink-500' />
      <HeroSection />
      <div className='container'>
        <SectionsNavBar sections={sections} onClick={handleClick} currentSection={currentSection} color='pink' />
        <div className='space-y-16 mb-10 sm:space-y-32 sm:px-32'>
          <IntroSection assignRef={assignRefs('soil nexus')} />
          <EcosystemServicesSection assignRef={assignRefs('soil services')} />
          <RockWeatheringSection assignRef={assignRefs('rock weathering')} />
          <ParentMaterialSection />
          <PmTypesSection />
          <FormationSection assignRef={assignRefs('soil formation')} />
          <FormingFactorsSection />
          <ProcessesSection assignRef={assignRefs('soil processes')} />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
