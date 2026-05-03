'use strict';

var styledComponents = require('styled-components');

styledComponents.styled.fieldset.withConfig({
  componentId: "ydscr__sc-y459sv-0"
})(["border:none;margin:0;padding:0;"]);
const SwitchBase = styledComponents.styled.input.withConfig({
  componentId: "ydscr__sc-y459sv-1"
})(({
  theme
}) => styledComponents.css(["appearance:none;display:flex;position:relative;flex-shrink:0;align-items:center;height:24px;width:44px;border-radius:24px;background-color:", ";padding:3px;margin:0;cursor:pointer;transition:background-color 0.15s linear;-webkit-tap-highlight-color:transparent;&::before{content:'';background-color:", ";width:18px;height:18px;border-radius:19px;position:absolute;transition:transform 0.15s cubic-bezier(0.41,0,0.24,1);}&:checked{background-color:", ";}&:checked::before{transform:translateX(20px);}&:disabled{background-color:", ";}&:focus{outline:none;box-shadow:0 0 0 2px ", ",0 0 0 4px ", ";}@supports selector(:focus-visible){&:focus{box-shadow:none;}&:focus-visible{outline:none;box-shadow:0 0 0 2px ", ",0 0 0 4px ", ";}}"], theme.yds.BACKGROUND_CONTROL, theme.yds.TEXT_NEGATIVE, theme.yds.FEEDBACK_HIGHLIGHT, theme.yds.BACKGROUND_CONTROL_DISABLED, theme.yds.BACKGROUND, theme.yds.ACTION_PRIMARY, theme.yds.BACKGROUND, theme.yds.ACTION_PRIMARY));

exports.SwitchBase = SwitchBase;
