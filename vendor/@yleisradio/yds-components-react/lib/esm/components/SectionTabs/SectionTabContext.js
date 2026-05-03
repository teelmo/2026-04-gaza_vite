import { createContext, useContext } from 'react';

const SectionTabContext = createContext(undefined);
const useSectionTabContext = () => {
  const context = useContext(SectionTabContext);
  if (!context) {
    return undefined;
  }
  return context;
};

export { SectionTabContext, useSectionTabContext };
