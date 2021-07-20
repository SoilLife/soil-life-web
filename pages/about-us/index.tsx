import { FullPage } from 'design-system/components/fullpage';

// sections
import {
  ContactUsSection,
  OurMissionSection,
  OurStorySection,
  OurTeamSection,
  OurValuesSection,
  OurVisionSection,
} from 'layouts/sections/about-us';
import { Footer } from 'design-system/templates/footer';

export default function AboutUsPage() {
  return (
    <FullPage type='home'>
      <OurStorySection />
      <OurMissionSection />
      <OurVisionSection />
      <OurValuesSection />
      <OurTeamSection />
      <ContactUsSection />
      <Footer />
    </FullPage>
  );
}
