import { styled } from 'styled-components';
import { Checkbox } from '../Checkbox/Checkbox.js';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';

const ChoiceBoxCheckbox = styled(Checkbox).withConfig({
  componentId: "ydscr__sc-lmnb5e-0"
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

export { ChoiceBoxCheckbox };
