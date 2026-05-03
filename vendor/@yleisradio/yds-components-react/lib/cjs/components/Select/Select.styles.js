'use strict';

var styledComponents = require('styled-components');
var font = require('../../helpers/font.js');

const SelectFieldset = styledComponents.styled.fieldset.withConfig({
  componentId: "ydscr__sc-110zd1q-0"
})(["border:none;padding:0;margin:0;display:block;"]);
const SelectWrapper = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-110zd1q-1"
})(["position:relative;border-radius:8px;&::after{content:'';position:absolute;right:12px;top:calc(4px + 0.5em);width:24px;height:24px;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'%3E%3Cpath d='M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z' fill='currentColor'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'%3E%3Cpath d='M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z' fill='currentColor'/%3E%3C/svg%3E\");-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:", ";pointer-events:none;}"], props => props.$isDisabled ? props.theme.yds.TEXT_DISABLED : props.theme.yds.TEXT_DEFAULT);
const determineBorderColor = defaultValue => props => {
  if (props.$error) {
    return props.theme.yds.FEEDBACK_ERROR;
  } else if (props.$success) {
    return props.theme.yds.FEEDBACK_SUCCESS;
  } else {
    return defaultValue;
  }
};
const SelectElement = styledComponents.styled.select.withConfig({
  componentId: "ydscr__sc-110zd1q-2"
})(["appearance:none;padding:4px 40px 4px 16px;", ";margin:0;border:2px solid ", ";height:calc(1em + 32px);width:100%;background-color:", ";outline:none;border-radius:8px;color:", ";&::-ms-expand{display:none;}&:focus,&:active{outline:", ";outline-offset:2px;}&:required:invalid{color:", ";}&:disabled{color:", ";border-color:", ";box-shadow:none;}"], ({
  theme
}) => font.fontStyles({
  theme,
  size: 'md'
}), props => determineBorderColor(props.theme.yds.BORDER), props => props.theme.yds.BACKGROUND_INPUT, props => props.theme.yds.TEXT_DEFAULT, ({
  theme
}) => `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`, props => props.theme.yds.TEXT_INPUT_PLACEHOLDER, props => props.theme.yds.TEXT_DISABLED, props => props.theme.yds.BORDER_DISABLED);
const OptionElement = styledComponents.styled.option.withConfig({
  componentId: "ydscr__sc-110zd1q-3"
})(["&:disabled{color:", ";}&[hidden]:disabled{}"], props => props.theme.yds.TEXT_DISABLED);
const FormElementDescription = styledComponents.styled.p.withConfig({
  componentId: "ydscr__sc-110zd1q-4"
})(["color:", ";", ";text-decoration:none;margin:8px 0 0 0;"], props => props.theme.yds.TEXT_DEFAULT, ({
  theme
}) => font.fontStyles({
  theme,
  size: 'sm'
}));
const FormElementErrorMessage = styledComponents.styled(FormElementDescription).withConfig({
  componentId: "ydscr__sc-110zd1q-5"
})(["color:", ";"], props => props.theme.yds.FEEDBACK_ERROR);

exports.FormElementDescription = FormElementDescription;
exports.FormElementErrorMessage = FormElementErrorMessage;
exports.OptionElement = OptionElement;
exports.SelectElement = SelectElement;
exports.SelectFieldset = SelectFieldset;
exports.SelectWrapper = SelectWrapper;
