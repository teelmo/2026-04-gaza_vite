'use strict';

const ydsThemeUnit = (value, unitType = 'px', baseUnit = 16) => {
  const REM_BASE = 16; // Default base for rem conversion
  // If it's a number, treat as pixels
  if (typeof value === 'number') {
    return unitType === 'px' ? `${value}px` : `${value / baseUnit}rem`;
  }
  // Extract number and unit from string like "16px" or "1rem"
  const match = value.match(/^([\d.]+)(px|rem)?$/);
  if (!match) {
    throw new Error(`Invalid unit format: ${value}`);
  }
  const [, numStr, originalUnit] = match;
  const num = parseFloat(numStr);
  // If original unit is provided, convert from that
  if (originalUnit) {
    // Convert from rem to rem
    if (originalUnit === 'rem' && unitType === 'rem') {
      return `${num * (REM_BASE / baseUnit)}rem`;
    }
    // Convert from px to rem
    if (originalUnit === 'px' && unitType === 'rem') {
      return `${num / baseUnit}rem`;
    }
    // Convert from rem to px
    if (originalUnit === 'rem' && unitType === 'px') {
      return `${num * baseUnit}px`;
    }
    if (originalUnit === unitType) {
      return value;
    }
  }
  // No unit provided in string, treat as pixels
  return unitType === 'px' ? `${num}px` : `${num / baseUnit}rem`;
};

exports.ydsThemeUnit = ydsThemeUnit;
