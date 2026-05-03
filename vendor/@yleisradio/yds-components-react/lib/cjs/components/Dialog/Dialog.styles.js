'use strict';

var styledComponents = require('styled-components');
var font = require('../../helpers/font.js');
var ydsCore = require('@yleisradio/yds-core');

const StyledDialog = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-d9mtae-0"
})(["padding:32px 0 24px;display:flex;flex-direction:column;width:100%;align-items:", ";text-align:", ";"], ({
  $hasIllustrativeIcon
}) => $hasIllustrativeIcon ? 'center' : 'normal', ({
  $hasIllustrativeIcon
}) => $hasIllustrativeIcon ? 'center' : 'left');
const DialogIcon = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-d9mtae-1"
})(["width:96px;height:96px;& > svg{width:100%;height:100%;}"]);
const DialogTitle = styledComponents.styled.h2.withConfig({
  componentId: "ydscr__sc-d9mtae-2"
})(["", ";margin-top:0;padding-left:", "px;margin-bottom:16px;margin-right:", "px;min-height:2rem;display:flex;align-items:center;"], ({
  $size,
  theme
}) => font.fontStyles({
  theme,
  size: $size === 'md' ? '2xl' : 'xl',
  modifier: font.FontStyleModifier.BOLD
}), ({
  $hasIllustrativeIcon
}) => $hasIllustrativeIcon ? 0 : 24, ({
  $hasIllustrativeIcon
}) => $hasIllustrativeIcon ? 0 : 56);
const DialogContent = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-d9mtae-3"
})(["overflow:auto;padding-left:24px;padding-right:24px;transition:box-shadow ", " ", ";flex:1;", ";}"], ydsCore.transition.DURATION_XXS, ydsCore.transition.EASING_DEFAULT, ({
  $showTopBorder,
  $showBottomBorder,
  theme
}) => styledComponents.css`
    box-shadow:
      0 ${$showTopBorder ? '1px' : 0} 0 0 ${theme.yds.BORDER_SEPARATOR} inset,
      0 ${$showBottomBorder ? '-1px' : 0} 0 0 ${theme.yds.BORDER_SEPARATOR} inset;
  `);
const FooterContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-d9mtae-4"
})(["container-type:inline-size;width:100%;flex:0;"]);
const DialogFooter = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-d9mtae-5"
})(["padding-left:24px;padding-right:24px;display:flex;flex-direction:column-reverse;gap:16px;margin-top:24px;width:100%;& > button{width:100%;}", ";"], ({
  $hasIllustrativeIcon
}) => !$hasIllustrativeIcon && styledComponents.css`
      @container (min-width: 500px) {
        flex-direction: row;
        justify-content: flex-end;

        & > button {
          width: auto;
          min-width: 120px;
        }
      }
    `);

exports.DialogContent = DialogContent;
exports.DialogFooter = DialogFooter;
exports.DialogIcon = DialogIcon;
exports.DialogTitle = DialogTitle;
exports.FooterContainer = FooterContainer;
exports.StyledDialog = StyledDialog;
