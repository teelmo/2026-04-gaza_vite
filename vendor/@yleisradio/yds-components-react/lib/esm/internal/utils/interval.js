import { useRef, useEffect } from 'react';

const useInterval = (callback, ms) => {
  const storedCallback = useRef(callback);
  useEffect(() => {
    storedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (ms == null) {
      return;
    }
    const id = setInterval(() => storedCallback.current(), ms);
    return () => clearInterval(id);
  }, [ms]);
};

export { useInterval };
