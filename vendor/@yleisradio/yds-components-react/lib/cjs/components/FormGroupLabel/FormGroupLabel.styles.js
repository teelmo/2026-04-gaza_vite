'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var font = require('../../helpers/font.js');

const FormGroupLabelStyle = styledComponents.styled.legend.withConfig({
  componentId: "ydscr__sc-m1cqg4-0"
})(({
  theme
}) => Object.assign(Object.assign({
  color: theme.yds.TEXT_DEFAULT
}, font.fontStylesAsObject({
  theme,
  size: 'md',
  modifier: font.FontStyleModifier.BOLD
})), {
  margin: 0,
  padding: 0,
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
const FormGroupOptionalLabel = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-m1cqg4-1"
})({
  fontWeight: ydsCore.typographyTokens.FONT_WEIGHT_NORMAL
});

exports.FormGroupLabelStyle = FormGroupLabelStyle;
exports.FormGroupOptionalLabel = FormGroupOptionalLabel;
