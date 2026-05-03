import { styled } from 'styled-components';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';
import { fontStylesAsObject, FontStyleModifier } from '../../helpers/font.js';

function accordionPadding(size, noBorder, removePadding) {
  const horizontalPaddingValue = size === 'sm' ? '12px' : '16px';
  const horizontalPadding = noBorder || removePadding ? '0px' : horizontalPaddingValue;
  switch (size) {
    case 'sm':
      return `8px ${horizontalPadding}`;
    case 'lg':
      return `20px ${horizontalPadding}`;
    default:
      return `12px ${horizontalPadding}`;
  }
}
const AccordionTitle = styled.button.withConfig({
  componentId: "ydscr__sc-1cls9r6-0"
})(({
  theme,
  $size,
  $isDisabled,
  $noBorder,
  $removePadding,
  $iconAlign
}) => Object.assign(Object.assign({
  display: 'flex',
  justifyContent: $iconAlign === 'start' ? 'flex-start' : 'space-between',
  alignItems: 'center'
}, fontStylesAsObject({
  theme,
  size: $size,
  modifier: FontStyleModifier.BOLD
})), {
  color: $isDisabled ? theme.yds.TEXT_DISABLED : theme.yds.TEXT_DEFAULT,
  width: '100%',
  padding: accordionPadding($size, $noBorder, $removePadding),
  background: 'none',
  border: 'none',
  cursor: $isDisabled ? 'not-allowed' : 'pointer',
  '-webkit-tap-highlight-color': 'transparent',
  '&:focus-visible': {
    outline: `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`
  },
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.yds.ACTION_SECONDARY_VARIANT
    }
  },
  '&:active': {
    backgroundColor: theme.yds.ACTION_SECONDARY_VARIANT
  }
}));
const AccordionBase = styled.div.withConfig({
  componentId: "ydscr__sc-1cls9r6-1"
})(({
  $noBorder,
  theme
}) => ({
  borderTop: $noBorder ? 'none' : `1px solid ${theme.yds.BORDER_SEPARATOR}`,
  marginBottom: '-1px',
  borderBottom: $noBorder ? 'none' : `1px solid ${theme.yds.BORDER_SEPARATOR}`,
  backgroundColor: theme.yds.BACKGROUND
}));
function accordionContentGap(size, padding) {
  if (padding === 'none') {
    return {
      padding: 0,
      margin: 0
    };
  }
  const topGapValue = size === 'sm' ? '8px' : '12px';
  const bottomGapValue = size === 'sm' ? '12px' : '16px';
  return {
    margin: padding === 'vertical' ? 0 : `0 ${topGapValue} 0 ${bottomGapValue}`,
    padding: padding === 'horizontal' ? 0 : `${topGapValue} 0 ${bottomGapValue}`
  };
}
const accordionContentFontSizeMapping = {
  sm: 'S',
  md: 'M',
  lg: 'M'
};
const AccordionContent = styled.div.withConfig({
  componentId: "ydscr__sc-1cls9r6-2"
})(({
  $isDisabled,
  $isOpen,
  $padding,
  $size,
  theme
}) => Object.assign({
  fontSize: fontStylesAsObject({
    theme,
    size: $size,
    sizeMapping: accordionContentFontSizeMapping
  }).fontSize,
  display: $isOpen ? 'block' : 'none',
  color: $isDisabled ? theme.yds.TEXT_DISABLED : theme.yds.TEXT_DEFAULT
}, accordionContentGap($size, $padding)));
const AccordionList = styled.div.withConfig({
  componentId: "ydscr__sc-1cls9r6-3"
})({});
const AccordionTitleText = styled.div.withConfig({
  componentId: "ydscr__sc-1cls9r6-4"
})({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',
  maxWidth: 'calc(100% - 12px - 24px)'
});
const AccordionIconWrapper = styled.div.withConfig({
  componentId: "ydscr__sc-1cls9r6-5"
})(({
  $noBorder,
  $size,
  $iconAlign,
  theme
}) => {
  const borderOffset = $size === 'sm' ? '12px' : '16px';
  return {
    paddingInlineEnd: $noBorder ? borderOffset : 0,
    height: ydsThemeUnit('24px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    display: 'flex',
    alignItems: 'center',
    marginRight: $iconAlign === 'start' ? '16px' : 0
  };
});

export { AccordionBase, AccordionContent, AccordionIconWrapper, AccordionList, AccordionTitle, AccordionTitleText };
