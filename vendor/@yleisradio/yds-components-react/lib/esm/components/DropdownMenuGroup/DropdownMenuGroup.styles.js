import { styled } from 'styled-components';
import { radius, transition } from '@yleisradio/yds-core';
import { TextWrapper, IconWrapper } from '../Button/Button.styles.js';
import { Button } from '../Button/Button.js';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';
import { Badge } from '../Badge/Badge.js';

const buttonGaps = {
  xs: '8px',
  sm: '8px',
  md: '12px',
  lg: '12px'
};
const StyledDropdownMenuGroup = styled.div.withConfig({
  componentId: "ydscr__sc-10nfuh7-0"
})(["display:flex;flex-wrap:wrap;gap:", ";"], props => buttonGaps[props.$size]);
const primarySizeRules = theme => ({
  xs: {
    paddingLeft: '12px',
    paddingRight: '12px',
    minHeight: ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit('12px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  sm: {
    paddingLeft: '12px',
    paddingRight: '12px',
    minHeight: ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit('14px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  md: {
    paddingLeft: '16px',
    paddingRight: '16px',
    minHeight: ydsThemeUnit('48px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit('48px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit('16px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  lg: {
    paddingLeft: '14px',
    paddingRight: '14px',
    minHeight: ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit('18px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  }
});
const textSizeRules = theme => ({
  xs: {
    paddingLeft: '12px',
    paddingRight: '12px',
    minHeight: ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit('32px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit('14px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  sm: {
    paddingLeft: '12px',
    paddingRight: '12px',
    minHeight: ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit('40px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit('14px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  md: {
    paddingLeft: '16px',
    paddingRight: '16px',
    minHeight: ydsThemeUnit('48px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit('48px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit('16px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  },
  lg: {
    paddingLeft: '16px',
    paddingRight: '16px',
    minHeight: ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    minWidth: ydsThemeUnit('56px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
    fontSize: ydsThemeUnit('18px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
  }
});
styled.div.withConfig({
  componentId: "ydscr__sc-10nfuh7-1"
})(["display:flex;flex-wrap:wrap;gap:8px;"]);
const DropdownMenuGroupButtonBase = styled(Button).withConfig({
  componentId: "ydscr__sc-10nfuh7-2"
})(["border-radius:", ";gap:4px;", "{padding-left:0;padding-right:0;}", "{& svg{width:", ";height:", ";}}"], radius.LARGE, TextWrapper, IconWrapper, props => ydsThemeUnit('16px', props.theme.ydsThemeProps.unit, props.theme.ydsThemeProps.baseUnit), props => ydsThemeUnit('16px', props.theme.ydsThemeProps.unit, props.theme.ydsThemeProps.baseUnit));
const DropdownMenuGroupButtonPrimary = styled(DropdownMenuGroupButtonBase).withConfig({
  componentId: "ydscr__sc-10nfuh7-3"
})(["background-color:transparent;border-color:", ";color:", ";", " &:active{background-color:", ";border-color:", ";}@media (hover:hover){&:hover{background-color:", ";border-color:", ";}}"], props => props.theme.yds.ACTION_SELECTED, props => props.theme.yds.TEXT_DEFAULT, props => primarySizeRules(props.theme)[props.$size], props => props.theme.yds.ACTION_SECONDARY, props => props.theme.yds.ACTION_SELECTED, props => props.theme.yds.ACTION_SECONDARY, props => props.theme.yds.ACTION_SELECTED);
const DropdownMenuGroupButtonText = styled(DropdownMenuGroupButtonBase).withConfig({
  componentId: "ydscr__sc-10nfuh7-4"
})(["color:", ";border-color:transparent;background-color:transparent;", " ", " &:active{background-color:", ";}@media (hover:hover){&:hover{background-color:", ";}}"], props => props.theme.yds.TEXT_DEFAULT, props => textSizeRules(props.theme)[props.$size], props => props.$removePadding && `
      padding-left: 0;
      padding-right: 0;
      border-radius: ${radius.LARGE};
    `, props => props.theme.yds.ACTION_SECONDARY, props => props.theme.yds.ACTION_SECONDARY);
const StyledDropdownMenuGroupButtonIcon = styled.div.withConfig({
  componentId: "ydscr__sc-10nfuh7-5"
})(["position:relative;display:inline-flex;align-items:center;justify-content:center;"]);
const StyledBadge = styled(Badge).withConfig({
  componentId: "ydscr__sc-10nfuh7-6"
})(["position:absolute;top:0;right:0;z-index:1;transform:", ";transition-timing-function:", ";transition-property:transform;transition-duration:", ";"], ({
  $isVisible
}) => $isVisible ? 'scale(1)' : 'scale(0)', transition.EASING_EXP, transition.DURATION_S);

export { DropdownMenuGroupButtonBase, DropdownMenuGroupButtonPrimary, DropdownMenuGroupButtonText, StyledBadge, StyledDropdownMenuGroup, StyledDropdownMenuGroupButtonIcon };
