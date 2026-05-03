import { spacing, typographyTokens } from '@yleisradio/yds-core';
import { styled } from 'styled-components';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';

const StyledFieldset = styled.fieldset.withConfig({
  componentId: "ydscr__sc-q6nn9g-0"
})({
  border: 0,
  padding: 0,
  margin: 0
});
const HorizontalRadioLabelsWrapper = styled.div.withConfig({
  componentId: "ydscr__sc-q6nn9g-1"
})({
  display: 'flex',
  justifyContent: 'space-between',
  marginBlockStart: spacing.SPACING_8,
  paddingBlockEnd: spacing.SPACING_4
});
const HorizontalRadioWrapper = styled.div.withConfig({
  componentId: "ydscr__sc-q6nn9g-2"
})(({
  $numeric = false
}) => ({
  marginBlockStart: spacing.SPACING_8,
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
const StyledRadioGroup = styled.div.withConfig({
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
const StyledDescription = styled.div.withConfig({
  componentId: "ydscr__sc-q6nn9g-4"
})(({
  $direction,
  theme
}) => ({
  fontFamily: `'${typographyTokens.FONT_FAMILY_DEFAULT}', 'Open Sans', sans-serif`,
  marginBlockEnd: $direction === 'horizontal' ? spacing.SPACING_8 : 0,
  color: theme.yds.TEXT_DEFAULT,
  fontSize: ydsThemeUnit(14, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  lineHeight: 1.5
}));
const NumericScaleLabelBase = styled.span.withConfig({
  componentId: "ydscr__sc-q6nn9g-5"
})(({
  theme
}) => ({
  fontFamily: `'${typographyTokens.FONT_FAMILY_DEFAULT}', 'Open Sans', sans-serif`,
  color: theme.yds.TEXT_DEFAULT,
  fontSize: ydsThemeUnit(16, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
}));
const NumericScaleStartLabel = styled(NumericScaleLabelBase).withConfig({
  componentId: "ydscr__sc-q6nn9g-6"
})(({
  $direction
}) => ({
  paddingBlockEnd: $direction === 'horizontal' ? 0 : spacing.SPACING_8
}));
const NumericScaleEndLabel = styled(NumericScaleLabelBase).withConfig({
  componentId: "ydscr__sc-q6nn9g-7"
})(({
  $direction
}) => ({
  padding: 0,
  paddingBlockEnd: $direction === 'horizontal' ? 0 : spacing.SPACING_8,
  textAlign: $direction === 'horizontal' ? 'end' : 'start'
}));

export { HorizontalRadioLabelsWrapper, HorizontalRadioWrapper, NumericScaleEndLabel, NumericScaleStartLabel, StyledDescription, StyledFieldset, StyledRadioGroup };
