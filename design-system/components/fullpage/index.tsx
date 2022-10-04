import React, { useRef, useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import { useAppContext } from "context";
// layout
import { DefaultLayout } from "layouts";

// components
import { Header } from "design-system/templates";

// interfaces
import { FullPageProps } from "./fullpage.interfaces";

export function FullPage({ title, type, subHeaderProps, children, afterLoad }: FullPageProps) {
  const { state, dispatch } = useAppContext();
  const fullPageRef = useRef<any>(null);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (!state.fullpageRef && fullPageRef.current) {
      dispatch({
        type: "SET_FULL_PAGE_REF",
        payload: fullPageRef.current,
      });
    }
  }, [state.fullpageRef, fullPageRef.current]);

  const handleSectionLeave = (_origin: any, _destination: any, direction: "up" | "down") => {
    if (direction === "up" && hideHeader) {
      setHideHeader(false);
    } else if (direction === "down" && !hideHeader) {
      setHideHeader(true);
    }
  };

  return (
    <DefaultLayout title={title}>
      {type === "home" ? (
        <Header.Main fullpageRef={fullPageRef} hideHeader={hideHeader} />
      ) : (
        subHeaderProps && <Header.Sub hideHeader={hideHeader} {...subHeaderProps} />
      )}
      <ReactFullpage
        ref={fullPageRef}
        licenseKey={null}
        scrollingSpeed={500}
        controlArrows={false}
        verticalCentered={false}
        navigation={false}
        showActiveTooltip
        loading="lazy"
        onLeave={handleSectionLeave}
        render={() => {
          return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
        }}
        {...(afterLoad ? { afterLoad: afterLoad(fullPageRef) } : undefined)}
      />
    </DefaultLayout>
  );
}
