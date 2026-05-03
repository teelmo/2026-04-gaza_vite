import { styled } from 'styled-components';
import { typographyTokens } from '@yleisradio/yds-core';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';
import { fontStylesAsObject, FontStyleModifier } from '../../helpers/font.js';

const FormElementLabelStyle = styled.label.withConfig({
  componentId: "ydscr__sc-ui1o3z-0"
})(({
  theme,
  $hasMarginBottom,
  $isDisabled
}) => Object.assign(Object.assign({
  display: 'block'
}, fontStylesAsObject({
  theme,
  size: 'md',
  modifier: FontStyleModifier.BOLD
})), {
  marginBottom: $hasMarginBottom ? ydsThemeUnit('8px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit) : '0',
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
const OptionalLabel = styled.span.withConfig({
  componentId: "ydscr__sc-ui1o3z-1"
})({
  fontWeight: typographyTokens.FONT_WEIGHT_NORMAL
});

export { FormElementLabelStyle, OptionalLabel };
