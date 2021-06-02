import { useRef, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// layout
import DefaultLayout from 'layouts/default';

// components
import { Header, Footer } from 'components/templates';

// sections
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
  const ref = useRef<any>(null);
  const [hideHeader, setHideHeader] = useState(false);

  const handleSectionLeave = (_origin: any, _destination: any, direction: 'up' | 'down') => {
    if (direction === 'up' && hideHeader) {
      setHideHeader(false);
    } else if (direction === 'down' && !hideHeader) {
      setHideHeader(true);
    }
  };

  return (
    <DefaultLayout>
      <Header fullpageRef={ref} hideHeader={hideHeader} />
      <ReactFullpage
        ref={ref}
        licenseKey={null}
        scrollingSpeed={500}
        controlArrows={false}
        verticalCentered={false}
        navigation
        showActiveTooltip
        slidesNavigation
        anchors={['', 'healthy-soils', 'six-f', 'story-of-genesis', 'dig-deeper', 'get-involved', 'about-us', 'footer']}
        onLeave={handleSectionLeave}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <HeroSection />
              <HealthySoilsSection />
              <SixFSection />
              <StoryOfGenesisSection />
              <DigDeeperSection />
              <GetInvolvedSection />
              <AboutUsSection />
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      ></ReactFullpage>
    </DefaultLayout>
  );
}
