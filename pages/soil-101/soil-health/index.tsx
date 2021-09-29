import { useState, useRef, useEffect } from 'react';

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

const sections = ['what is soil health?', 'principles', 'management', 'measurement', 'soils at risk'];

export default function SoilBiologyPage() {
  const [currentSection, setCurrentSection] = useState('what is soil health?');
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
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-blue-500' />
      <HeroSection />
      <div className='container'>
        <SectionsNavBar sections={sections} onClick={handleClick} currentSection={currentSection} color='blue' />
        <div className='space-y-16 mb-10 sm:space-y-32 sm:px-32'>
          <WhatIsSection assignRef={assignRefs('what is soil health?')} />
          <PrinciplesSection assignRef={assignRefs('principles')} />
          <ManagingSection assignRef={assignRefs('management')} />
          <MeasuringSection assignRef={assignRefs('measurement')} />
          <RisksSection assignRef={assignRefs('soils at risk')} />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
