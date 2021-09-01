import { soil101Subheadings } from 'data/main-headings';

// components
// import { SidePanel } from 'design-system/templates';
import { SubHeader } from 'design-system/templates/header/sub-header';

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
} from 'layouts/sections/soil-101/soil-physics';

// const sections = ['soil nexus', 'rock weathering', 'soil formation', 'soil processes', 'soil services'];

export default function SoilNexusPage() {
  // const [currentSection, setCurrentSection] = useState('soil nexus');

  // function handleClick(section: string) {
  //   return () => {
  //     setCurrentSection(section);
  //   };
  // }

  return (
    <>
      <SubHeader headings={soil101Subheadings} pathName='soil-101' className='bg-yellow-500' />
      <HeroSection />
      <div className='container relative'>
        {/* <SidePanel sections={sections} onClick={handleClick} currentSection={currentSection} color='pink' /> */}
        <TextureSection />
        <TexturalClassSection />
        <SurfaceAreaSection />
        <WaterDynamicsSection />
        <OrganicMatterSection />
        <ExchangeCapacitySection />
        <AggregatesSection />
        <AggregateFormationSection />
        <StructureSection />
        <PoreSpaceSection />
        <HealthyStructureSection />
      </div>
    </>
  );
}
