'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var Button_styles = require('../Button/Button.styles.js');
var Button = require('../Button/Button.js');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');

const buttonGaps = {
  xs: '8px',
  sm: '8px',
  md: '12px',
  lg: '12px'
};
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
    paddingLeft: '16px',
    paddingRight: '16px',
    minHeight: ydsThemeUnit.ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('18px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  }
});
const secondarySizeRules = theme => ({
  xs: {
    paddingLeft: '10px',
    paddingRight: '10px',
    minHeight: ydsThemeUnit.ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('12px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  sm: {
    paddingLeft: '10px',
    paddingRight: '10px',
    minHeight: ydsThemeUnit.ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit.ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit.ydsThemeUnit('14px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  md: {
    paddingLeft: '14px',
    paddingRight: '14px',
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
const StyledButtonGroup = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-16zhhns-0"
})(["display:flex;flex-wrap:wrap;gap:", ";"], props => buttonGaps[props.$size]);
const ButtonGroupButtonBase = styledComponents.styled(Button.Button).withConfig({
  componentId: "ydscr__sc-16zhhns-1"
})(["border-radius:", ";gap:4px;&:focus-visible{border-radius:", ";}", "{padding-left:0;padding-right:0;}", "{& svg{width:", ";height:", ";}}"], ydsCore.radius.LARGE, ydsCore.radius.LARGE, Button_styles.TextWrapper, Button_styles.IconWrapper, props => ydsThemeUnit.ydsThemeUnit('16px', props.theme.ydsThemeProps.unit, props.theme.ydsThemeProps.baseUnit), props => ydsThemeUnit.ydsThemeUnit('16px', props.theme.ydsThemeProps.unit, props.theme.ydsThemeProps.baseUnit));
const ButtonGroupButtonPrimary = styledComponents.styled(ButtonGroupButtonBase).withConfig({
  componentId: "ydscr__sc-16zhhns-2"
})(["background-color:", ";color:", ";border:none;", " position:relative;span{z-index:10;}&:active{background-color:", ";&::before{border-radius:", ";position:absolute;content:'';top:0;left:0;width:100%;height:100%;background-color:", ";z-index:1;}}@media (hover:hover){&:hover{background-color:", ";&::before{border-radius:", ";position:absolute;content:'';top:0;left:0;width:100%;height:100%;background-color:", ";z-index:1;}}}", " &[aria-disabled=\"true\"]:hover{background-color:", ";&::before{background-color:transparent;}}"], props => props.$selected ? props.theme.yds.ACTION_SELECTED : props.theme.yds.ACTION_UNSELECTED, props => props.$selected ? props.theme.yds.TEXT_NEGATIVE : props.theme.yds.TEXT_DEFAULT, props => primarySizeRules(props.theme)[props.$size], props => props.$selected ? props.theme.yds.ACTION_PRIMARY_VARIANT : props.theme.yds.ACTION_UNSELECTED, ydsCore.radius.LARGE, props => props.$selected ? 'transparent' : props.theme.yds.ACTION_SECONDARY_VARIANT, props => props.$isDisabled ? props.theme.yds.ACTION_DISABLED : props.$selected ? props.theme.yds.ACTION_PRIMARY_VARIANT : props.theme.yds.ACTION_UNSELECTED, ydsCore.radius.LARGE, props => props.$isDisabled ? 'transparent' : props.$selected ? 'transparent' : props.theme.yds.ACTION_SECONDARY_VARIANT, props => props.$isDisabled && styledComponents.css`
      color: ${props => props.theme.yds.TEXT_DISABLED};
      background-color: ${props => props.theme.yds.ACTION_DISABLED};
      border-color: transparent;
    `, props => props.$isDisabled ? props.theme.yds.ACTION_DISABLED : props.$selected ? props.theme.yds.ACTION_SELECTED : props.theme.yds.ACTION_UNSELECTED);
const ButtonGroupButtonSecondary = styledComponents.styled(ButtonGroupButtonBase).withConfig({
  componentId: "ydscr__sc-16zhhns-3"
})(["background-color:", ";border-color:", ";color:", ";", " &:active{background-color:", ";border-color:", ";}@media (hover:hover){&:hover{background-color:", ";border-color:", ";}}", ""], props => props.$selected ? props.theme.yds.ACTION_SELECTED : 'transparent', props => props.theme.yds.ACTION_SELECTED, props => props.$selected ? props.theme.yds.TEXT_NEGATIVE : props.theme.yds.TEXT_DEFAULT, props => secondarySizeRules(props.theme)[props.$size], props => props.$selected ? props.theme.yds.ACTION_PRIMARY_VARIANT : props.theme.yds.ACTION_SECONDARY, props => props.$selected ? 'none' : props.theme.yds.ACTION_SELECTED, props => props.$selected && !props.$isDisabled ? props.theme.yds.ACTION_PRIMARY_VARIANT : props.theme.yds.ACTION_SECONDARY, props => props.$selected ? 'none' : props.theme.yds.ACTION_SELECTED, props => props.$isDisabled && styledComponents.css`
      color: ${props => props.theme.yds.TEXT_DISABLED};
      background-color: ${props => props.theme.yds.ACTION_DISABLED};
      border-color: ${props.$selected ? 'transparent' : props.theme.yds.BORDER_DISABLED};

      @media (hover: hover) {
        &:hover {
          background-color: ${props.theme.yds.ACTION_DISABLED};
          border-color: ${props => props.theme.yds.BORDER_DISABLED};
          &::before {
            border-radius: ${ydsCore.radius.LARGE};
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            z-index: 1;
          }
        }
      }
    `);

exports.ButtonGroupButtonBase = ButtonGroupButtonBase;
exports.ButtonGroupButtonPrimary = ButtonGroupButtonPrimary;
exports.ButtonGroupButtonSecondary = ButtonGroupButtonSecondary;
exports.StyledButtonGroup = StyledButtonGroup;
