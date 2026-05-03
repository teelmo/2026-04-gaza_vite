'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var font = require('../../helpers/font.js');

const buttonColor = (theme, isActive, isDisabled) => {
  if (isDisabled) {
    return theme.yds.TEXT_DISABLED;
  }
  return isActive ? theme.yds.TEXT_NEGATIVE : theme.yds.TEXT_DEFAULT;
};
const TabContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1n22vgb-0"
})(["width:100%;margin:0 auto;position:relative;"]);
const StyledTabList = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1n22vgb-1"
})(["display:flex;justify-content:space-between;gap:8px;background-color:", ";position:relative;border-radius:", ";&::after{content:'';position:absolute;bottom:0;left:0;height:100%;width:", "px;background-color:", ";transition-property:transform;transition-duration:", ";transition-timing-function:", ";transform:", ";z-index:0;border-radius:", ";}"], ({
  theme
}) => theme.yds.ACTION_UNSELECTED, ydsCore.radius.MEDIUM, ({
  $slidingBackgroundStyle
}) => ($slidingBackgroundStyle === null || $slidingBackgroundStyle === void 0 ? void 0 : $slidingBackgroundStyle.width) || 0, ({
  theme
}) => theme.yds.ACTION_SELECTED, ({
  $slidingBackgroundStyle
}) => ($slidingBackgroundStyle === null || $slidingBackgroundStyle === void 0 ? void 0 : $slidingBackgroundStyle.transitionDuration) || ydsCore.transition.DURATION_S, ydsCore.transition.EASING_DEC, ({
  $slidingBackgroundStyle
}) => ($slidingBackgroundStyle === null || $slidingBackgroundStyle === void 0 ? void 0 : $slidingBackgroundStyle.transform) || 'translateX(0)', ydsCore.radius.MEDIUM);
const TabButton = styledComponents.styled.button.withConfig({
  componentId: "ydscr__sc-1n22vgb-2"
})(["flex:1;padding:8px 24px;min-height:40px;border:none;background:", ";cursor:", ";", ";color:", ";border-radius:", ";transition-property:all;transition-duration:", ";transition-timing-function:", ";position:relative;z-index:1;&:focus{outline:none;}&:focus-visible{outline:3px solid ", ";outline-offset:2px;},&:active{background-color:", "},"], ({
  theme,
  $isActiveUncontrolled
}) => $isActiveUncontrolled ? theme.yds.ACTION_SELECTED : 'none', ({
  disabled
}) => disabled ? 'not-allowed' : 'pointer', ({
  theme
}) => font.fontStyles({
  theme,
  size: 'sm',
  modifier: font.FontStyleModifier.BOLD
}), ({
  $active,
  disabled,
  theme
}) => buttonColor(theme, $active, disabled), ydsCore.radius.MEDIUM, ydsCore.transition.DURATION_S, ydsCore.transition.EASING_DEC, ({
  theme
}) => theme.yds.BORDER_PRIMARY_FOCUS, ({
  disabled,
  theme
}) => !disabled ? theme.yds.ACTION_SECONDARY_VARIANT : 'none');

exports.StyledTabList = StyledTabList;
exports.TabButton = TabButton;
exports.TabContainer = TabContainer;
