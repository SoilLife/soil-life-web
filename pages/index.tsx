// components
import { Footer } from 'design-system/templates';
import { FullPage } from 'design-system/components/fullpage';
import {
  HeroSection,
  HealthySoilsSection,
  SixFSection,
  SoilGenesisSection,
  DigDeeperSection,
  GetInvolvedSection,
  AboutUsSection,
} from 'layouts/sections/home';

export default function IndexPage() {
  return (
    <FullPage type='home'>
      <HeroSection />
      <HealthySoilsSection />
      <SixFSection />
      <SoilGenesisSection />
      <DigDeeperSection />
      <GetInvolvedSection />
      <AboutUsSection />
      <Footer className='border-t border-solid border-gray-500' />
    </FullPage>
  );
}
