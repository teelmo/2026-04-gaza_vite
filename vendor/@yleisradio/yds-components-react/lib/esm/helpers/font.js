import { typography } from '@yleisradio/yds-core';
import { css } from 'styled-components';
import { ydsThemeUnit } from './ydsThemeUnit.js';

var FontStyleModifier;
(function (FontStyleModifier) {
  FontStyleModifier["BOLD"] = "BOLD";
  FontStyleModifier["BOLD_AC"] = "BOLD_AC";
  FontStyleModifier["CONDENSED"] = "CONDENSED";
  FontStyleModifier["CONDENSED_BOLD"] = "CONDENSED_BOLD";
  FontStyleModifier["CONDENSED_HEAVY"] = "CONDENSED_HEAVY";
})(FontStyleModifier || (FontStyleModifier = {}));
var FontProperty;
(function (FontProperty) {
  FontProperty["FONT_SIZE"] = "FONT_SIZE";
  FontProperty["LINE_HEIGHT"] = "LINE_HEIGHT";
  FontProperty["FONT_WEIGHT"] = "FONT_WEIGHT";
  FontProperty["FONT_STYLE"] = "FONT_STYLE";
  FontProperty["FONT_FAMILY"] = "FONT_FAMILY";
  FontProperty["LETTER_SPACING"] = "LETTER_SPACING";
})(FontProperty || (FontProperty = {}));
const defaultFontSizeMapping = {
  xs: 'XS',
  sm: 'S',
  md: 'M',
  lg: 'L',
  xl: 'XL',
  '2xl': '2XL'
};
function getTypographyValue(fontProperty, size, modifier, sizeMapping = defaultFontSizeMapping) {
  const fontSize = sizeMapping[size];
  if (!fontSize) {
    throw new Error(`Invalid font size: ${size}`);
  }
  const fontPropertyFullName = modifier ? `DEFAULT_${fontSize}_${modifier}_${fontProperty}` : `DEFAULT_${fontSize}_${fontProperty}`;
  const typographyValue = typography[fontPropertyFullName];
  if (typographyValue === undefined) {
    throw new Error(`Invalid font property: ${fontPropertyFullName}`);
  }
  return typographyValue;
}
function fontStylesAsObject({
  theme,
  size,
  modifier,
  sizeMapping
}) {
  const fontSize = ydsThemeUnit(getTypographyValue(FontProperty.FONT_SIZE, size, modifier, sizeMapping), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit);
  const lineHeight = getTypographyValue(FontProperty.LINE_HEIGHT, size, modifier, sizeMapping);
  const fontWeight = getTypographyValue(FontProperty.FONT_WEIGHT, size, modifier, sizeMapping);
  const fontStyle = getTypographyValue(FontProperty.FONT_STYLE, size, modifier, sizeMapping);
  const fontFamily = `"${getTypographyValue(FontProperty.FONT_FAMILY, size, modifier, sizeMapping)}", "Open Sans", sans-serif`;
  const letterSpacing = getTypographyValue(FontProperty.LETTER_SPACING, size, modifier, sizeMapping);
  return {
    fontSize,
    fontWeight,
    fontStyle,
    fontFamily,
    lineHeight,
    letterSpacing
  };
}
function fontStyles({
  theme,
  size,
  modifier,
  sizeMapping
}) {
  const fontStyles = fontStylesAsObject({
    theme,
    size,
    modifier,
    sizeMapping
  });
  return css(["font-size:", ";line-height:", ";font-weight:", ";font-style:", ";font-family:", ";letter-spacing:", ";"], fontStyles.fontSize, fontStyles.lineHeight, fontStyles.fontWeight, fontStyles.fontStyle, fontStyles.fontFamily, fontStyles.letterSpacing);
}

export { FontProperty, FontStyleModifier, fontStyles, fontStylesAsObject };
