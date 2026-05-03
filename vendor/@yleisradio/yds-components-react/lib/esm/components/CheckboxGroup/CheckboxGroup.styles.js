import { styled } from 'styled-components';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';

const StyledFieldset = styled.fieldset.withConfig({
  componentId: "ydscr__sc-1kjad5h-0"
})({
  border: 0,
  padding: 0,
  margin: 0
});
const StyledCheckboxGroup = styled.div.withConfig({
  componentId: "ydscr__sc-1kjad5h-1"
})({
  display: 'flex',
  flexDirection: 'column',
  '& > label:not(:last-child)': {
    marginBottom: 8
  },
  [`&:not(:only-child)`]: {
    marginTop: 8
  }
});
const StyledDescription = styled.div.withConfig({
  componentId: "ydscr__sc-1kjad5h-2"
})(({
  theme
}) => ({
  color: theme.yds.TEXT_DEFAULT,
  fontSize: ydsThemeUnit(14, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  lineHeight: 1.5
}));

export { StyledCheckboxGroup, StyledDescription, StyledFieldset };
