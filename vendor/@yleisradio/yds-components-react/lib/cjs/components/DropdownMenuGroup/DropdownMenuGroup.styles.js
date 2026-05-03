'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var Button_styles = require('../Button/Button.styles.js');
var Button = require('../Button/Button.js');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');
var Badge = require('../Badge/Badge.js');

const buttonGaps = {
  xs: '8px',
  sm: '8px',
  md: '12px',
  lg: '12px'
};
const StyledDropdownMenuGroup = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-10nfuh7-0"
})(["display:flex;flex-wrap:wrap;gap:", ";"], props => buttonGaps[props.$size]);
const primarySizeRules = theme => ({
  xs: {
    paddingLeft: '12px',
    paddingRight: '12px',
    minHeight: ydsThemeUnit.ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('12px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  sm: {
    paddingLeft: '12px',
    paddingRight: '12px',
    minHeight: ydsThemeUnit.ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('14px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  md: {
    paddingLeft: '16px',
    paddingRight: '16px',
    minHeight: ydsThemeUnit.ydsThemeUnit('48px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('48px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('16px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  lg: {
    paddingLeft: '14px',
    paddingRight: '14px',
    minHeight: ydsThemeUnit.ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('18px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  }
});
const textSizeRules = theme => ({
  xs: {
    paddingLeft: '12px',
    paddingRight: '12px',
    minHeight: ydsThemeUnit.ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('14px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  sm: {
    paddingLeft: '12px',
    paddingRight: '12px',
    minHeight: ydsThemeUnit.ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('14px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  md: {
    paddingLeft: '16px',
    paddingRight: '16px',
    minHeight: ydsThemeUnit.ydsThemeUnit('48px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('48px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('16px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  lg: {
    paddingLeft: '16px',
    paddingRight: '16px',
    minHeight: ydsThemeUnit.ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('18px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  }
});
styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-10nfuh7-1"
})(["display:flex;flex-wrap:wrap;gap:8px;"]);
const DropdownMenuGroupButtonBase = styledComponents.styled(Button.Button).withConfig({
  componentId: "ydscr__sc-10nfuh7-2"
})(["border-radius:", ";gap:4px;", "{padding-left:0;padding-right:0;}", "{& svg{width:", ";height:", ";}}"], ydsCore.radius.LARGE, Button_styles.TextWrapper, Button_styles.IconWrapper, props => ydsThemeUnit.ydsThemeUnit('16px', props.theme.ydsThemeProps.unit, props.theme.ydsThemeProps.baseUnit), props => ydsThemeUnit.ydsThemeUnit('16px', props.theme.ydsThemeProps.unit, props.theme.ydsThemeProps.baseUnit));
const DropdownMenuGroupButtonPrimary = styledComponents.styled(DropdownMenuGroupButtonBase).withConfig({
  componentId: "ydscr__sc-10nfuh7-3"
})(["background-color:transparent;border-color:", ";color:", ";", " &:active{background-color:", ";border-color:", ";}@media (hover:hover){&:hover{background-color:", ";border-color:", ";}}"], props => props.theme.yds.ACTION_SELECTED, props => props.theme.yds.TEXT_DEFAULT, props => primarySizeRules(props.theme)[props.$size], props => props.theme.yds.ACTION_SECONDARY, props => props.theme.yds.ACTION_SELECTED, props => props.theme.yds.ACTION_SECONDARY, props => props.theme.yds.ACTION_SELECTED);
const DropdownMenuGroupButtonText = styledComponents.styled(DropdownMenuGroupButtonBase).withConfig({
  componentId: "ydscr__sc-10nfuh7-4"
})(["color:", ";border-color:transparent;background-color:transparent;", " ", " &:active{background-color:", ";}@media (hover:hover){&:hover{background-color:", ";}}"], props => props.theme.yds.TEXT_DEFAULT, props => textSizeRules(props.theme)[props.$size], props => props.$removePadding && `
      padding-left: 0;
      padding-right: 0;
      border-radius: ${ydsCore.radius.LARGE};
    `, props => props.theme.yds.ACTION_SECONDARY, props => props.theme.yds.ACTION_SECONDARY);
const StyledDropdownMenuGroupButtonIcon = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-10nfuh7-5"
})(["position:relative;display:inline-flex;align-items:center;justify-content:center;"]);
const StyledBadge = styledComponents.styled(Badge.Badge).withConfig({
  componentId: "ydscr__sc-10nfuh7-6"
})(["position:absolute;top:0;right:0;z-index:1;transform:", ";transition-timing-function:", ";transition-property:transform;transition-duration:", ";"], ({
  $isVisible
}) => $isVisible ? 'scale(1)' : 'scale(0)', ydsCore.transition.EASING_EXP, ydsCore.transition.DURATION_S);

exports.DropdownMenuGroupButtonBase = DropdownMenuGroupButtonBase;
exports.DropdownMenuGroupButtonPrimary = DropdownMenuGroupButtonPrimary;
exports.DropdownMenuGroupButtonText = DropdownMenuGroupButtonText;
exports.StyledBadge = StyledBadge;
exports.StyledDropdownMenuGroup = StyledDropdownMenuGroup;
exports.StyledDropdownMenuGroupButtonIcon = StyledDropdownMenuGroupButtonIcon;
