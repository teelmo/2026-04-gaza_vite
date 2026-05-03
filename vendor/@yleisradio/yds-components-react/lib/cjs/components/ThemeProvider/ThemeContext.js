'use strict';

var React = require('react');

const ThemeContext = React.createContext({
  unit: 'rem',
  baseUnit: 16
});

exports.ThemeContext = ThemeContext;
