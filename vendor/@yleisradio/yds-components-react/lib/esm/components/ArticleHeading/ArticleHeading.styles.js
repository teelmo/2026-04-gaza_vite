import { styled } from 'styled-components';
import { typographyTokens, typography } from '@yleisradio/yds-core';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';

const getFontSize = (size, desktop) => {
  switch (size) {
    case 'lg':
      return desktop ? typography.DEFAULT_4XL_BOLD_FONT_SIZE : typography.DEFAULT_2XL_BOLD_FONT_SIZE;
    case 'md':
      return desktop ? typography.DEFAULT_2XL_BOLD_FONT_SIZE : typography.DEFAULT_XL_BOLD_FONT_SIZE;
    case 'sm':
      return desktop ? typography.DEFAULT_L_BOLD_FONT_SIZE : typography.DEFAULT_M_BOLD_FONT_SIZE;
    case 'xs':
      return desktop ? typography.DEFAULT_M_BOLD_FONT_SIZE : typography.DEFAULT_S_BOLD_FONT_SIZE;
    default:
      return undefined;
  }
};
const getLineHeight = (size, desktop) => {
  switch (size) {
    case 'lg':
      return desktop ? typography.DEFAULT_4XL_BOLD_LINE_HEIGHT : typography.DEFAULT_2XL_BOLD_LINE_HEIGHT;
    case 'md':
      return desktop ? typography.DEFAULT_2XL_BOLD_LINE_HEIGHT : typography.DEFAULT_XL_BOLD_LINE_HEIGHT;
    case 'sm':
      return desktop ? typography.DEFAULT_L_BOLD_LINE_HEIGHT : typography.DEFAULT_M_BOLD_LINE_HEIGHT;
    case 'xs':
      return desktop ? typography.DEFAULT_M_BOLD_LINE_HEIGHT : typography.DEFAULT_S_BOLD_LINE_HEIGHT;
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
const StyledArticleHading = styled.h1.withConfig({
  componentId: "ydscr__sc-1hg0nfl-0"
})(({
  theme,
  $weight,
  $size,
  $noMargin
}) => ({
  fontFamily: typographyTokens.FONT_FAMILY_DEFAULT,
  lineHeight: getLineHeight($size, false),
  fontSize: ydsThemeUnit(getFontSize($size, false), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  fontWeight: $weight === 'bold' ? 700 : 900,
  color: theme.yds.TEXT_DEFAULT,
  margin: 0,
  marginBottom: $noMargin ? undefined : ydsThemeUnit(getMargin($size, false), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  hyphens: 'manual',
  '@media(min-width: 768px)': {
    fontSize: ydsThemeUnit(getFontSize($size, true), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    lineHeight: getLineHeight($size, true),
    marginBottom: $noMargin ? undefined : ydsThemeUnit(getMargin($size, true), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  }
}));

export { StyledArticleHading };
