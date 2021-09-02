import { soil101Subheadings } from 'data/main-headings';

// components
// import { SidePanel } from 'design-system/templates';
import { SubHeader } from 'design-system/templates/header/sub-header';
import { Footer } from 'design-system/templates/footer';
import { DefaultLayout } from 'layouts';

// sections
import {
  HeroSection,
  CircleOfLifeSection,
  SeedGerminationSection,
  PhotosynthesisSection,
  NutrientUptakeSection,
  NutrientCyclingSection,
  CarbonicAcidSection,
  RootIonExchangeSection,
  NutrientAvailabilitySection,
  MetabolismSection,
  DecompositionSection,
  MicrobialWeatheringSection,
  AnimalInputsSection,
} from 'layouts/sections/soil-101/chemistry';

// const sections = ['soil nexus', 'rock weathering', 'soil formation', 'soil processes', 'soil services'];

export default function SoilChemistryPage() {
  // const [currentSection, setCurrentSection] = useState('soil nexus');

  // function handleClick(section: string) {
  //   return () => {
  //     setCurrentSection(section);
  //   };
  // }

  return (
    <DefaultLayout>
      <SubHeader headings={soil101Subheadings} pathName='soil-101' className='bg-orange-500' />
      <HeroSection />
      <div className='container relative'>
        {/* <SidePanel sections={sections} onClick={handleClick} currentSection={currentSection} color='pink' /> */}
        <CircleOfLifeSection />
        <SeedGerminationSection />
        <PhotosynthesisSection />
        <NutrientUptakeSection />
        <NutrientCyclingSection />
        <CarbonicAcidSection />
        <RootIonExchangeSection />
        <NutrientAvailabilitySection />
        <MetabolismSection />
        <DecompositionSection />
        <MicrobialWeatheringSection />
        <AnimalInputsSection />
      </div>
      <Footer />
    </DefaultLayout>
  );
}
