'use strict';

var styledComponents = require('styled-components');
var font = require('../../helpers/font.js');

const TextInputFieldset = styledComponents.styled.fieldset.withConfig({
  componentId: "ydscr__sc-1muz39w-0"
})(["border:none;margin:0;padding:0;"]);
const determineInputBorder = defaultValue => props => {
  if (props.$hasIcon) return 'none';
  if (props.$error) {
    return `2px solid ${props.theme.yds.FEEDBACK_ERROR}`;
  } else if (props.$success) {
    return `2px solid ${props.theme.yds.FEEDBACK_SUCCESS}`;
  } else {
    return `2px solid ${defaultValue}`;
  }
};
const StyledTextInput = styledComponents.styled.input.withConfig({
  componentId: "ydscr__sc-1muz39w-1"
})(["color-scheme:", ";align-items:center;background-color:", ";border:", ";border-radius:", ";color:", ";", ";text-decoration:none;cursor:text;height:", ";outline:none;padding:16px;width:100%;&:focus,&:active{outline:", ";outline-offset:", ";position:relative;z-index:1;}&:disabled{color:", ";border:", ";cursor:default;}&::placeholder{color:", ";}&:disabled:focus,&:disabled:active{color:", ";box-shadow:none;background-color:", ";}&:disabled::placeholder{color:", ";}&::-webkit-search-cancel-button,&::-webkit-search-decoration{-webkit-appearance:none;}padding-left:", ";padding-right:", ";"], ({
  theme
}) => theme.ydsThemeName === 'dark' ? 'dark' : 'inherit', ({
  theme
}) => theme.yds.BACKGROUND_INPUT ? theme.yds.BACKGROUND_INPUT : 'transparent', props => determineInputBorder(props.theme.yds.BORDER), ({
  $hasIcon
}) => $hasIcon ? '6px' : '8px', ({
  theme
}) => theme.yds.TEXT_DEFAULT, ({
  theme
}) => font.fontStyles({
  theme,
  size: 'md'
}), ({
  $hasIcon
}) => $hasIcon ? 'calc(1em + 28px)' : 'calc(1em + 32px)', ({
  theme
}) => `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`, ({
  $hasIcon
}) => $hasIcon ? '4px' : '2px', ({
  theme
}) => theme.yds.TEXT_DISABLED, ({
  theme,
  $hasIcon
}) => $hasIcon ? 'none' : `2px solid ${theme.yds.BORDER_DISABLED}`, ({
  theme
}) => theme.yds.TEXT_INPUT_PLACEHOLDER, ({
  theme
}) => theme.yds.TEXT_DISABLED, ({
  theme
}) => theme.yds.BACKGROUND_INPUT, ({
  theme
}) => theme.yds.TEXT_DISABLED, ({
  $hasIconBefore
}) => $hasIconBefore ? '48px' : '16px', ({
  $hasIcon,
  $hasIconAfter
}) => $hasIcon ? $hasIconAfter ? '80px' : '48px' : '16px');
const TextInputDescription = styledComponents.styled.p.withConfig({
  componentId: "ydscr__sc-1muz39w-2"
})(["color:", ";", ";text-decoration:none;margin:8px 0 0 0;"], ({
  theme
}) => theme.yds.TEXT_DEFAULT, ({
  theme
}) => font.fontStyles({
  theme,
  size: 'sm'
}));
const TextInputErrorMessage = styledComponents.styled(TextInputDescription).withConfig({
  componentId: "ydscr__sc-1muz39w-3"
})(["color:", ";"], ({
  theme
}) => theme.yds.FEEDBACK_ERROR);
const determineInputAndIconContainerBorder = defaultValue => props => {
  if (props.disabled) return `2px solid ${props.theme.yds.BORDER_DISABLED}`;else return determineInputBorder(defaultValue)(props);
};
const InputAndIconContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1muz39w-4"
})(["display:flex;border:", ";border-radius:8px;position:relative;&:focus-within{border:", ";}"], ({
  theme
}) => determineInputAndIconContainerBorder(theme.yds.BORDER), ({
  theme
}) => determineInputAndIconContainerBorder(theme.yds.BORDER));
const iconBase = styledComponents.css(["align-items:center;background-color:transparent;border-radius:4px;border:none;color:", ";display:flex;justify-content:center;padding:0;flex:0;width:48px;height:100%;border-radius:12px;position:absolute;z-index:2;&:focus-visible{outline:none;}&:focus-visible svg{border-radius:2px;outline:3px solid ", ";outline-offset:2px;}"], ({
  theme
}) => theme.yds.TEXT_DEFAULT, ({
  theme
}) => theme.yds.BORDER_PRIMARY_FOCUS);
const InputIconWrapper = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-1muz39w-5"
})(["", ";cursor:default;color:", ";", " & > svg{height:24px;width:24px;}"], iconBase, ({
  theme,
  $isDisabled
}) => $isDisabled ? theme.yds.TEXT_DISABLED : theme.yds.TEXT_DEFAULT, ({
  $location
}) => {
  switch ($location) {
    case 'before':
      return styledComponents.css(["left:0;padding-left:8px;"]);
    case 'after':
      return styledComponents.css(["right:0;padding-right:8px;"]);
    default:
      // 'middle' and 'clearSubmit'
      return styledComponents.css(["right:48px;width:32px;padding-left:8px;"]);
  }
});
const LoadingIndicatorWrapper = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-1muz39w-6"
})(["align-items:center;background-color:transparent;border:none;color:", ";display:flex;justify-content:center;padding:0;flex:0;width:48px;height:100%;border-radius:12px;position:absolute;left:0;padding-left:8px;z-index:2;", ""], ({
  theme
}) => theme.yds.TEXT_DEFAULT, ({
  $isDisabled,
  theme
}) => $isDisabled && styledComponents.css(["& .yds-spinner path{stroke:", ";}"], theme.yds.TEXT_DISABLED));
const InputButtonIcon = styledComponents.styled.button.withConfig({
  componentId: "ydscr__sc-1muz39w-7"
})(["", ";cursor:", ";-webkit-tap-highlight-color:transparent;color:", ";", " & > svg{height:24px;width:24px;}"], iconBase, ({
  disabled
}) => disabled ? 'default' : 'pointer', ({
  theme,
  $isDisabled
}) => $isDisabled ? theme.yds.TEXT_DISABLED : theme.yds.TEXT_DEFAULT, ({
  $location
}) => $location === 'before' ? 'left: 0; padding-left: 8px;' : $location === 'after' ? 'right: 0; padding-right: 8px;' : $location === 'clearSubmit' ? 'right: 40px; padding-right: 0;' : 'right: 48px; width: 32px; padding-left: 8px;');

exports.InputAndIconContainer = InputAndIconContainer;
exports.InputButtonIcon = InputButtonIcon;
exports.InputIconWrapper = InputIconWrapper;
exports.LoadingIndicatorWrapper = LoadingIndicatorWrapper;
exports.StyledTextInput = StyledTextInput;
exports.TextInputDescription = TextInputDescription;
exports.TextInputErrorMessage = TextInputErrorMessage;
exports.TextInputFieldset = TextInputFieldset;
