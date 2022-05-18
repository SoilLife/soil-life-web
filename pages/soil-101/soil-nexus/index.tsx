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
  FormationSection,
  ParentMaterialSection,
  PmTypesSection,
  RockWeatheringSection,
  FormingFactorsSection,
  ProcessesSection,
} from 'layouts/sections/soil-101/nexus';

import styles from '../soil-101.module.css';

const sections = ['soil nexus', 'soil services', 'soil formation', 'rock weathering', 'soil processes'];

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

  function handleDownArrowClick() {
    const headerOffsetTop = 141;
    if (refs.current['soil nexus']) {
      window.scrollTo({ behavior: 'smooth', top: refs.current['soil nexus'].offsetTop - headerOffsetTop });
    }
  }

  return (
    <DefaultLayout>
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-pink-500' />
      <HeroSection onDownArrowClick={handleDownArrowClick} />
      <div className='container'>
        <SectionsNavBar sections={sections} currentSection={currentSection} color='pink' />
        <div className={styles['sections-container']}>
          <IntroSection assignRef={assignRefs('soil nexus')} />
          <EcosystemServicesSection assignRef={assignRefs('soil services')} />
          <FormationSection assignRef={assignRefs('soil formation')} />
          <RockWeatheringSection assignRef={assignRefs('rock weathering')} />
          <ParentMaterialSection />
          <PmTypesSection />
          <FormingFactorsSection />
          <ProcessesSection assignRef={assignRefs('soil processes')} />
        </div>
      </div>
      <Footer className='border-t border-solid border-gray-500' />
    </DefaultLayout>
  );
}
