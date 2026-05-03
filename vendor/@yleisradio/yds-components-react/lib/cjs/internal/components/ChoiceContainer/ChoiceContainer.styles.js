'use strict';

var styledComponents = require('styled-components');
var ydsThemeUnit = require('../../../helpers/ydsThemeUnit.js');
var font = require('../../../helpers/font.js');

const getStatusColor = ({
  theme,
  status
}) => {
  switch (status) {
    case 'success':
      return theme.FEEDBACK_SUCCESS;
    case 'error':
      return theme.FEEDBACK_ERROR;
    default:
      return theme.TEXT_DEFAULT;
  }
};
const ChoiceButtonContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-11i5r05-0"
})(({
  theme,
  $status
}) => Object.assign(Object.assign({
  overflow: 'hidden'
}, font.fontStylesAsObject({
  theme,
  size: 'md'
})), {
  backgroundColor: theme.yds.BACKGROUND_INTERACTIVE,
  borderRadius: 8,
  position: 'relative',
  '&::after': $status ? {
    borderRadius: 8,
    boxShadow: 'inset 0 0 0 2px ' + getStatusColor({
      theme: theme.yds,
      status: $status
    }),
    content: '""',
    display: 'block',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    pointerEvents: 'none'
  } : {},
  '&:focus-within': {
    outline: '3px solid',
    outlineColor: theme.yds.BORDER_PRIMARY_FOCUS
  },
  outlineOffset: 2
}));
const ChoiceButtonHeader = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-11i5r05-1"
})(({
  $size,
  $controlAlign,
  theme
}) => ({
  display: 'flex',
  alignItems: 'center',
  margin: $size === 'sm' ? '8px 16px' : '12px 16px',
  minHeight: 24,
  fontSize: $size === 'sm' ? ydsThemeUnit.ydsThemeUnit(14, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit) : ydsThemeUnit.ydsThemeUnit(16, theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  position: 'relative',
  '& label': {
    paddingRight: $controlAlign === 'end' ? '60px' : '0'
  }
}));
const ChoiceButtonIconContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-11i5r05-2"
})(({
  theme,
  $status,
  $controlAlign
}) => ({
  marginLeft: $controlAlign === 'end' ? '0' : 'auto',
  position: $controlAlign === 'end' ? 'absolute' : 'initial',
  right: $controlAlign === 'end' ? '0' : 'auto',
  display: 'flex',
  color: getStatusColor({
    theme: theme.yds,
    status: $status
  }),
  '> svg': {
    verticalAlign: 'middle'
  },
  marginRight: $controlAlign === 'end' ? '36px' : '0'
}));

exports.ChoiceButtonContainer = ChoiceButtonContainer;
exports.ChoiceButtonHeader = ChoiceButtonHeader;
exports.ChoiceButtonIconContainer = ChoiceButtonIconContainer;
