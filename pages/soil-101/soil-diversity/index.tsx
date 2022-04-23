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
  DiversitySection,
  SoilOrdersSection,
} from 'layouts/sections/soil-101/diversity';

import styles from '../soil-101.module.css';

const sections = ['pedogenesis', 'soil profile', 'pedogenesis processes', 'soil orders', 'soil diversity'];

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

  function handleDownArrowClick() {
    const headerOffsetTop = 141;
    if (refs.current['pedogenesis']) {
      window.scrollTo({ behavior: 'smooth', top: refs.current['pedogenesis'].offsetTop - headerOffsetTop });
    }
  }

  return (
    <DefaultLayout>
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-gray-500' />
      <HeroSection onDownArrowClick={handleDownArrowClick} />
      <div className='container'>
        <SectionsNavBar sections={sections} currentSection={currentSection} color='gray' />
        <div className={styles['sections-container']}>
          <PedogenesisSection assignRef={assignRefs('pedogenesis')} />
          <ProfileSection assignRef={assignRefs('soil profile')} />
          <PedogenicProcessesSection assignRef={assignRefs('pedogenesis processes')} />
          <SoilOrdersSection assignRef={assignRefs('soil orders')} />
          <DiversitySection assignRef={assignRefs('soil diversity')} />
        </div>
      </div>
      <Footer className='border-t border-solid border-gray-500' />
    </DefaultLayout>
  );
}
