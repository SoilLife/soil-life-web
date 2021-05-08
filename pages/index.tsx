import DefaultLayout from 'layouts/default';
import {
  HeroSection,
  WheelSection,
  SixFSection,
  StoryOfGenesisSection,
  DigDeeperSection,
  GetInvolvedSection,
  AboutUsSection,
} from 'components/sections/home';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <WheelSection />
      <SixFSection />
      <StoryOfGenesisSection />
      <DigDeeperSection />
      <GetInvolvedSection />
      <AboutUsSection />
    </DefaultLayout>
  );
}
