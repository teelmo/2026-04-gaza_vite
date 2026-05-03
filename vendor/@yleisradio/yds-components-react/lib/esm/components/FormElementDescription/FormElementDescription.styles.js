import { styled } from 'styled-components';
import { typography } from '@yleisradio/yds-core';
import { fontStyles } from '../../helpers/font.js';

const FormElementDescriptionStyle = styled.p.withConfig({
  componentId: "ydscr__sc-130d238-0"
})(["color:", ";", ";text-decoration:", ";margin:0;"], props => props.theme.yds.TEXT_DEFAULT, ({
  theme
}) => fontStyles({
  theme,
  size: 'sm'
}), () => typography.DEFAULT_S_TEXT_DECORATION);

export { FormElementDescriptionStyle };
