'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var ydsThemeUnit = require('../../../helpers/ydsThemeUnit.js');

const RadioLabelText = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-ey4igu-0"
})(({
  $direction,
  $controlSize,
  theme
}) => ({
  fontSize: $direction === 'horizontal' || $controlSize === 'sm' ? ydsThemeUnit.ydsThemeUnit(ydsCore.typography.DEFAULT_S_FONT_SIZE, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit) : ydsThemeUnit.ydsThemeUnit(ydsCore.typography.DEFAULT_M_FONT_SIZE, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
}));
const getInlineMargin = (hideLabel, controlAlign, direction) => {
  if (direction === 'horizontal') {
    return `
      margin-inline-start: 0;
      margin-inline-end: 0;
    `;
  }
  if (controlAlign === 'end' && !hideLabel) {
    return `
      margin-inline-start: ${ydsCore.spacing.SPACING_12};
      margin-inline-end: 0;
    `;
  }
  return `
    margin-inline-start: -36px;
    margin-inline-end: ${ydsCore.spacing.SPACING_12};
  `;
};
const RadioBase = styledComponents.styled.input.withConfig({
  componentId: "ydscr__sc-ey4igu-1"
})(({
  theme,
  $variant,
  $error,
  $hideLabel,
  $controlAlign,
  $direction
}) => styledComponents.css(["position:", ";appearance:none;background-color:", ";border:2px solid ", ";border-radius:50%;width:24px;height:24px;cursor:pointer;margin-top:", ";margin-bottom:0;", " margin-block-end:", ";right:", ";vertical-align:bottom;top:", ";&:disabled{cursor:not-allowed;background-color:transparent;border-color:", ";}&:focus,&.focus{outline:3px solid ", ";outline-offset:2px;}@supports selector(:focus-visible){&:focus{outline:none;}&:focus-visible{outline:3px solid ", ";outline-offset:2px;}}&::after{content:'';background-color:", ";border-radius:50%;width:0;height:0;opacity:0;display:", ";top:50%;left:50%;transform:translate(-50%,-50%);position:", ";transition:all 150ms ease-in;}&:checked::after{width:12px;height:12px;opacity:1;}&:checked:disabled{border-color:", ";&::after{background-color:", ";}}", ""], $direction === 'horizontal' ? 'initial' : 'absolute', theme.yds.BACKGROUND, theme.yds.ACTION_PRIMARY, $direction === 'horizontal' ? '0' : '-12px', getInlineMargin($hideLabel, $controlAlign, $direction), $direction === 'horizontal' ? ydsCore.spacing.SPACING_8 : 0, $controlAlign === 'end' && !$hideLabel ? '0' : 'auto', $direction === 'horizontal' ? 0 : $hideLabel ? '12px' : `max(${ydsThemeUnit.ydsThemeUnit('12px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)}, 12px)`, theme.yds.BACKGROUND_CONTROL_DISABLED, theme.yds.FEEDBACK_HIGHLIGHT, theme.yds.FEEDBACK_HIGHLIGHT, $variant === 'secondary' ? theme.yds.FEEDBACK_HIGHLIGHT : theme.yds.ACTION_PRIMARY, $direction === 'horizontal' ? 'flex' : 'inline-block', $direction === 'horizontal' ? 'relative' : 'absolute', theme.yds.TEXT_DISABLED, theme.yds.TEXT_DISABLED, $error && styledComponents.css(["border-color:", ";&::after{background-color:", ";}"], theme.yds.FEEDBACK_ERROR, theme.yds.FEEDBACK_ERROR)));

exports.RadioBase = RadioBase;
exports.RadioLabelText = RadioLabelText;
