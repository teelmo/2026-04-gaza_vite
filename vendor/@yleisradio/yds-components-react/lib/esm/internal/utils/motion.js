import { useRef, useState, useEffect } from 'react';

const useReducedMotion = () => {
  var _a, _b;
  const mediaQuery = useRef(window === null || window === void 0 ? void 0 : window.matchMedia('(prefers-reduced-motion)'));
  const [prefersReducedMotion, setPrefersReducedMotion] = useState((_b = (_a = mediaQuery.current) === null || _a === void 0 ? void 0 : _a.matches) !== null && _b !== void 0 ? _b : false);
  useEffect(() => {
    const ref = mediaQuery.current;
    const listener = () => setPrefersReducedMotion(ref.matches);
    ref === null || ref === void 0 ? void 0 : ref.addEventListener('change', listener);
    return () => ref === null || ref === void 0 ? void 0 : ref.removeEventListener('change', listener);
  }, []);
  return prefersReducedMotion;
};

export { useReducedMotion };
