'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');

const StyledPageIndicatorContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1ib0xq8-0"
})(["display:flex;gap:", ";align-items:center;"], ({
  theme
}) => ydsThemeUnit.ydsThemeUnit('12px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit));
const StyledPageIndicator = styledComponents.styled.button.withConfig({
  componentId: "ydscr__sc-1ib0xq8-1"
})(["padding:0;margin:0;width:", ";height:", ";border-radius:", ";border:none;cursor:pointer;background-color:", ";position:relative;display:block;&::after{content:'';position:absolute;transform:translate(-50%,-50%);width:", ";height:", ";background-color:transparent;z-index:0;}&:hover{background-color:", ";&::before{border-radius:", ";position:absolute;content:'';top:0;left:0;width:100%;height:100%;background-color:", ";z-index:1;}}&:focus{outline:", ";outline-offset:2px;}@supports selector(:focus-visible){&:focus{outline:none;}&:focus-visible{outline:", ";outline-offset:2px;}}"], ({
  theme
}) => ydsThemeUnit.ydsThemeUnit('12px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit.ydsThemeUnit('12px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ydsCore.radius.FULL, ({
  theme,
  $active
}) => $active ? theme.yds.ACTION_SELECTED : theme.yds.ACTION_UNSELECTED, ({
  theme
}) => ydsThemeUnit.ydsThemeUnit('24px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit.ydsThemeUnit('24px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  $active,
  theme
}) => $active ? theme.yds.ACTION_PRIMARY_VARIANT : theme.yds.ACTION_UNSELECTED, ydsCore.radius.FULL, ({
  $active,
  theme
}) => $active ? 'transparent' : theme.yds.ACTION_SECONDARY_VARIANT, ({
  theme
}) => `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`, ({
  theme
}) => `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`);

exports.StyledPageIndicator = StyledPageIndicator;
exports.StyledPageIndicatorContainer = StyledPageIndicatorContainer;
