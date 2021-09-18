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
  SurfaceAreaSection,
  WaterDynamicsSection,
  OrganicMatterSection,
  ExchangeCapacitySection,
  AggregatesSection,
  AggregateFormationSection,
  StructureSection,
  PoreSpaceSection,
  HealthyStructureSection,
} from 'layouts/sections/soil-101/physics';

const sections = ['texture', 'aggregation', 'structure', 'pore space', 'healthy structure'];

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
      <Header.Sub headings={soil101Subheadings} pathName='soil-101' className='bg-yellow-500' />
      <HeroSection />
      <div className='container'>
        <SectionsNavBar sections={sections} onClick={handleClick} currentSection={currentSection} color='yellow' />
        <div className='space-y-16 mb-10 sm:space-y-32'>
          <TextureSection ref={assignRefs('texture')} />
          <TexturalClassSection />
          <SurfaceAreaSection />
          <WaterDynamicsSection />
          <OrganicMatterSection />
          <ExchangeCapacitySection />
          <AggregatesSection ref={assignRefs('aggregation')} />
          <AggregateFormationSection />
          <StructureSection ref={assignRefs('structure')} />
          <PoreSpaceSection ref={assignRefs('pore space')} />
          <HealthyStructureSection ref={assignRefs('healthy structure')} />
        </div>
      </div>
      <Footer />
    </DefaultLayout>
  );
}
