'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var BaseNotification = require('../../internal/components/BaseNotification/BaseNotification.js');
var styledComponents = require('styled-components');

const Notification = React.forwardRef((_a, ref) => {
  var {
      actions,
      children,
      hideIcon,
      isMultiline,
      level = 'info',
      onClose,
      title,
      variant = 'primary'
    } = _a,
    other = tslib_es6.__rest(_a, ["actions", "children", "hideIcon", "isMultiline", "level", "onClose", "title", "variant"]);
  const theme = styledComponents.useTheme();
  const ydsTheme = theme.ydsThemeName === 'custom' ? theme.yds : theme.ydsThemeName;
  return jsxRuntime.jsx(BaseNotification.BaseNotification, Object.assign({
    ref: ref,
    icon: BaseNotification.getIcon(level),
    level: level,
    variant: variant,
    hideIcon: hideIcon,
    isMultiline: isMultiline,
    onClose: onClose,
    title: title,
    actions: actions,
    closeIcon: jsxRuntime.jsx(ydsIconsReact.Close, {}),
    ydsTheme: variant === 'primary' || level !== 'info' && variant !== 'text' ? 'light' : ydsTheme,
    notificationType: "inline"
  }, other, {
    children: children
  }));
});

exports.Notification = Notification;
