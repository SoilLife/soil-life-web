// components
import { Footer } from "ui/templates";
import {
  HeroSection,
  HealthySoilsSection,
  SixFSection,
  SoilGenesisSection,
  DigDeeperSection,
  GetInvolvedSection,
  AboutUsSection,
} from "ui/sections/home";
import { DefaultLayout } from "layouts";
import { Header } from "ui/templates/header";

export default function IndexPage() {
  return (
    <DefaultLayout title="Soil Life">
      <Header />
      <HeroSection />
      <HealthySoilsSection />
      <SixFSection />
      <SoilGenesisSection />
      <DigDeeperSection />
      <GetInvolvedSection />
      <AboutUsSection />
      <Footer className="border-t border-solid border-gray-50 snap-start py-4" />
    </DefaultLayout>
  );
}
