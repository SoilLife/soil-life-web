import React from "react";
import { DefaultLayout } from "layouts";
import { Header } from "ui/templates/header";

// sections
import {
  ContactUsSection,
  OurMissionSection,
  OurStorySection,
  OurTeamSection,
  OurValuesSection,
  OurVisionSection,
  CreditsSection,
} from "ui/sections/about-us";
import { Footer } from "ui/templates/footer";

export default function AboutUsPage() {
  return (
    <DefaultLayout title="About Us">
      <Header />
      <OurStorySection />
      <OurMissionSection />
      <OurVisionSection />
      <OurValuesSection />
      <OurTeamSection />
      <ContactUsSection />
      <CreditsSection />
      <Footer className="snap-start mt-10" />
    </DefaultLayout>
  );
}
