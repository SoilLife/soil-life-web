import { useRef } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
// import { SidePanel } from 'design-system/templates';
import { SubHeader } from 'design-system/templates/header/sub-header';

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

// const sections = ['soil nexus', 'rock weathering', 'soil formation', 'soil processes', 'soil services'];

export default function SoilNexusPage() {
  // const [currentSection, setCurrentSection] = useState('soil nexus');
  const soilNexusRef = useRef<HTMLDivElement>(null);

  // function handleClick(section: string) {
  //   return () => {
  //     setCurrentSection(section);
  //   };
  // }

  return (
    <>
      <SubHeader headings={soil101Subheadings} pathName='soil-101' className='bg-pink-500' />
      <SoilNexusHeroSection />
      <div className='container relative'>
        {/* <SidePanel sections={sections} onClick={handleClick} currentSection={currentSection} color='pink' /> */}
        <SoilNexusIntroSection ref={soilNexusRef} />
        <EcosystemServicesSection />
        <RockWeatheringSection />
        <ParentMaterialSection />
        <PmTypesSection />
        <SoilFormationSection />
        <SoilFormingFactorsSection />
        <SoilProcessesSection />
      </div>
    </>
  );
}
