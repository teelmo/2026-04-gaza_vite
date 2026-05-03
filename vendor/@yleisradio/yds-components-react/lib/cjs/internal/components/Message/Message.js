'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var ydsThemeUnit = require('../../../helpers/ydsThemeUnit.js');

const Message = styledComponents.styled.p.withConfig({
  componentId: "ydscr__sc-1k4ovao-0"
})(({
  theme,
  $error
}) => ({
  color: $error ? theme.yds.FEEDBACK_ERROR : theme.yds.TEXT_DEFAULT,
  fontFamily: `'${ydsCore.typographyTokens.FONT_FAMILY_DEFAULT}', 'Open Sans', sans-serif`,
  textDecoration: 'none',
  fontSize: ydsThemeUnit.ydsThemeUnit(14, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  lineHeight: 1.5,
  margin: '8px 0 0 0'
}));

exports.Message = Message;
