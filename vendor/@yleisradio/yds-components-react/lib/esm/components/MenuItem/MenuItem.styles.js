import { styled } from 'styled-components';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';
import { fontStyles } from '../../helpers/font.js';

const MenuItemBase = styled.li.withConfig({
  componentId: "ydscr__sc-w44mez-0"
})(["padding:", ";cursor:", ";", ";line-height:", ";color:", ";background-color:", ";display:flex;align-items:center;flex-flow:row nowrap;-webkit-tap-highlight-color:transparent;@media (hover:hover){&:hover{background-color:", ";}}&:focus-visible{outline:2px solid ", ";outline-offset:-2px;}"], ({
  $menuSize
}) => $menuSize === 'md' ? '12px 16px' : '8px 12px;', ({
  $isDisabled
}) => $isDisabled ? 'not-allowed' : 'pointer', ({
  theme,
  $menuSize
}) => fontStyles({
  theme,
  size: $menuSize
}), ({
  $menuSize
}) => $menuSize === 'md' ? '1.5' : '24px', ({
  $isDisabled,
  theme
}) => $isDisabled ? theme.yds.TEXT_DISABLED : theme.yds.TEXT_DEFAULT, ({
  $isDisabled,
  $isSelected,
  theme
}) => !$isDisabled && $isSelected ? theme.yds.ACTION_SECONDARY_VARIANT : 'transparent', ({
  $isDisabled,
  theme
}) => $isDisabled ? 'transparent' : theme.yds.ACTION_SECONDARY_VARIANT, ({
  theme
}) => theme.yds.FEEDBACK_HIGHLIGHT);
const ContentWrapper = styled.span.withConfig({
  componentId: "ydscr__sc-w44mez-1"
})(["flex:1;"]);
const IconWrapper = styled.span.withConfig({
  componentId: "ydscr__sc-w44mez-2"
})(["display:inline-block;line-height:0;width:", ";height:", ";margin-right:12px;& svg{width:", ";height:", ";color:", ";}"], ({
  theme
}) => ydsThemeUnit('16px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit('16px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit('16px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit('16px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  $highlight,
  theme
}) => $highlight ? theme.yds.FEEDBACK_HIGHLIGHT : '');
const CheckIconWrapper = styled.span.withConfig({
  componentId: "ydscr__sc-w44mez-3"
})(["display:inline-block;line-height:0;width:", ";height:", ";margin-left:8px;& svg{width:", ";height:", ";color:", ";}"], ({
  theme
}) => ydsThemeUnit('20px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit('20px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit('20px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit('20px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  $highlight,
  theme
}) => $highlight ? theme.yds.FEEDBACK_HIGHLIGHT : '');
const MenuSeparatorBase = styled.li.withConfig({
  componentId: "ydscr__sc-w44mez-4"
})(["border-top:2px solid ", ";"], ({
  theme
}) => theme.yds.BORDER_SEPARATOR);

export { CheckIconWrapper, ContentWrapper, IconWrapper, MenuItemBase, MenuSeparatorBase };
