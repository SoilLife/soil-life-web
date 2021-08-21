import { useState, useRef } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
import { FullPage } from 'design-system/components/fullpage';
import { SidePanel } from 'design-system/templates';

// sections
import {
  SoilNexusHeroSection,
  SoilNexusIntroSection,
  EcosystemServicesSection,
  ParentMaterialSection,
  PmTypesSection,
  RockWeatheringSection,
  SoilFormationSection,
  SoilFormingFactorsSection,
  SoilProcessesSection,
} from 'layouts/sections/soil-101/soil-nexus';

const sections = ['soil nexus', 'rock weathering', 'soil formation', 'soil processes', 'soil services'];

const sectionsMap: { [key: string]: number } = {
  'soil nexus': 2,
  'rock weathering': 4,
  'soil formation': 7,
  'soil processes': 9,
  'soil services': 0,
};

export default function SoilNexusPage() {
  const [currentSection, setCurrentSection] = useState('soil nexus');
  const [showSidePanel, setShowSidePanel] = useState(false);
  const fullpageApiRef = useRef<any>(null);
  function handleClick(section: string) {
    return () => {
      if (fullpageApiRef.current) {
        fullpageApiRef.current.moveTo(sectionsMap[section]);
      }
      setCurrentSection(section);
    };
  }

  return (
    <>
      <FullPage
        type='main'
        subHeaderProps={{
          headings: soil101Subheadings,
          pathName: 'soil-101',
          className: 'bg-pink-500',
        }}
        afterLoad={(_fullpageRef) => (origin, destination, direction) => {
          fullpageApiRef.current = _fullpageRef.current?.fullpageApi;
          if (origin.index === 0 && direction === 'down') {
            setShowSidePanel(true);
          } else if (destination.index === 0) {
            setShowSidePanel(false);
          }
          switch (destination.index) {
            case 1:
              setCurrentSection('soil nexus');
              break;
            case 3:
              setCurrentSection('rock weathering');
              break;
            case 6:
              setCurrentSection('soil formation');
              break;
            case 8:
              setCurrentSection('soil processes');
              break;
          }
        }}
      >
        <SoilNexusHeroSection />
        <SoilNexusIntroSection />
        <EcosystemServicesSection />
        <RockWeatheringSection />
        <ParentMaterialSection />
        <PmTypesSection />
        <SoilFormationSection />
        <SoilFormingFactorsSection />
        <SoilProcessesSection />
      </FullPage>
      {showSidePanel && (
        <SidePanel sections={sections} onClick={handleClick} currentSection={currentSection} color='pink' />
      )}
    </>
  );
}
