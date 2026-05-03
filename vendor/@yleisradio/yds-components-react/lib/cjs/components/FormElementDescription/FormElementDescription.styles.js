'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var font = require('../../helpers/font.js');

const FormElementDescriptionStyle = styledComponents.styled.p.withConfig({
  componentId: "ydscr__sc-130d238-0"
})(["color:", ";", ";text-decoration:", ";margin:0;"], props => props.theme.yds.TEXT_DEFAULT, ({
  theme
}) => font.fontStyles({
  theme,
  size: 'sm'
}), () => ydsCore.typography.DEFAULT_S_TEXT_DECORATION);

exports.FormElementDescriptionStyle = FormElementDescriptionStyle;
