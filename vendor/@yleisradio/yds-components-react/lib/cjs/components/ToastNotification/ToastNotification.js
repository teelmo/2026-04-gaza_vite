'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ToastNotification_styles = require('./ToastNotification.styles.js');
var context = require('./context.js');
var interval = require('../../internal/utils/interval.js');
var BaseNotification = require('../../internal/components/BaseNotification/BaseNotification.js');

const ToastNotification = _a => {
  var {
      icon,
      level,
      onToastTransitionEnd,
      duration,
      isExiting,
      onClose,
      hideCloseButton = false,
      children
    } = _a,
    notificationProps = tslib_es6.__rest(_a, ["icon", "level", "onToastTransitionEnd", "duration", "isExiting", "onClose", "hideCloseButton", "children"]);
  const [height, setHeight] = React.useState(0);
  const [timer, setTimer] = React.useState(null);
  const showTimer = !hideCloseButton && !!timer;
  const toastDuration = hideCloseButton && !duration ? 3000 : duration;
  React.useEffect(() => {
    if (toastDuration) {
      setTimer({
        start: Date.now(),
        ms: 0
      });
    }
  }, [toastDuration]);
  interval.useInterval(() => {
    if (toastDuration && timer && timer.ms >= toastDuration) {
      onClose();
      setTimer(null);
    } else {
      setTimer(timer => timer && {
        start: timer.start,
        ms: Date.now() - timer.start
      });
    }
  }, timer && 10);
  const handleClick = () => {
    if (showTimer) {
      setTimer(null);
    }
  };
  return jsxRuntime.jsx(ToastNotification_styles.ToastMotion, {
    "$height": isExiting ? 0 : height,
    onTransitionEnd: onToastTransitionEnd,
    children: jsxRuntime.jsxs(ToastNotification_styles.StyledNotification, Object.assign({
      ref: e => e && setHeight(e.offsetHeight + 8),
      variant: "primary",
      onClick: handleClick,
      onClose: hideCloseButton ? undefined : onClose,
      level: level,
      closeText: "Sulje",
      isMultiline: false,
      icon: icon !== null && icon !== void 0 ? icon : BaseNotification.getIcon(level),
      notificationType: "toast",
      "$hasTimer": showTimer,
      "$hasAction": !hideCloseButton,
      "$level": level
    }, notificationProps, {
      children: [children, showTimer && jsxRuntime.jsxs(ToastNotification_styles.ProgressContainer, {
        children: [jsxRuntime.jsx(ToastNotification_styles.Progress, {
          style: {
            width: `${(100 - 100 * timer.ms / toastDuration).toFixed(2)}%`
          },
          "$level": level
        }), ' ']
      })]
    }))
  });
};
const ToastNotifications = () => {
  const {
    notifications
  } = React.useContext(context.ToastContext);
  return jsxRuntime.jsx(ToastNotification_styles.ToastNotificationContainer, {
    "aria-live": "polite",
    children: notifications.map(_a => {
      var {
          toastId
        } = _a,
        props = tslib_es6.__rest(_a, ["toastId"]);
      return jsxRuntime.jsx(ToastNotification, Object.assign({}, props), toastId);
    })
  });
};

exports.ToastNotifications = ToastNotifications;
