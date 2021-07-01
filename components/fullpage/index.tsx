import React, { useRef, useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// helpers
import { useAppContext } from 'helpers/app-context';

// layout
import { DefaultLayout } from 'layouts';

// components
import { HomeHeader, MainHeader } from 'components/templates';

// interfaces
import { FullPageProps } from './fullpage.interfaces';

export function FullPage({ type, mainHeaderProps, children }: FullPageProps) {
  const { setFullPage } = useAppContext();
  const fullPageRef = useRef<any>(null);
  const slideRef = useRef<NodeJS.Timeout | null>(null);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (fullPageRef.current) {
      setFullPage(fullPageRef.current);
    }
  }, [fullPageRef.current]);

  const handleSectionLeave = (_origin: any, _destination: any, direction: 'up' | 'down') => {
    if (direction === 'up' && hideHeader) {
      setHideHeader(false);
    } else if (direction === 'down' && !hideHeader) {
      setHideHeader(true);
    }
  };

  function autoslide() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.moveSlideRight();
    }
  }

  return (
    <DefaultLayout>
      {type === 'home' ? (
        <HomeHeader fullpageRef={fullPageRef} hideHeader={hideHeader} />
      ) : (
        mainHeaderProps && <MainHeader {...mainHeaderProps} />
      )}
      <ReactFullpage
        ref={fullPageRef}
        licenseKey={null}
        scrollingSpeed={500}
        controlArrows={false}
        verticalCentered={false}
        navigation
        showActiveTooltip
        slidesNavigation
        loading='lazy'
        onLeave={handleSectionLeave}
        afterLoad={(_origin: any, destination: any, _direction: any) => {
          if (destination.item?.classList?.contains('section-home-six-f')) {
            slideRef.current = setInterval(autoslide, 3000);
          } else if (slideRef.current) {
            clearInterval(slideRef.current);
          }
        }}
        render={() => {
          return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
        }}
      />
    </DefaultLayout>
  );
}
