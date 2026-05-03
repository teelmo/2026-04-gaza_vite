'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var BaseNotification = require('../../internal/components/BaseNotification/BaseNotification.js');

const BannerNotification = React.forwardRef((_a, ref) => {
  var {
      actions,
      children,
      hideIcon,
      level = 'info',
      onClose,
      title,
      contentContainer
    } = _a,
    other = tslib_es6.__rest(_a, ["actions", "children", "hideIcon", "level", "onClose", "title", "contentContainer"]);
  return jsxRuntime.jsx(BaseNotification.BaseNotification, Object.assign({
    ref: ref,
    icon: BaseNotification.getIcon(level),
    level: level,
    variant: "primary",
    hideIcon: hideIcon,
    isMultiline: false,
    onClose: onClose,
    title: title,
    actions: actions,
    closeIcon: jsxRuntime.jsx(ydsIconsReact.Close, {}),
    ydsTheme: "light",
    notificationType: "banner",
    contentContainer: contentContainer
  }, other, {
    children: children
  }));
});

exports.BannerNotification = BannerNotification;
