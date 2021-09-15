import { useEffect } from 'react';

export function useFullpageOverflow() {
  useEffect(() => {
    return () => {
      const body = document.querySelector('body');
      const hasFullpage = document.querySelector('#fullpage');

      if (body && !hasFullpage) {
        body.style.overflowY = 'auto';
      } else if (body) {
        body.style.overflowY = 'hidden';
      }
    };
  }, []);
}
