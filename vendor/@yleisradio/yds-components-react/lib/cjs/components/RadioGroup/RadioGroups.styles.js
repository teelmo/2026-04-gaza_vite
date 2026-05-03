'use strict';

var ydsCore = require('@yleisradio/yds-core');
var styledComponents = require('styled-components');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');

const StyledFieldset = styledComponents.styled.fieldset.withConfig({
  componentId: "ydscr__sc-q6nn9g-0"
})({
  border: 0,
  padding: 0,
  margin: 0
});
const HorizontalRadioLabelsWrapper = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-q6nn9g-1"
})({
  display: 'flex',
  justifyContent: 'space-between',
  marginBlockStart: ydsCore.spacing.SPACING_8,
  paddingBlockEnd: ydsCore.spacing.SPACING_4
});
const HorizontalRadioWrapper = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-q6nn9g-2"
})(({
  $numeric = false
}) => ({
  marginBlockStart: ydsCore.spacing.SPACING_8,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: $numeric ? 'space-between' : 'stretch',
  gap: '8px',
  '& > label': {
    display: 'flex',
    flexDirection: 'column',
    paddingInlineStart: 0,
    alignItems: 'center',
    textAlign: 'center',
    margin: 0,
    overflow: 'visible',
    flex: $numeric ? '0 0 0' : '1 0 0',
    minWidth: '24px'
  }
}));
const StyledRadioGroup = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-q6nn9g-3"
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
  componentId: "ydscr__sc-q6nn9g-4"
})(({
  $direction,
  theme
}) => ({
  fontFamily: `'${ydsCore.typographyTokens.FONT_FAMILY_DEFAULT}', 'Open Sans', sans-serif`,
  marginBlockEnd: $direction === 'horizontal' ? ydsCore.spacing.SPACING_8 : 0,
  color: theme.yds.TEXT_DEFAULT,
  fontSize: ydsThemeUnit.ydsThemeUnit(14, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  lineHeight: 1.5
}));
const NumericScaleLabelBase = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-q6nn9g-5"
})(({
  theme
}) => ({
  fontFamily: `'${ydsCore.typographyTokens.FONT_FAMILY_DEFAULT}', 'Open Sans', sans-serif`,
  color: theme.yds.TEXT_DEFAULT,
  fontSize: ydsThemeUnit.ydsThemeUnit(16, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
}));
const NumericScaleStartLabel = styledComponents.styled(NumericScaleLabelBase).withConfig({
  componentId: "ydscr__sc-q6nn9g-6"
})(({
  $direction
}) => ({
  paddingBlockEnd: $direction === 'horizontal' ? 0 : ydsCore.spacing.SPACING_8
}));
const NumericScaleEndLabel = styledComponents.styled(NumericScaleLabelBase).withConfig({
  componentId: "ydscr__sc-q6nn9g-7"
})(({
  $direction
}) => ({
  padding: 0,
  paddingBlockEnd: $direction === 'horizontal' ? 0 : ydsCore.spacing.SPACING_8,
  textAlign: $direction === 'horizontal' ? 'end' : 'start'
}));

exports.HorizontalRadioLabelsWrapper = HorizontalRadioLabelsWrapper;
exports.HorizontalRadioWrapper = HorizontalRadioWrapper;
exports.NumericScaleEndLabel = NumericScaleEndLabel;
exports.NumericScaleStartLabel = NumericScaleStartLabel;
exports.StyledDescription = StyledDescription;
exports.StyledFieldset = StyledFieldset;
exports.StyledRadioGroup = StyledRadioGroup;
