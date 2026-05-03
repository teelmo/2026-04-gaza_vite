import { styled } from 'styled-components';
import { typographyTokens } from '@yleisradio/yds-core';
import { ydsThemeUnit } from '../../../helpers/ydsThemeUnit.js';

const Message = styled.p.withConfig({
  componentId: "ydscr__sc-1k4ovao-0"
})(({
  theme,
  $error
}) => ({
  color: $error ? theme.yds.FEEDBACK_ERROR : theme.yds.TEXT_DEFAULT,
  fontFamily: `'${typographyTokens.FONT_FAMILY_DEFAULT}', 'Open Sans', sans-serif`,
  textDecoration: 'none',
  fontSize: ydsThemeUnit(14, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  lineHeight: 1.5,
  margin: '8px 0 0 0'
}));

export { Message };
