'use strict';

var styledComponents = require('styled-components');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');

const StyledFieldset = styledComponents.styled.fieldset.withConfig({
  componentId: "ydscr__sc-1kjad5h-0"
})({
  border: 0,
  padding: 0,
  margin: 0
});
const StyledCheckboxGroup = styledComponents.styled.div.withConfig({
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
const StyledDescription = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1kjad5h-2"
})(({
  theme
}) => ({
  color: theme.yds.TEXT_DEFAULT,
  fontSize: ydsThemeUnit.ydsThemeUnit(14, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  lineHeight: 1.5
}));

exports.StyledCheckboxGroup = StyledCheckboxGroup;
exports.StyledDescription = StyledDescription;
exports.StyledFieldset = StyledFieldset;
