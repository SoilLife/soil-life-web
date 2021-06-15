import { useRef, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// layout
import { DefaultLayout } from 'layouts';

// components
import { HomeHeader, MainHeader } from 'components/templates';

// interfaces
import { FullPageProps } from './fullpage.interfaces';

export function FullPage({ type, mainHeaderProps, children }: FullPageProps) {
  const ref = useRef<any>(null);
  const [hideHeader, setHideHeader] = useState(false);

  console.log(ref);

  const handleSectionLeave = (_origin: any, _destination: any, direction: 'up' | 'down') => {
    if (direction === 'up' && hideHeader) {
      setHideHeader(false);
    } else if (direction === 'down' && !hideHeader) {
      setHideHeader(true);
    }
  };

  return (
    <DefaultLayout>
      {type === 'home' ? (
        <HomeHeader fullpageRef={ref} hideHeader={hideHeader} />
      ) : (
        mainHeaderProps && <MainHeader {...mainHeaderProps} />
      )}
      <ReactFullpage
        ref={ref}
        licenseKey={null}
        scrollingSpeed={500}
        controlArrows={false}
        verticalCentered={false}
        navigation
        showActiveTooltip
        slidesNavigation
        loading='lazy'
        onLeave={handleSectionLeave}
        render={() => {
          return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
        }}
      />
    </DefaultLayout>
  );
}
