import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useContext, useState, useEffect } from 'react';
import { ToastNotificationContainer, ToastMotion, StyledNotification, ProgressContainer, Progress } from './ToastNotification.styles.js';
import { ToastContext } from './context.js';
import { useInterval } from '../../internal/utils/interval.js';
import { getIcon } from '../../internal/components/BaseNotification/BaseNotification.js';

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
    notificationProps = __rest(_a, ["icon", "level", "onToastTransitionEnd", "duration", "isExiting", "onClose", "hideCloseButton", "children"]);
  const [height, setHeight] = useState(0);
  const [timer, setTimer] = useState(null);
  const showTimer = !hideCloseButton && !!timer;
  const toastDuration = hideCloseButton && !duration ? 3000 : duration;
  useEffect(() => {
    if (toastDuration) {
      setTimer({
        start: Date.now(),
        ms: 0
      });
    }
  }, [toastDuration]);
  useInterval(() => {
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
  return jsx(ToastMotion, {
    "$height": isExiting ? 0 : height,
    onTransitionEnd: onToastTransitionEnd,
    children: jsxs(StyledNotification, Object.assign({
      ref: e => e && setHeight(e.offsetHeight + 8),
      variant: "primary",
      onClick: handleClick,
      onClose: hideCloseButton ? undefined : onClose,
      level: level,
      closeText: "Sulje",
      isMultiline: false,
      icon: icon !== null && icon !== void 0 ? icon : getIcon(level),
      notificationType: "toast",
      "$hasTimer": showTimer,
      "$hasAction": !hideCloseButton,
      "$level": level
    }, notificationProps, {
      children: [children, showTimer && jsxs(ProgressContainer, {
        children: [jsx(Progress, {
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
  } = useContext(ToastContext);
  return jsx(ToastNotificationContainer, {
    "aria-live": "polite",
    children: notifications.map(_a => {
      var {
          toastId
        } = _a,
        props = __rest(_a, ["toastId"]);
      return jsx(ToastNotification, Object.assign({}, props), toastId);
    })
  });
};

export { ToastNotifications };
