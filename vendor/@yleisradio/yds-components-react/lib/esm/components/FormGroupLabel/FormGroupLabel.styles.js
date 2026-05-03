import { styled } from 'styled-components';
import { typographyTokens } from '@yleisradio/yds-core';
import { fontStylesAsObject, FontStyleModifier } from '../../helpers/font.js';

const FormGroupLabelStyle = styled.legend.withConfig({
  componentId: "ydscr__sc-m1cqg4-0"
})(({
  theme
}) => Object.assign(Object.assign({
  color: theme.yds.TEXT_DEFAULT
}, fontStylesAsObject({
  theme,
  size: 'md',
  modifier: FontStyleModifier.BOLD
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
const FormGroupOptionalLabel = styled.span.withConfig({
  componentId: "ydscr__sc-m1cqg4-1"
})({
  fontWeight: typographyTokens.FONT_WEIGHT_NORMAL
});

export { FormGroupLabelStyle, FormGroupOptionalLabel };
