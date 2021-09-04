import { soil101Subheadings } from 'data/main-headings';

// components
// import { SidePanel } from 'design-system/templates';
import { SubHeader } from 'design-system/templates/header/sub-header';
import { Footer } from 'design-system/templates/footer';
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

// const sections = ['soil nexus', 'rock weathering', 'soil formation', 'soil processes', 'soil services'];

export default function SoilBiologyPage() {
  // const [currentSection, setCurrentSection] = useState('soil nexus');

  // function handleClick(section: string) {
  //   return () => {
  //     setCurrentSection(section);
  //   };
  // }

  return (
    <DefaultLayout>
      <SubHeader headings={soil101Subheadings} pathName='soil-101' className='bg-blue-500' />
      <HeroSection />
      <div className='container relative'>
        {/* <SidePanel sections={sections} onClick={handleClick} currentSection={currentSection} color='pink' /> */}
        <WhatIsSection />
        <PrinciplesSection />
        <ManagingSection />
        <MeasuringSection />
        <RisksSection />
      </div>
      <Footer />
    </DefaultLayout>
  );
}
