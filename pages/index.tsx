// components
import { Footer } from 'components/templates';
import { FullPage } from 'components/fullpage';
import {
  HeroSection,
  HealthySoilsSection,
  SixFSection,
  SoilGenesisSection,
  DigDeeperSection,
  GetInvolvedSection,
  AboutUsSection,
} from 'components/sections/home';

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
