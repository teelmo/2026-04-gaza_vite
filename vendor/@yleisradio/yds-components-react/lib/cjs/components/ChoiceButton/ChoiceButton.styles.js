'use strict';

var styledComponents = require('styled-components');
var Radio = require('../Radio/Radio.js');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');

const ChoiceButtonRadio = styledComponents.styled(Radio.Radio).withConfig({
  componentId: "ydscr__sc-1nirp3w-0"
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

exports.ChoiceButtonRadio = ChoiceButtonRadio;
