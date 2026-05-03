import { styled } from 'styled-components';
import { radius } from '@yleisradio/yds-core';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';
import { fontStyles, FontStyleModifier } from '../../helpers/font.js';

const fontSizeMapping = {
  md: 'XS',
  lg: 'S'
};
const StyledTagFilter = styled.div.withConfig({
  componentId: "ydscr__sc-1x4dlde-0"
})(["display:inline-flex;align-items:center;border-radius:", ";max-width:100%;height:", ";background-color:", ";padding-left:8px;color:", ";gap:8px;", ";"], radius.MEDIUM, ({
  $size,
  theme
}) => ydsThemeUnit($size === 'md' ? 24 : 32, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), props => props.theme.yds.ACTION_UNSELECTED, props => props.theme.yds.TEXT_DEFAULT, ({
  $size,
  theme
}) => fontStyles({
  theme,
  size: $size,
  modifier: FontStyleModifier.BOLD,
  sizeMapping: fontSizeMapping
}));
const TagFilterContent = styled.span.withConfig({
  componentId: "ydscr__sc-1x4dlde-1"
})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;"]);
const TagFilterButton = styled.button.withConfig({
  componentId: "ydscr__sc-1x4dlde-2"
})(["display:flex;align-items:center;justify-content:center;background-color:transparent;border:none;border-radius:", ";cursor:pointer;padding:", ";height:100%;transition:background-color 0.2s ease;color:", ";&:hover{background-color:", ";}&:focus,&.focus{outline:", ";outline-offset:2px;}@supports selector(:focus-visible){&:focus{outline:none;}&:focus-visible{background-color:", ";outline:", ";outline-offset:2px;}}& svg{width:", ";height:", ";}"], radius.MEDIUM, ({
  $size
}) => $size === 'md' ? '0 4px' : '0 8px', props => props.theme.yds.TEXT_DEFAULT, props => props.theme.yds.ACTION_SECONDARY_VARIANT, ({
  theme
}) => `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`, props => props.theme.yds.ACTION_SECONDARY_VARIANT, ({
  theme
}) => `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`, ({
  theme
}) => ydsThemeUnit(16, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit(16, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit));

export { StyledTagFilter, TagFilterButton, TagFilterContent };
