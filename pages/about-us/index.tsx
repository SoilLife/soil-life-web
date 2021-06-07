import { FullPage } from 'components/fullpage';

// sections
import {
  ContactUsSection,
  OurMissionSection,
  OurStorySection,
  OurTeamSection,
  OurValuesSection,
  OurVisionSection,
} from 'components/sections/about-us';
import { Footer } from 'components/templates/footer';

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
