'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var ThemeContext = require('./ThemeContext.js');

const YdsThemeProvider = ({
  theme: themeProp = 'light',
  unit,
  baseUnit,
  children
}) => {
  var _a, _b;
  const parentThemeContext = React.useContext(ThemeContext.ThemeContext);
  const resolvedUnit = (_a = unit !== null && unit !== void 0 ? unit : parentThemeContext === null || parentThemeContext === void 0 ? void 0 : parentThemeContext.unit) !== null && _a !== void 0 ? _a : 'rem';
  const resolvedBaseUnit = (_b = baseUnit !== null && baseUnit !== void 0 ? baseUnit : parentThemeContext === null || parentThemeContext === void 0 ? void 0 : parentThemeContext.baseUnit) !== null && _b !== void 0 ? _b : 16;
  const usingPresetTheme = typeof themeProp === 'string';
  const themeName = usingPresetTheme ? themeProp : 'custom';
  const theme = usingPresetTheme ? themeProp === 'dark' ? ydsCore.darkTheme : themeProp === 'light' ? ydsCore.lightTheme : ydsCore.defaultTheme : themeProp;
  return jsxRuntime.jsx(ThemeContext.ThemeContext.Provider, {
    value: {
      unit: resolvedUnit,
      baseUnit: resolvedBaseUnit
    },
    children: jsxRuntime.jsx(styledComponents.ThemeProvider, {
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

exports.YdsThemeProvider = YdsThemeProvider;
