import React, { useEffect, useRef } from 'react';
import { FullPage } from 'design-system/components/fullpage';

// sections
import {
  ContactUsSection,
  OurMissionSection,
  OurStorySection,
  OurStory2Section,
  OurTeamSection,
  OurValuesSection,
  OurVisionSection,
  CreditsSection
} from 'layouts/sections/about-us';
import { Footer } from 'design-system/templates/footer';
import { useAppContext } from 'context';
import { useMedia } from 'react-use';

export default function AboutUsPage() {
  const {
    state: { fullpageRef },
  } = useAppContext();
  const isMobile = useMedia('(max-width: 639px)');
  const ourStorySectionRef = useRef<HTMLDivElement | null>(null);
  const ourStory2SectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isMobile && fullpageRef?.state?.initialized) {
      fullpageRef.fpUtils.show(ourStory2SectionRef.current);
    } else if (fullpageRef?.state?.initialized && ourStory2SectionRef.current && !isMobile) {
      fullpageRef.fpUtils.hide(ourStory2SectionRef.current);
    }
  }, [isMobile, fullpageRef]);

  return (
    <FullPage title='About Us' type='home'>
      <OurStorySection ref={ourStorySectionRef} />
      <OurStory2Section ref={ourStory2SectionRef} />
      <OurMissionSection />
      <OurVisionSection />
      <OurValuesSection />
      <OurTeamSection />
      <ContactUsSection />
      <CreditsSection />
      <Footer />
    </FullPage>
  );
}
