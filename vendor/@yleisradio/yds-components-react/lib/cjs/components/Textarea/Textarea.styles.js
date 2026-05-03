'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var font = require('../../helpers/font.js');

const TextareaFieldset = styledComponents.styled.fieldset.withConfig({
  componentId: "ydscr__sc-v657vo-0"
})(["border:none;margin:0;padding:0;"]);
const determineBorderColor = defaultValue => props => {
  if (props.$error) {
    return props.theme.yds.FEEDBACK_ERROR;
  } else if (props.$success) {
    return props.theme.yds.FEEDBACK_SUCCESS;
  } else {
    return defaultValue;
  }
};
const StyledTextarea = styledComponents.styled.textarea.withConfig({
  componentId: "ydscr__sc-v657vo-1"
})(["align-items:center;background-color:", ";border:2px solid ", ";border-radius:8px;color:", ";", ";text-decoration:none;display:flex;flex-direction:row;outline:none;padding:", " ", ";width:100%;resize:none;color-scheme:", ";&:focus,&:active{outline:", ";outline-offset:2px;}&:disabled{color:", ";border:", ";cursor:default;}&::placeholder{color:", ";}&:disabled:focus,&:disabled:active{color:", ";box-shadow:none;background-color:", ";}&:disabled::placeholder{color:", ";}"], props => props.theme.yds.BACKGROUND_INPUT, props => determineBorderColor(props.theme.yds.BORDER), props => props.theme.yds.TEXT_DEFAULT, ({
  theme
}) => font.fontStyles({
  theme,
  size: 'md'
}), ydsCore.spacing.SPACING_12, ydsCore.spacing.SPACING_16, ({
  theme
}) => theme.ydsThemeName === 'dark' ? 'dark' : 'light', ({
  theme
}) => `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`, props => props.theme.yds.TEXT_DISABLED, props => `2px solid ${props.theme.yds.TEXT_DISABLED}`, props => props.theme.yds.TEXT_INPUT_PLACEHOLDER, props => props.theme.yds.TEXT_DISABLED, props => props.theme.yds.BACKGROUND_INPUT, props => props.theme.yds.TEXT_DISABLED);
const TextareaDescription = styledComponents.styled.p.withConfig({
  componentId: "ydscr__sc-v657vo-2"
})(["color:", ";", ";text-decoration:none;margin:8px 0 0 0;"], props => props.theme.yds.TEXT_DEFAULT, ({
  theme
}) => font.fontStyles({
  theme,
  size: 'sm'
}));
const TextareaErrorMessage = styledComponents.styled(TextareaDescription).withConfig({
  componentId: "ydscr__sc-v657vo-3"
})(["color:", ";"], props => props.theme.yds.FEEDBACK_ERROR);
const DescriptionContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-v657vo-4"
})({
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  gap: ydsCore.spacing.SPACING_8,
  justifyContent: 'space-between'
});
const CharacterCounter = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-v657vo-5"
})(({
  theme
}) => Object.assign(Object.assign({
  color: theme.yds.TEXT_DEFAULT,
  flexShrink: 0
}, font.fontStylesAsObject({
  theme,
  size: 'sm'
})), {
  margin: `${ydsCore.spacing.SPACING_8} 0 0 auto`
}));

exports.CharacterCounter = CharacterCounter;
exports.DescriptionContainer = DescriptionContainer;
exports.StyledTextarea = StyledTextarea;
exports.TextareaDescription = TextareaDescription;
exports.TextareaErrorMessage = TextareaErrorMessage;
exports.TextareaFieldset = TextareaFieldset;
