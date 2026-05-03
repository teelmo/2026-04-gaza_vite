'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');
var font = require('../../helpers/font.js');

const fontSizeMapping = {
  md: 'XS',
  lg: 'S'
};
const StyledTagFilter = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1x4dlde-0"
})(["display:inline-flex;align-items:center;border-radius:", ";max-width:100%;height:", ";background-color:", ";padding-left:8px;color:", ";gap:8px;", ";"], ydsCore.radius.MEDIUM, ({
  $size,
  theme
}) => ydsThemeUnit.ydsThemeUnit($size === 'md' ? 24 : 32, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), props => props.theme.yds.ACTION_UNSELECTED, props => props.theme.yds.TEXT_DEFAULT, ({
  $size,
  theme
}) => font.fontStyles({
  theme,
  size: $size,
  modifier: font.FontStyleModifier.BOLD,
  sizeMapping: fontSizeMapping
}));
const TagFilterContent = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-1x4dlde-1"
})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;"]);
const TagFilterButton = styledComponents.styled.button.withConfig({
  componentId: "ydscr__sc-1x4dlde-2"
})(["display:flex;align-items:center;justify-content:center;background-color:transparent;border:none;border-radius:", ";cursor:pointer;padding:", ";height:100%;transition:background-color 0.2s ease;color:", ";&:hover{background-color:", ";}&:focus,&.focus{outline:", ";outline-offset:2px;}@supports selector(:focus-visible){&:focus{outline:none;}&:focus-visible{background-color:", ";outline:", ";outline-offset:2px;}}& svg{width:", ";height:", ";}"], ydsCore.radius.MEDIUM, ({
  $size
}) => $size === 'md' ? '0 4px' : '0 8px', props => props.theme.yds.TEXT_DEFAULT, props => props.theme.yds.ACTION_SECONDARY_VARIANT, ({
  theme
}) => `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`, props => props.theme.yds.ACTION_SECONDARY_VARIANT, ({
  theme
}) => `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`, ({
  theme
}) => ydsThemeUnit.ydsThemeUnit(16, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit.ydsThemeUnit(16, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit));

exports.StyledTagFilter = StyledTagFilter;
exports.TagFilterButton = TagFilterButton;
exports.TagFilterContent = TagFilterContent;
