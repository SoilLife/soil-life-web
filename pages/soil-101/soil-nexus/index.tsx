import { useRef } from 'react';

import { soil101Subheadings } from 'data/main-headings';

// components
// import { SidePanel } from 'design-system/templates';
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
    <DefaultLayout>
      <SubHeader headings={soil101Subheadings} pathName='soil-101' className='bg-pink-500' />
      <HeroSection />
      <div className='container relative'>
        {/* <SidePanel sections={sections} onClick={handleClick} currentSection={currentSection} color='pink' /> */}
        <IntroSection ref={soilNexusRef} />
        <EcosystemServicesSection />
        <RockWeatheringSection />
        <ParentMaterialSection />
        <PmTypesSection />
        <FormationSection />
        <FormingFactorsSection />
        <ProcessesSection />
      </div>
      <Footer />
    </DefaultLayout>
  );
}
