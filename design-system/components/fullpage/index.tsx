import React, { useRef, useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import { useAppContext } from 'context';
// layout
import { DefaultLayout } from 'layouts';

// components
import { HomeHeader, MainHeader } from 'design-system/templates';

// interfaces
import { FullPageProps } from './fullpage.interfaces';

export function FullPage({ type, mainHeaderProps, children }: FullPageProps) {
  const { state, dispatch } = useAppContext();

  const fullPageRef = useRef<any>(null);
  const slideRef = useRef<NodeJS.Timeout | null>(null);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (!state.fullpageApi && fullPageRef.current) {
      dispatch({
        type: 'SET_FULL_PAGE_API',
        payload: fullPageRef.current.fullpageApi,
      });
    }
  }, [state.fullpageApi, fullPageRef.current]);

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
