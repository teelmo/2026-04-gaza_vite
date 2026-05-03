import { styled } from 'styled-components';
import { Radio } from '../Radio/Radio.js';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';

const ChoiceButtonRadio = styled(Radio).withConfig({
  componentId: "ydscr__sc-1nirp3w-0"
})(({
  controlAlign,
  theme
}) => ({
  '&:focus-visible': {
    outline: 'none'
  },
  '&:focus': {
    outline: 'none'
  },
  marginTop: '-12px',
  top: controlAlign === 'end' ? '50%' : `max(${ydsThemeUnit('12px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)}, 12px)`
}));

export { ChoiceButtonRadio };
