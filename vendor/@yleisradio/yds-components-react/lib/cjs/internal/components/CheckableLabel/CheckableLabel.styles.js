'use strict';

var styledComponents = require('styled-components');
var font = require('../../../helpers/font.js');

const CheckableLabel = styledComponents.styled.label.withConfig({
  componentId: "ydscr__sc-dibdhq-0"
})(({
  theme,
  $isDisabled,
  $hideLabel,
  $useUnderlay,
  $controlAlign,
  $controlSize
}) => Object.assign(Object.assign({
  display: 'inline-block',
  position: 'relative',
  minHeight: 24,
  height: $hideLabel ? 24 : 'auto',
  width: $hideLabel ? 24 : $controlAlign === 'end' ? '100%' : 'auto',
  verticalAlign: 'top',
  overflow: $hideLabel ? 'hidden' : 'visible',
  clipPath: $hideLabel ? 'inset(-5px calc(100% - 29px) -5px -5px)' : 'none'
}, font.fontStylesAsObject({
  theme,
  size: $controlSize
})), {
  lineHeight: 1.5,
  cursor: 'pointer',
  color: $isDisabled ? theme.yds.TEXT_DISABLED : theme.yds.ACTION_PRIMARY,
  paddingLeft: $hideLabel ? 24 : $controlAlign === 'end' ? 0 : 36,
  paddingRight: $hideLabel ? 0 : $controlAlign === 'end' ? 36 : 0,
  textIndent: $hideLabel ? 12 : 0,
  '&:after': $useUnderlay ? {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    inset: '-9999px',
    zIndex: 1,
    content: `''`
  } : {}
}));

exports.CheckableLabel = CheckableLabel;
