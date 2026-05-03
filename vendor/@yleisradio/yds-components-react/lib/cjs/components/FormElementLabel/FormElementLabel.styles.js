'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');
var font = require('../../helpers/font.js');

const FormElementLabelStyle = styledComponents.styled.label.withConfig({
  componentId: "ydscr__sc-ui1o3z-0"
})(({
  theme,
  $hasMarginBottom,
  $isDisabled
}) => Object.assign(Object.assign({
  display: 'block'
}, font.fontStylesAsObject({
  theme,
  size: 'md',
  modifier: font.FontStyleModifier.BOLD
})), {
  marginBottom: $hasMarginBottom ? ydsThemeUnit.ydsThemeUnit('8px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit) : '0',
  color: $isDisabled ? theme.yds.TEXT_DISABLED : theme.yds.TEXT_DEFAULT,
  '&[for]': {
    cursor: 'pointer'
  },
  '&.visually-hidden': {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  }
}));
const OptionalLabel = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-ui1o3z-1"
})({
  fontWeight: ydsCore.typographyTokens.FONT_WEIGHT_NORMAL
});

exports.FormElementLabelStyle = FormElementLabelStyle;
exports.OptionalLabel = OptionalLabel;
