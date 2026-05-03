'use strict';

var styledComponents = require('styled-components');
var Checkbox = require('../Checkbox/Checkbox.js');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');

const ChoiceBoxCheckbox = styledComponents.styled(Checkbox.Checkbox).withConfig({
  componentId: "ydscr__sc-lmnb5e-0"
})(({
  controlAlign,
  theme
}) => ({
  '&:focus-visible': {
    outline: 'none'
  },
  '&:focus': {
    outline: 'none'
  },
  marginTop: '-12px',
  top: controlAlign === 'end' ? '50%' : `max(${ydsThemeUnit.ydsThemeUnit('12px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)}, 12px)`
}));

exports.ChoiceBoxCheckbox = ChoiceBoxCheckbox;
