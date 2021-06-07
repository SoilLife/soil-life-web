// components
import { Footer } from 'components/templates';
import { FullPage } from 'components/fullpage';
import {
  HeroSection,
  HealthySoilsSection,
  SixFSection,
  StoryOfGenesisSection,
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
      <StoryOfGenesisSection />
      <DigDeeperSection />
      <GetInvolvedSection />
      <AboutUsSection />
      <Footer />
    </FullPage>
  );
}
