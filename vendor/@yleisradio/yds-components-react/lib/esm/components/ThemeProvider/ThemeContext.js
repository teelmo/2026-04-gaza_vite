import { createContext } from 'react';

const ThemeContext = createContext({
  unit: 'rem',
  baseUnit: 16
});

export { ThemeContext };
