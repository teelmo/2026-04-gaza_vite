'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');

const getFontSize = (size, desktop) => {
  switch (size) {
    case 'lg':
      return desktop ? ydsCore.typography.DEFAULT_4XL_BOLD_FONT_SIZE : ydsCore.typography.DEFAULT_2XL_BOLD_FONT_SIZE;
    case 'md':
      return desktop ? ydsCore.typography.DEFAULT_2XL_BOLD_FONT_SIZE : ydsCore.typography.DEFAULT_XL_BOLD_FONT_SIZE;
    case 'sm':
      return desktop ? ydsCore.typography.DEFAULT_L_BOLD_FONT_SIZE : ydsCore.typography.DEFAULT_M_BOLD_FONT_SIZE;
    case 'xs':
      return desktop ? ydsCore.typography.DEFAULT_M_BOLD_FONT_SIZE : ydsCore.typography.DEFAULT_S_BOLD_FONT_SIZE;
    default:
      return undefined;
  }
};
const getLineHeight = (size, desktop) => {
  switch (size) {
    case 'lg':
      return desktop ? ydsCore.typography.DEFAULT_4XL_BOLD_LINE_HEIGHT : ydsCore.typography.DEFAULT_2XL_BOLD_LINE_HEIGHT;
    case 'md':
      return desktop ? ydsCore.typography.DEFAULT_2XL_BOLD_LINE_HEIGHT : ydsCore.typography.DEFAULT_XL_BOLD_LINE_HEIGHT;
    case 'sm':
      return desktop ? ydsCore.typography.DEFAULT_L_BOLD_LINE_HEIGHT : ydsCore.typography.DEFAULT_M_BOLD_LINE_HEIGHT;
    case 'xs':
      return desktop ? ydsCore.typography.DEFAULT_M_BOLD_LINE_HEIGHT : ydsCore.typography.DEFAULT_S_BOLD_LINE_HEIGHT;
    default:
      return undefined;
  }
};
const getMargin = (size, desktop) => {
  switch (size) {
    case 'lg':
      return desktop ? 24 : 16;
    case 'md':
      return desktop ? 24 : 16;
    case 'sm':
    case 'xs':
      return desktop ? 16 : 16;
    default:
      return undefined;
  }
};
const StyledArticleHading = styledComponents.styled.h1.withConfig({
  componentId: "ydscr__sc-1hg0nfl-0"
})(({
  theme,
  $weight,
  $size,
  $noMargin
}) => ({
  fontFamily: ydsCore.typographyTokens.FONT_FAMILY_DEFAULT,
  lineHeight: getLineHeight($size, false),
  fontSize: ydsThemeUnit.ydsThemeUnit(getFontSize($size, false), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  fontWeight: $weight === 'bold' ? 700 : 900,
  color: theme.yds.TEXT_DEFAULT,
  margin: 0,
  marginBottom: $noMargin ? undefined : ydsThemeUnit.ydsThemeUnit(getMargin($size, false), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  hyphens: 'manual',
  '@media(min-width: 768px)': {
    fontSize: ydsThemeUnit.ydsThemeUnit(getFontSize($size, true), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    lineHeight: getLineHeight($size, true),
    marginBottom: $noMargin ? undefined : ydsThemeUnit.ydsThemeUnit(getMargin($size, true), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  }
}));

exports.StyledArticleHading = StyledArticleHading;
