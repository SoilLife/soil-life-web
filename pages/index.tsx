import { useRef, useEffect } from 'react';

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
  const slideRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (slideRef.current) {
        clearInterval(slideRef.current);
      }
    };
  }, [slideRef.current]);

  return (
    <FullPage
      type='home'
      afterLoad={(fullpageRef) => (_origin, destination) => {
        function autoslide() {
          if (fullpageRef.current) {
            fullpageRef.current.fullpageApi.moveSlideRight();
          }
        }

        if (destination.item?.classList?.contains('section-home-six-f')) {
          if (!slideRef.current) {
            slideRef.current = setInterval(autoslide, 3000);
          }
        } else if (slideRef.current) {
          clearInterval(slideRef.current);
        }
      }}
    >
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
