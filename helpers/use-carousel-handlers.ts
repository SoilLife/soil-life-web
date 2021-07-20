import { useCallback } from 'react';

export function useCarouselHandlers(fullpageApi: any) {
  const handlePreviousSlide = useCallback(
    function () {
      if (fullpageApi) {
        fullpageApi.moveSlideLeft();
      }
    },
    [fullpageApi]
  );

  const handleNextSlide = useCallback(
    function () {
      if (fullpageApi) {
        fullpageApi.moveSlideRight();
      }
    },
    [fullpageApi]
  );

  return {
    handlePreviousSlide,
    handleNextSlide,
  };
}
