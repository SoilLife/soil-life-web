import { useCallback } from 'react';

export function useCarouselHandlers(fullpageApiRef: any) {
  const handlePreviousSlide = useCallback(
    function () {
      if (fullpageApiRef) {
        fullpageApiRef.fullpageApi.moveSlideLeft();
      }
    },
    [fullpageApiRef]
  );

  const handleNextSlide = useCallback(
    function () {
      if (fullpageApiRef) {
        fullpageApiRef.fullpageApi.moveSlideRight();
      }
    },
    [fullpageApiRef]
  );

  return {
    handlePreviousSlide,
    handleNextSlide,
  };
}
