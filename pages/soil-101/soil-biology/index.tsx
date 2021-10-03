import { useState, useRef, useEffect } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
import { Header, Footer, SectionsNavBar } from 'design-system/templates';
import { DefaultLayout } from 'layouts';

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
} from 'layouts/sections/soil-101/biology';

import styles from '../soil-101.module.css';

const sections = ['rhizosphere', 'symbioses', 'biocycling', 'biodegradation', 'final frontier'];

export default function SoilBiologyPage() {
  const [currentSection, setCurrentSection] = useState('rhizosphere');
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
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-teal-500' />
      <HeroSection />
      <div className='container'>
        <SectionsNavBar sections={sections} onClick={handleClick} currentSection={currentSection} color='teal' />
        <div className={styles['sections-container']}>
          <RhizosphereSection assignRef={assignRefs('rhizosphere')} />
          <FoodWebSection />
          <SymbiosesSection assignRef={assignRefs('symbioses')} />
          <NitrogenFixationSection />
          <FungalNetworksSection />
          <BiocyclingSection assignRef={assignRefs('biocycling')} />
          <BiodegradationSection assignRef={assignRefs('biodegradation')} />
          <FinalFrontierSection assignRef={assignRefs('final frontier')} />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
