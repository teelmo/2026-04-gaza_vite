'use strict';

var ydsCore = require('@yleisradio/yds-core');
var styledComponents = require('styled-components');
var BaseNotification = require('../../internal/components/BaseNotification/BaseNotification.js');
var ydsThemeUnit = require('../../helpers/ydsThemeUnit.js');
var BaseNotification_styles = require('../../internal/components/BaseNotification/BaseNotification.styles.js');

const backgroundColor = ({
  level,
  theme
}) => {
  var _a;
  const backgroundColorMap = {
    info: theme.BACKGROUND_NEGATIVE,
    success: theme.BACKGROUND_SUCCESS,
    warning: theme.BACKGROUND_WARNING,
    error: theme.BACKGROUND_ERROR
  };
  return (_a = backgroundColorMap[level]) !== null && _a !== void 0 ? _a : 'transparent';
};
const getColor = ({
  theme,
  level
}) => {
  var _a;
  const colorMap = {
    info: theme.TEXT_NEGATIVE,
    success: theme.TEXT_DARK,
    warning: theme.TEXT_DARK,
    error: theme.TEXT_DARK
  };
  return (_a = colorMap[level]) !== null && _a !== void 0 ? _a : theme.TEXT_DARK;
};
const ToastNotificationContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1bcfnwc-0"
})({
  display: 'flex',
  flexDirection: 'column-reverse',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  alignItems: 'center',
  pointerEvents: 'none',
  zIndex: 1000
});
const ToastMotion = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1bcfnwc-1"
})(({
  $height,
  theme
}) => ({
  overflowY: 'hidden',
  transitionProperty: 'height',
  transitionDuration: ydsCore.transition.DURATION_M,
  transitionTimingFunction: ydsCore.transition.EASING_DEC,
  height: $height,
  width: 'calc(100% - 32px)',
  '@media (prefers-reduced-motion: reduce)': {
    transitionProperty: 'none'
  },
  maxWidth: ydsThemeUnit.ydsThemeUnit('400px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit)
}));
const StyledNotification = styledComponents.styled(BaseNotification.BaseNotification).withConfig({
  componentId: "ydscr__sc-1bcfnwc-2"
})(({
  $hasTimer,
  $hasAction,
  $level,
  theme
}) => ({
  pointerEvents: 'auto',
  position: 'relative',
  padding: '12px 16px',
  paddingBottom: $hasTimer ? '18px' : '12px',
  margin: '0 auto',
  width: $hasAction ? '100%' : 'fit-content',
  backgroundColor: backgroundColor({
    level: $level,
    theme: theme.yds
  }),
  color: getColor({
    level: $level,
    theme: theme.yds
  }),
  [BaseNotification_styles.NotificationCloseButton]: {
    color: getColor({
      level: $level,
      theme: theme.yds
    }),
    flexShrink: 0
  }
}));
const ProgressContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1bcfnwc-3"
})({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 6,
  borderRadius: '0 0 8px 8px',
  overflow: 'hidden'
});
const Progress = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-1bcfnwc-4"
})(({
  $level,
  theme
}) => ({
  height: '6px',
  backgroundColor: getColor({
    level: $level,
    theme: theme.yds
  }),
  opacity: theme.ydsThemeName === 'light' && $level === 'info' ? 0.45 : 0.35
}));

exports.Progress = Progress;
exports.ProgressContainer = ProgressContainer;
exports.StyledNotification = StyledNotification;
exports.ToastMotion = ToastMotion;
exports.ToastNotificationContainer = ToastNotificationContainer;
