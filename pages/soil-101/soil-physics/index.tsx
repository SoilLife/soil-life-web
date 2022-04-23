import { useRef, useState, useEffect } from 'react';

// helpers
import { soil101Subheadings } from 'data/main-headings';

// components
import { Header, Footer, SectionsNavBar } from 'design-system/templates';
import { DefaultLayout } from 'layouts';

// sections
import {
  HeroSection,
  TextureSection,
  TexturalClassSection,
  SurfaceChargeSection,
  WaterDynamicsSection,
  OrganicMatterSection,
  ExchangeCapacitySection,
  AggregatesSection,
  AggregateFormationSection,
  StructureSection,
  PoreSpaceSection,
  HealthyStructureSection,
} from 'layouts/sections/soil-101/physics';

import styles from '../soil-101.module.css';

const sections = ['texture', 'charge', 'aggregation', 'structure', 'pore space', 'healthy structure'];

export default function SoilPhysicsPage() {
  const [currentSection, setCurrentSection] = useState('texture');
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
    if (refs.current['texture']) {
      window.scrollTo({ behavior: 'smooth', top: refs.current['texture'].offsetTop - headerOffsetTop });
    }
  }

  return (
    <DefaultLayout>
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-yellow-500' />
      <HeroSection onDownArrowClick={handleDownArrowClick} />
      <div className='container'>
        <SectionsNavBar sections={sections} currentSection={currentSection} color='yellow' />
        <div className={styles['sections-container']}>
          <TextureSection assignRef={assignRefs('texture')} />
          <TexturalClassSection />
          <OrganicMatterSection />
          <SurfaceChargeSection assignRef={assignRefs('charge')} />
          <WaterDynamicsSection />
          <ExchangeCapacitySection />
          <AggregatesSection assignRef={assignRefs('aggregation')} />
          <AggregateFormationSection />
          <StructureSection assignRef={assignRefs('structure')} />
          <PoreSpaceSection assignRef={assignRefs('pore space')} />
          <HealthyStructureSection assignRef={assignRefs('healthy structure')} />
        </div>
      </div>
      <Footer className='border-t border-solid border-gray-500' />
    </DefaultLayout>
  );
}
