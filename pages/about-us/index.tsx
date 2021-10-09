import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FullPage } from 'design-system/components/fullpage';
import { IKContext } from 'imagekitio-react';

// sections
import {
  ContactUsSection,
  OurMissionSection,
  OurStorySection,
  OurStory2Section,
  OurTeamSection,
  OurValuesSection,
  OurVisionSection,
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
    if (isMobile && fullpageRef?.state?.initialized && !ourStory2SectionRef.current) {
      const div = document.createElement('div');
      const id = 'our-story-2';
      div.className = 'section overflow-y-hidden';
      div.id = id;
      ourStorySectionRef.current?.insertAdjacentElement('afterend', div);
      const el = document.getElementById(id);
      if (el) {
        ReactDOM.render(
          <IKContext urlEndpoint='https://ik.imagekit.io/q9koofhilw/'>
            <OurStory2Section ref={ourStory2SectionRef} />
          </IKContext>,
          el
        );
      }
    } else if (fullpageRef?.state?.initialized && ourStory2SectionRef.current && !isMobile) {
      fullpageRef?.fpUtils?.remove(ourStory2SectionRef.current);
      setTimeout(() => {
        ourStory2SectionRef.current = null;
      }, 0);
    }
    fullpageRef?.fullpageApi?.reBuild();
  }, [isMobile, fullpageRef]);

  return (
    <FullPage type='home'>
      <OurStorySection ref={ourStorySectionRef} />
      <OurStory2Section ref={ourStory2SectionRef} />
      <OurMissionSection />
      <OurVisionSection />
      <OurValuesSection />
      <OurTeamSection />
      <ContactUsSection />
      <Footer />
    </FullPage>
  );
}
