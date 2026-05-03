import { jsx } from 'react/jsx-runtime';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, defaultTheme } from '@yleisradio/yds-core';
import { ThemeContext } from './ThemeContext.js';

const YdsThemeProvider = ({
  theme: themeProp = 'light',
  unit,
  baseUnit,
  children
}) => {
  var _a, _b;
  const parentThemeContext = useContext(ThemeContext);
  const resolvedUnit = (_a = unit !== null && unit !== void 0 ? unit : parentThemeContext === null || parentThemeContext === void 0 ? void 0 : parentThemeContext.unit) !== null && _a !== void 0 ? _a : 'rem';
  const resolvedBaseUnit = (_b = baseUnit !== null && baseUnit !== void 0 ? baseUnit : parentThemeContext === null || parentThemeContext === void 0 ? void 0 : parentThemeContext.baseUnit) !== null && _b !== void 0 ? _b : 16;
  const usingPresetTheme = typeof themeProp === 'string';
  const themeName = usingPresetTheme ? themeProp : 'custom';
  const theme = usingPresetTheme ? themeProp === 'dark' ? darkTheme : themeProp === 'light' ? lightTheme : defaultTheme : themeProp;
  return jsx(ThemeContext.Provider, {
    value: {
      unit: resolvedUnit,
      baseUnit: resolvedBaseUnit
    },
    children: jsx(ThemeProvider, {
      theme: {
        ydsThemeName: themeName,
        yds: theme,
        ydsThemeProps: {
          unit: resolvedUnit,
          baseUnit: resolvedBaseUnit
        }
      },
      children: children
    })
  });
};

export { YdsThemeProvider };
