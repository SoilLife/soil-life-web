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

import styles from '../soil-101.module.css';

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

  function handleDownArrowClick() {
    const headerOffsetTop = 141;
    if (refs.current['what is soil health?']) {
      window.scrollTo({ behavior: 'smooth', top: refs.current['what is soil health?'].offsetTop - headerOffsetTop });
    }
  }

  return (
    <DefaultLayout title="Soil Health">
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-blue-500' />
      <HeroSection onDownArrowClick={handleDownArrowClick} />
      <div className='container'>
        <SectionsNavBar sections={sections} currentSection={currentSection} color='blue' />
        <div className={styles['sections-container']}>
          <WhatIsSection assignRef={assignRefs('what is soil health?')} />
          <PrinciplesSection assignRef={assignRefs('principles')} />
          <ManagingSection assignRef={assignRefs('management')} />
          <MeasuringSection assignRef={assignRefs('measurement')} />
          <RisksSection assignRef={assignRefs('soils at risk')} />
        </div>
      </div>
      <Footer className='border-t border-solid border-gray-500' />
    </DefaultLayout>
  );
}
