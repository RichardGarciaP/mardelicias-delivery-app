import { useEffect, useRef } from 'react';

function useEffectOnce(callback: () => void, deps: any[]) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      callback();
    }
  }, deps);
}

export default useEffectOnce;
