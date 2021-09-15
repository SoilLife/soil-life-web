import { useRef, useState, useEffect } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
import { SidePanel } from 'design-system/templates';
import { SubHeader } from 'design-system/templates/header/sub-header';
import { Footer } from 'design-system/templates/footer';
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
      <SubHeader headings={soil101Subheadings} pathName='soil-101' className='bg-pink-500' />
      <HeroSection />
      <div className='container sm:grid sm:grid-cols-12'>
        <div className='bg-white sticky top-10 sm:relative sm:top-auto sm:col-span-3'>
          <SidePanel sections={sections} onClick={handleClick} currentSection={currentSection} color='pink' />
        </div>
        <div className='sm:col-span-9'>
          <IntroSection ref={assignRefs('soil nexus')} />
          <EcosystemServicesSection ref={assignRefs('soil services')} />
          <RockWeatheringSection ref={assignRefs('rock weathering')} />
          <ParentMaterialSection />
          <PmTypesSection />
          <FormationSection ref={assignRefs('soil formation')} />
          <FormingFactorsSection />
          <ProcessesSection ref={assignRefs('soil processes')} />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
